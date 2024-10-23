import GaleriaContainer from '../components/GaleriaContainer'
import { galerie } from '../data/data'
import Page from '../Page'

import '../../public/css/style.css'

function Galeria() {
  return (
    <Page activelink={"/Galeria"}>
     <GaleriaContainer galerie={galerie}/>
    </Page>
   )
}

export default Galeria
