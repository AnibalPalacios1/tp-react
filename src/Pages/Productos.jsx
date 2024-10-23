import CardContainer from '../components/CardContainer';
import Page from '../Page';
import { cards } from '../data/data';
import '../../public/css/style.css'

function Productos() {
  return (
    <Page activelink={"/Productos"}> 
      <CardContainer cards={cards} 
      
      />
    </Page>
  )
}

export default Productos
