import "./Header.css"
import logo from "../assets/react.svg" 
import{EllipsisVertical, Search, Video} from "lucide-react"


export const Header = () => {
  return (
    <div className='Header'>
      
      <span className="nombre">
        <img src={logo} alt="" />
        <p>Mauricio Morales</p>
      </span>
      <span className="iconos1">
        <Video />
        <Search />
        <EllipsisVertical/>
      </span>
        
    </div>
  )
}
