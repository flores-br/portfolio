import Me from '../assets/me.jpg'
import Layout from './Layout'

import { Socials } from '../lib'

function Home() {
  return (
    <Layout>
      <div className="flex">
        <div className="flex-[1.2_1.2_0%] px-5">
          <h1 className="text-4xl font-semibold max-w-lg tracking-wider">
            Hello, world!
          </h1>
          <p className="mt-4 max-w-2xl tracking-wide leading-10">
            I'm <span className="font-semibold tracking-wider">Bryan</span>, a
            passionate full-stack developer with 1 year of experience at
            AmeriGlide. I specialize in using React and Next.js to build robust
            and scalable web applications. My goal is to build dynamic
            environments where I can utilize my problem-solving skills and
            collaborate with teams to create user-friendly and visually
            appealing solutions. With a strong foundation in both front-end and
            back-end development, I am eager to take on new challenges and
            contribute to innovative projects.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-[25rem] aspect-auto">
            <img src={Me} alt="Portrait" className="rounded-md shadow-md" />
          </div>
        </div>
      </div>
      <hr className="my-16" />
      <div className="flex justify-center">
        <ul>
          {Socials.map(({ id, name, link, Icon }) => (
            <li key={id}>
              <div className="flex items-center gap-2 mt-4">
                <div>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="w-20">{name}</div>
                <a
                  className="w-fit"
                  href={link}
                  target="blank"
                  rel="noreferrer"
                >
                  {link}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
export default Home
