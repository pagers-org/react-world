import { container } from './app.css'
import NavBar from '@web/app/components/nav-bar'
import Banner from './components/banner'
import SideBar from './components/side-bar'

export default function Home() {
  return (
    <main className={container}>
      <NavBar />
      <Banner />
      <SideBar />
    </main>
  )
}
