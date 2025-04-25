import "./Main.css";
import { Header } from "../header/Header";
import{Plus, Mic} from "lucide-react"


export const Main = () => {
  return (
    <div className="Main">
        <Header />
        <div className="input">
          <Plus style={{color:"#eabac1"}}/>
          <input type="text" placeholder="Escribe tu mensaje" />
          <Mic style={{color:"#eabac1"}}/>
        </div>
    </div>
  )
}
