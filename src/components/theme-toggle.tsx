"use client"

import { useEffect, useState } from "react"
import { FaSun, FaMoon } from "react-icons/fa"

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme")
    setTheme(current === "light" ? "light" : "dark")
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", next)
    try {
      localStorage.setItem("theme", next)
    } catch {
      // ignore storage errors (private mode, etc.)
    }
    setTheme(next)
  }

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle
