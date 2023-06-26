import { createContext } from 'react'
import type { Layout } from '../lib'

const LayoutContext = createContext<{
  layout: Layout | undefined
  setLayout: React.Dispatch<React.SetStateAction<Layout>> | undefined
}>({ layout: undefined, setLayout: undefined })

export default LayoutContext
