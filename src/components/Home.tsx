import Me from '../assets/me.jpg'

function Home() {
  return (
    <section className="my-4 mx-6 outline flex-grow">
      <div className="flex">
        <div className="flex-1"></div>
        <div className="flex-1">
          <div className="w-[30rem] aspect-auto">
            <img src={Me} alt="Portrait" className="rounded-md shadow-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home
