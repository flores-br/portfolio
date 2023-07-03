import type { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  return <section className="my-8 mx-12 flex-grow">{children}</section>
}
export default Layout
