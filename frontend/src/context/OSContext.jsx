import { createContext } from 'react'

const OSContext = createContext(null)

export function OSProvider({ children }) {
  return <OSContext.Provider value={null}>{children}</OSContext.Provider>
}

export default OSContext
