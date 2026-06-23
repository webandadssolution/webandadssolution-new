"use client"

import { useEffect, useState } from "react"
import type { FormEvent, ReactNode } from "react"
import "../styles/password-gate.css"

const PasswordGate = ({
  password,
  storageKey,
  children,
}: {
  password: string
  storageKey: string
  children: ReactNode
}) => {
  const [unlocked, setUnlocked] = useState(false)
  const [checked, setChecked] = useState(false)
  const [input, setInput] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(storageKey) === "1") setUnlocked(true)
    setChecked(true)
  }, [storageKey])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input === password) {
      sessionStorage.setItem(storageKey, "1")
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (!checked) return null

  if (!unlocked) {
    return (
      <div className="pwg-screen">
        <form className="pwg-box" onSubmit={handleSubmit}>
          <h1 className="pwg-title">Protected Page</h1>
          <p className="pwg-sub">Enter the password to view this page.</p>
          <input
            type="password"
            className="pwg-input"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false) }}
            placeholder="Password"
            autoFocus
          />
          {error && <p className="pwg-error">Incorrect password. Try again.</p>}
          <button type="submit" className="pwg-submit">Unlock</button>
        </form>
      </div>
    )
  }

  return <>{children}</>
}

export default PasswordGate
