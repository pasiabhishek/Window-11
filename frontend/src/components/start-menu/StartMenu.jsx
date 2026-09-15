
export default function StartMenu({ isMoved }) {
  return (
    <section className={`start-menu${isMoved ? " start-menu-moved" : ""}`} aria-label="Start menu" >
      <div className="start-menu-left">
        <div className="start-menu-left-top">
          <form action="">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Search for apps, settings and documents" />
          </form>
        </div>
        <header>
            <h2>pinnned apps</h2>
            <h2>see more</h2>
          </header>
        <div className="start-menu-left-middle">
          
          <button>
            <i className="fa-solid fa-folder"></i>
            <p>Files</p>
          </button>
          <button>
            <i className="fa-brands fa-brave"></i>
            <p>brave</p>
          </button>
          <button>
            <i className="fa-brands fa-visual-studio"></i>
            <p>Visual Studio</p>
          </button>
          <button>
            <i className="fa-brands fa-instagram"></i>
            <p>Instagram</p>
          </button>
          <button>
            <i className="fa-brands fa-whatsapp"></i>
            <p>Whatsapp</p>
          </button>
          <button>
            <i className="fa-brands fa-chrome"></i>
            <p>Chrome</p>
          </button>
        </div>
        <div className=""></div>
      </div>
      <div className="start-menu-right">



      </div>
    </section>


  )
}
