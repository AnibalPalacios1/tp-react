import Carousel from '../components/Carousel'
import Hometitle from '../components/Hometitle'
import { slideData } from '../data/data'
import Page from '../Page'

import '../../public/css/style.css'

function Home() {
  return (
    <Page activelink={"/"} >
      <Hometitle />  
      <Carousel slides={slideData} />
    </Page>
  )
}
export default Home
