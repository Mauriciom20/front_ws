import "./BarraL.css"
import {Users, Settings} from 'lucide-react'
import { ChatIcon } from "../icons/ChatIcon"
import { ChatIcon2 } from "../icons/ChatIcon2"
import { ChatIcon3 } from "../icons/ChatIcon3"
import sol from "../assets/react.svg"

// Barra lateral de la aplicación
export const BarraL = () => {

  return (
    <div className="barral"> 
    <span className="arriba">
      <ChatIcon />
      <ChatIcon2 />
      <ChatIcon3 />
      <Users style={{color:"#eabac1"}}/>
    </span>
    <span className="abajo">
    <Settings style={{color:"#eabac1"}}/>
    <img src={sol} alt="" />
    </span>
    </div>
  )
}
