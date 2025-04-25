import "./HaederChats.css";
import{MessageSquarePlus, EllipsisVertical, FolderDown, Search} from "lucide-react"

export const HeaderChats = () => {
  return (
    <div className="HeaderChats">

        <div className="header">
        <span className=" title">
            <h2>Chats</h2>
        </span>

        <span className="icons">
            <MessageSquarePlus style={{color:"#eabac1"}}/>
            <EllipsisVertical style={{color:"#eabac1"}}/>
        </span>
        </div>


        <span className="inputo">
            <div className="searchSection" style={{display:"flex", gap:"10px", marginBottom: "5px", paddingLeft: "5px",
             alignItems: "center", backgroundColor:"#202c33", borderRadius:"10px"}}>
                <Search style={{color:"#eabac1"}}/>
                <input className="inp" type="text" placeholder="Buscar"/>
            </div>
            <span className="P">
            <p>Todos</p>
            <p>No leidos</p>
            <p>Favoritos</p>
            <p>Grupos</p>
            </span>
            <span className="archivados">
            <FolderDown style={{color: "#25D366"}} />
            <p>Archivados</p>
            </span>
        </span>
    </div>
  )
}
