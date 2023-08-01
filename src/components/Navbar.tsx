import { motion } from 'framer-motion'
import { useContext } from 'react'
import { BiMoon } from 'react-icons/bi'
import SectionContext from '../context'
import { Sections } from '../lib'
import Icon from '/favicon-32x32.png'

function Navbar() {
  const { section, setSection } = useContext(SectionContext)

  return (
    <nav className="mt-3 mb-10">
      <div className="flex items-center justify-between px-12">
        <div>
          <div className="flex items-center">
            <img src={Icon} alt="Icon" className="cursor-pointer" />
            <span className="ml-2 text-2xl font-bold">Bryan Flores</span>
          </div>
        </div>
        <div>
          <ul className="flex gap-6 font-bold">
            {Sections.map(({ id, name }, index) => (
              <li key={id} className="relative">
                <button
                  type="button"
                  className="cursor-pointer uppercase tracking-wider text-sm hover:text-gray-600 active:text-gray-500 transition-colors"
                  onClick={() => setSection && setSection(Sections[index])}
                >
                  {name}
                </button>
                {section?.id === id && (
                  <motion.div
                    className="absolute w-full left-0 -bottom-2 h-1 bg-green-700 rounded-md"
                    layoutId="underline"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-slate-400 rounded-full p-3 hover:bg-slate-400 active:bg-slate-500 transition-colors cursor-pointer">
          <BiMoon />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
