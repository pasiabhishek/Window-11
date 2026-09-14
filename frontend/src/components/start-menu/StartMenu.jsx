import PinnedApps from "./PinnedApps"

export default function StartMenu() {
  return (
    <section className="start-menu" aria-label="Start menu" >
      <div className="start-menu-left">
        <div className="start-menu-left-top">
          <form action="">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Search for apps, settings and documents" />
          </form>
        </div>
        <div className="start-menu-left-middle">
          <button>
            <i class="fa-solid fa-folder"></i>
          </button>
          <button>
            <i class="fa-brands fa-brave"></i>
          </button>
          <button>
            <i class="fa-brands fa-visual-studio"></i>
          </button>
          <button>
            <i class="fa-brands fa-instagram"></i>
          </button>
          <button>
            <i class="fa-brands fa-whatsapp"></i>
          </button>
          <button>
            <i class="fa-brands fa-chrome"></i>
          </button>
        </div>
      </div>
      <div className="start-menu-right">

      </div>
    </section>


  )
}
