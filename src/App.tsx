import { useState } from 'react'
import { Navbar } from './components'
import LayoutContext from './context'
import Layouts from './lib'
import type { Layout } from './lib'

function App() {
  const [layout, setLayout] = useState<Layout>(Layouts[0])

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      <div className="w-screen h-screen overflow-auto bg-gray-200">
        <div className="w-[60%] h-full mx-auto bg-white shadow-lg py-6">
          <Navbar />
        </div>
      </div>
    </LayoutContext.Provider>
  )
}
export default App
