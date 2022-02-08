import InCicleImg from '../../assets/InCicle.svg'
import { 
  Container, 
} from './styles'

export function Header(){
  return(
    <Container>
      <img src={InCicleImg} alt="InCicle" />
    </Container>
  )
}