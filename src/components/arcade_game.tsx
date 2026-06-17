"use client"

import { useState, useEffect, useRef, useCallback } from "react"

const COLS = 20
const ROWS = 15
const CELL = 28
const INITIAL_SPEED = 200

type Cell = string | null
type Board = Cell[][]
type Shape = number[][]
type TetrominoKey = "I" | "O" | "T" | "S" | "Z" | "L" | "J"
interface Tetromino {
  shape: Shape
  color: string
}
interface Piece {
  shape: Shape
  color: string
  x: number
  y: number
}

const TETROMINOES: Record<TetrominoKey, Tetromino> = {
  I: { shape: [[1,1,1,1]], color: "#00f5ff" },
  O: { shape: [[1,1],[1,1]], color: "#00c8ff" },
  T: { shape: [[0,1,0],[1,1,1]], color: "#7b2fff" },
  S: { shape: [[0,1,1],[1,1,0]], color: "#00ff9d" },
  Z: { shape: [[1,1,0],[0,1,1]], color: "#ff4d6a" },
  L: { shape: [[1,0],[1,0],[1,1]], color: "#ff9900" },
  J: { shape: [[0,1],[0,1],[1,1]], color: "#00aaff" },
}

const KEYS = Object.keys(TETROMINOES) as TetrominoKey[]

function emptyBoard(): Board {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null))
}

function randomPiece(): Piece {
  const key = KEYS[Math.floor(Math.random() * KEYS.length)]
  return { shape: TETROMINOES[key].shape, color: TETROMINOES[key].color, x: Math.floor(COLS / 2) - 1, y: 0 }
}

function rotate(shape: Shape): Shape {
  return shape[0].map((_, i) => shape.map(row => row[i]).reverse())
}

function collides(board: Board, piece: Piece, dx = 0, dy = 0, shape: Shape = piece.shape): boolean {
  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      if (!shape[r][c]) continue
      const nx = piece.x + c + dx
      const ny = piece.y + r + dy
      if (nx < 0 || nx >= COLS || ny >= ROWS) return true
      if (ny >= 0 && board[ny][nx]) return true
    }
  }
  return false
}

function merge(board: Board, piece: Piece): Board {
  const next = board.map(r => [...r])
  piece.shape.forEach((row, r) => {
    row.forEach((v, c) => {
      if (v && piece.y + r >= 0) next[piece.y + r][piece.x + c] = piece.color
    })
  })
  return next
}

function clearLines(board: Board): { board: Board; lines: number } {
  const kept = board.filter(row => row.some(cell => !cell))
  const cleared = ROWS - kept.length
  const blanks = Array.from({ length: cleared }, () => Array(COLS).fill(null))
  return { board: [...blanks, ...kept], lines: cleared }
}

export default function ArcadeGame() {
  const [board, setBoard] = useState<Board>(emptyBoard)
  const [piece, setPiece] = useState<Piece | null>(null)
  const [score, setScore] = useState(0)
  const [lines, setLines] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [started, setStarted] = useState(false)
  const [paused, setPaused] = useState(false)
  const boardRef = useRef<Board>(emptyBoard())
  const pieceRef = useRef<Piece | null>(null)
  const pausedRef = useRef(false)
  const gameOverRef = useRef(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const spawnPiece = useCallback((b: Board) => {
    const p = randomPiece()
    if (collides(b, p)) {
      gameOverRef.current = true
      setGameOver(true)
      if (intervalRef.current) clearInterval(intervalRef.current)
    } else {
      pieceRef.current = p
      setPiece({ ...p })
    }
  }, [])

  const lockPiece = useCallback(() => {
    const currentPiece = pieceRef.current
    if (!currentPiece) return
    const b = merge(boardRef.current, currentPiece)
    const { board: nb, lines: cleared } = clearLines(b)
    boardRef.current = nb
    setBoard(nb.map(r => [...r]))
    setScore(s => s + cleared * 100 + 10)
    setLines(l => l + cleared)
    spawnPiece(nb)
  }, [spawnPiece])

  const drop = useCallback(() => {
    const currentPiece = pieceRef.current
    if (pausedRef.current || gameOverRef.current || !currentPiece) return
    if (!collides(boardRef.current, currentPiece, 0, 1)) {
      pieceRef.current = { ...currentPiece, y: currentPiece.y + 1 }
      setPiece({ ...pieceRef.current })
    } else {
      lockPiece()
    }
  }, [lockPiece])

  const startGame = useCallback(() => {
    const b = emptyBoard()
    boardRef.current = b
    gameOverRef.current = false
    pausedRef.current = false
    setBoard(b)
    setScore(0)
    setLines(0)
    setGameOver(false)
    setPaused(false)
    setStarted(true)
    const p = randomPiece()
    pieceRef.current = p
    setPiece({ ...p })
  }, [])

  useEffect(() => {
    if (!started || gameOver) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(drop, INITIAL_SPEED)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [started, gameOver, drop])

  useEffect(() => {
    if (!started) return
    const onKey = (e: KeyboardEvent) => {
      const p = pieceRef.current
      if (gameOverRef.current || !p) return
      if (e.key === "p" || e.key === "P") {
        pausedRef.current = !pausedRef.current
        setPaused(pausedRef.current)
        return
      }
      if (pausedRef.current) return
      if (e.key === "ArrowLeft" && !collides(boardRef.current, p, -1, 0)) {
        pieceRef.current = { ...p, x: p.x - 1 }
        setPiece({ ...pieceRef.current })
      } else if (e.key === "ArrowRight" && !collides(boardRef.current, p, 1, 0)) {
        pieceRef.current = { ...p, x: p.x + 1 }
        setPiece({ ...pieceRef.current })
      } else if (e.key === "ArrowDown") {
        drop()
      } else if (e.key === "ArrowUp") {
        const rotated = rotate(p.shape)
        if (!collides(boardRef.current, p, 0, 0, rotated)) {
          pieceRef.current = { ...p, shape: rotated }
          setPiece({ ...pieceRef.current })
        }
      } else if (e.key === " ") {
        e.preventDefault()
        let ny = p.y
        while (!collides(boardRef.current, { ...p, y: ny + 1 })) ny++
        pieceRef.current = { ...p, y: ny }
        lockPiece()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [started, drop, lockPiece])

  const renderBoard = (): Board => {
    const display = board.map(r => [...r])
    if (piece) {
      piece.shape.forEach((row, r) => {
        row.forEach((v, c) => {
          if (v && piece.y + r >= 0 && piece.y + r < ROWS && piece.x + c >= 0 && piece.x + c < COLS) {
            display[piece.y + r][piece.x + c] = piece.color
          }
        })
      })
    }
    return display
  }

  const level = Math.floor(lines / 10) + 1

  return (
    <section style={{ minHeight: "100vh", background: "linear-gradient(135deg,#050d1a 0%,#0a1628 60%,#0d1f3c 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 20px", fontFamily: "'Courier New', monospace" }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <span style={{ fontSize: 11, letterSpacing: 6, color: "#00f5ff", textTransform: "uppercase", opacity: 0.7 }}>Interactive</span>
        <h2 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#fff", margin: "8px 0", textTransform: "uppercase", letterSpacing: 3 }}>
          Tetris<span style={{ color: "#00f5ff" }}>.</span>exe
        </h2>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: 2 }}>Take a break — you deserve it</p>
      </div>

      <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap", justifyContent: "center" }}>
        {/* Board */}
        <div style={{ position: "relative", border: "1px solid rgba(0,245,255,0.25)", boxShadow: "0 0 40px rgba(0,245,255,0.1)", background: "rgba(0,0,0,0.5)" }}>
          <canvas
            width={COLS * CELL}
            height={ROWS * CELL}
            ref={el => {
              if (!el) return
              const ctx = el.getContext("2d")
              if (!ctx) return
              ctx.clearRect(0, 0, el.width, el.height)
              const display = renderBoard()
              display.forEach((row, r) => {
                row.forEach((color, c) => {
                  if (color) {
                    ctx.fillStyle = color
                    ctx.fillRect(c * CELL + 1, r * CELL + 1, CELL - 2, CELL - 2)
                    ctx.fillStyle = "rgba(255,255,255,0.15)"
                    ctx.fillRect(c * CELL + 1, r * CELL + 1, CELL - 2, 4)
                  } else {
                    ctx.fillStyle = "rgba(255,255,255,0.02)"
                    ctx.fillRect(c * CELL + 1, r * CELL + 1, CELL - 2, CELL - 2)
                  }
                })
              })
            }}
          />

          {(!started || gameOver) && (
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(5,13,26,0.88)", backdropFilter: "blur(4px)" }}>
              {gameOver && <p style={{ color: "#ff4d6a", fontSize: 20, fontWeight: 700, letterSpacing: 3, marginBottom: 8, textTransform: "uppercase" }}>Game Over</p>}
              {gameOver && <p style={{ color: "#00f5ff", fontSize: 14, marginBottom: 24 }}>Score: {score}</p>}
              <button
                onClick={startGame}
                style={{ padding: "12px 36px", background: "transparent", border: "1px solid #00f5ff", color: "#00f5ff", fontSize: 14, letterSpacing: 3, textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#00f5ff"; e.currentTarget.style.color = "#050d1a" }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#00f5ff" }}
              >
                {gameOver ? "Restart" : "Start Game"}
              </button>
            </div>
          )}

          {paused && (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(5,13,26,0.75)" }}>
              <p style={{ color: "#00f5ff", fontSize: 20, letterSpacing: 4, textTransform: "uppercase" }}>Paused</p>
            </div>
          )}
        </div>

        {/* Stats panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 140 }}>
          {([["Score", score], ["Lines", lines], ["Level", level]] as [string, number][]).map(([label, val]) => (
            <div key={label} style={{ border: "1px solid rgba(0,245,255,0.15)", padding: "16px 20px", background: "rgba(0,0,0,0.3)" }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "rgba(0,245,255,0.6)", textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#fff" }}>{val}</div>
            </div>
          ))}

          {started && !gameOver && (
            <button
              onClick={() => { pausedRef.current = !pausedRef.current; setPaused(p => !p) }}
              style={{ padding: "10px", background: "transparent", border: "1px solid rgba(0,245,255,0.3)", color: "rgba(0,245,255,0.7)", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}
            >
              {paused ? "Resume" : "Pause"} [P]
            </button>
          )}

          <div style={{ marginTop: 8, fontSize: 10, color: "rgba(255,255,255,0.25)", lineHeight: 1.8, letterSpacing: 1 }}>
            <div>← → Move</div>
            <div>↑ Rotate</div>
            <div>↓ Soft drop</div>
            <div>Space Hard drop</div>
            <div>P Pause</div>
          </div>
        </div>
      </div>
    </section>
  )
}
