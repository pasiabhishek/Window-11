import StartButton from "./StartButton"
import SystemTray from "../taskbar/SystemTray"
import Weather from "./Weather"
import PinnedApps from "../start-menu/PinnedApps"

export default function Taskbar() {
  return (
    <div className="taskbar">
      <div className="left-taskbar">
        <Weather/>
      </div>
      <div className="center-taskbar">
              <StartButton/>
              <form action="">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input border="0" type="search" placeholder="Search"/>
              </form>
              <PinnedApps/>
      </div>
      <div className="right-taskbar">
        <SystemTray/>
      </div>
    </div>
  )
}
