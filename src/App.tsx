import { Navbar } from './components'

function App() {
  return (
    <div className="w-screen h-screen overflow-auto bg-gray-200">
      <div className="w-[60%] h-full mx-auto bg-white shadow-lg py-6">
        <Navbar />
      </div>
    </div>
  )
}
export default App
