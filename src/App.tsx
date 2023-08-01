import { useState } from 'react'
import { Navbar, Home, Projects } from './components'
import SectionContext from './context'
import { Sections } from './lib'
import type { Section } from './lib'

function App() {
  const [section, setSection] = useState<Section>(Sections[0])

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      <div className="w-screen h-screen overflow-auto bg-gray-200">
        <div className="w-[70%] h-full flex flex-col mx-auto bg-white shadow-lg py-6">
          <Navbar />
          {section.name === 'Home' ? <Home /> : <Projects />}
        </div>
      </div>
    </SectionContext.Provider>
  )
}
export default App
