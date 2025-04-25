import './App.css'
import { BarraL } from './barraLateral/BarraL.jsx'
import { Chats } from './menuChats/Chats.jsx'
import { Main } from './main/Main.jsx'


export const App = () => {


return (
    <div className="App">
      <BarraL/>
      <Chats/>
      <Main/>
    </div>
  )
}


