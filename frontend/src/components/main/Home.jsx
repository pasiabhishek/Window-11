import Taskbar from "../taskbar/Taskbar"
import StartMenu from "../start-menu/StartMenu"
export default function Home() {
  return (
    <div className='home-page'>
      <StartMenu/>
      <Taskbar/>
    </div>
  )
}
