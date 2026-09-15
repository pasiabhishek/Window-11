import { useState } from "react"
import Taskbar from "../taskbar/Taskbar"
import StartMenu from "../start-menu/StartMenu"
import WindowFrame from "../window/WindowFrame"
export default function Home() {
  
  const [isStartMenuMoved, setIsStartMenuMoved] = useState(false)
  const [isWindowMoved, setWindowMoved] = useState(false)

  return (
    <div className='home-page'>
            {/* <WindowFrame children="https://seleniumbase.io/w3schools/iframes"/> */}

      <StartMenu isMoved={isStartMenuMoved} />
      <Taskbar onStartButtonClick={() => setIsStartMenuMoved((isMoved) => !isMoved)} />
    </div>
  )
}
