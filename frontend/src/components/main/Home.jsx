import { useState } from "react"
import Taskbar from "../taskbar/Taskbar"
import StartMenu from "../start-menu/StartMenu"

export default function Home() {
  const [isStartMenuMoved, setIsStartMenuMoved] = useState(false)

  return (
    <div className='home-page'>
      <StartMenu isMoved={isStartMenuMoved} />
      <Taskbar onStartButtonClick={() => setIsStartMenuMoved((isMoved) => !isMoved)} />
    </div>
  )
}
