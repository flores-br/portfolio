import { createContext } from 'react'
import type { Section } from '../lib'

const SectionContext = createContext<{
  section: Section | undefined
  setSection: React.Dispatch<React.SetStateAction<Section>> | undefined
}>({ section: undefined, setSection: undefined })

export default SectionContext
