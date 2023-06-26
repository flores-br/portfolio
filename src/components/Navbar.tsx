import Icon from '/favicon-32x32.png'
import { BiMoon } from 'react-icons/bi'

const elements: string[] = ['Home', 'Projects', 'Contact']

function Navbar() {
  return (
    <nav className="mt-2">
      <div className="flex items-center justify-between px-12">
        <div>
          <div className="flex items-center">
            <img src={Icon} alt="Icon" className="cursor-pointer" />
            <span className="ml-2 text-2xl font-bold">Bryan Flores</span>
          </div>
        </div>
        <div>
          <ul className="flex gap-6 font-bold text-xs uppercase tracking-wider">
            {elements.map((el, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-gray-600 active:text-gray-500 transition-colors"
              >
                {el}
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
