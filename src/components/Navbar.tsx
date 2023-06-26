import { useContext } from 'react'
import { BiMoon } from 'react-icons/bi'
import LayoutContext from '../context'
import Layouts from '../lib'
import Icon from '/favicon-32x32.png'

function Navbar() {
  const { layout, setLayout } = useContext(LayoutContext)

  return (
    <nav className="my-2">
      <div className="flex items-center justify-between px-12">
        <div>
          <div className="flex items-center">
            <img src={Icon} alt="Icon" className="cursor-pointer" />
            <span className="ml-2 text-2xl font-bold">Bryan Flores</span>
          </div>
        </div>
        <div>
          <ul className="flex gap-6 font-bold">
            {Layouts.map(({ id, name }, index) => (
              <li key={id}>
                <button
                  type="button"
                  className="cursor-pointer uppercase tracking-wider text-sm hover:text-gray-600 active:text-gray-500 transition-colors"
                  onClick={() => setLayout && setLayout(Layouts[index])}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-slate-400 rounded-full p-3 hover:bg-slate-400 active:bg-slate-500 transition-colors cursor-pointer">
          <BiMoon />
        </div>
      </div>
      <div className="text-6xl text-center">{layout?.name}</div>
    </nav>
  )
}
export default Navbar
