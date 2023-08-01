import { useContext, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionContext from '../context'

function Layout({ children }: { children: ReactNode }) {
  const { section } = useContext(SectionContext)

  return (
    <AnimatePresence>
      <motion.section
        className="my-8 mx-12 flex-grow"
        key={section ? section.id : 'empty'}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  )
}
export default Layout
