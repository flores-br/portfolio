import Layout from './Layout'
import { Projects as projectList } from '../lib'
import Card from './Card'

function Projects() {
  return (
    <Layout>
      <div className="h-full p-4 grid grid-cols-3 gap-y-6 justify-items-center">
        {projectList.map(project => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </Layout>
  )
}
export default Projects
