import { createContext, useContext, useState } from 'react'
import { DEMO_USERS } from '../utils/mockData'

/*
  TEMPORARY MOCK AUTH (Phase 1 only).
  In Phase 4 this is replaced by real login against the Express API using
  httpOnly cookies, and the user comes from GET /api/auth/me.
  The backend will ALWAYS re-verify roles; this is UI convenience only.
*/
const AuthContext = createContext(null)
const KEY = 'collegeai-mock-user'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem(KEY))
    } catch {
      return null
    }
  })

  const login = (role) => {
    const u = DEMO_USERS[role]
    setUser(u)
    sessionStorage.setItem(KEY, JSON.stringify(u))
  }

  const logout = () => {
    setUser(null)
    sessionStorage.removeItem(KEY)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)