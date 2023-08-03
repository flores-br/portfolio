import { SiGithub } from 'react-icons/si'
import { BiWorld } from 'react-icons/bi'
import type { Project } from '../lib'

type Props = {
  project: Project
}

function Card({ project }: Props) {
  const { title, description, image, icons, github, demo } = project

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative w-60 h-80 flex items-center justify-center bg-cover bg-center bg-no-repeat 
      rounded-lg shadow-2xl hover:scale-105 transition-all duration-75 ease-in-out overflow-hidden 
      group"
    >
      <div
        className="invisible absolute w-full h-full flex flex-col justify-end items-center px-2 py-4 left-0 bottom-0 text-white 
      bg-black/70 [text-shadow:_1px_1px_2px_black] 
      translate-y-[100%] group-hover:translate-y-0 transition-all duration-300 ease-out text-center group-hover:visible"
      >
        <div className="flex my-4">
          {icons.map(Icon => (
            <Icon key={Icon.name} className="w-6 h-6 mx-1" />
          ))}
        </div>
        <h1 className="font-bold tracking-wider uppercase">{title}</h1>
        <p className="text-xs leading-6 my-1">{description}</p>
        <div className="flex my-1">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <SiGithub className="w-6 h-6 mx-1 hover:scale-125 transition duration-75" />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <BiWorld className="w-6 h-6 mx-1 hover:scale-125 transition duration-75" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
export default Card
