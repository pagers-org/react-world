import { container } from './app.css'
import NavBar from '@web/app/components/nav-bar'
import Banner from '@web/app/components/banner'
import Contents from '@web/app/components/contents'
import SideBar from '@web/app/components/side-bar'
import HStack from '@web/app/components/common/h-stack'
import Footer from '@web/app/components/footer'

export default function Home() {
  return (
    <main className={container}>
      <NavBar />
      <Banner />
      <HStack padding="0 20rem">
        <Contents />
        <SideBar />
      </HStack>
      <HStack justifyContent="center">
        <Footer />
      </HStack>
    </main>
  )
}
