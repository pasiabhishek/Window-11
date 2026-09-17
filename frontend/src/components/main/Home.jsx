import { useState } from "react";
import { motion } from "motion/react";

import Taskbar from "../taskbar/Taskbar";
import StartMenu from "../start-menu/StartMenu";
import WindowFrame from "../window/WindowFrame";

const desktopApps = [
  {
    id: "resume",
    name: "My Resume",
    icon: "fa-solid fa-file-pdf",
    color: "#E53935",
    src: "https://masteraazam.vercel.app/",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    icon: "fa-solid fa-globe",
    color: "#1E90FF",
    src: "https://masteraazam.vercel.app/",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "fa-brands fa-github",
    color: "#FFFFFF",
    src: "https://github.com/",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    color: "#0A66C2",
    src: "https://www.linkedin.com/",
  },
  {
    id: "artisthood",
    name: "ArtistHood",
    icon: "fa-solid fa-palette",
    color: "#A855F7",
    src: "https://artist-hood.vercel.app/",
  },
  {
    id: "aazamira",
    name: "Aazamira",
    icon: "fa-solid fa-music",
    color: "#F59E0B",
    src: "https://aazamira.in/",
  },
];

export default function Home() {
  const [isStartMenuMoved, setIsStartMenuMoved] = useState(false);
  const [activeWindow, setActiveWindow] = useState(null);

  const openWindow = (app) => {
    setActiveWindow(app);
  };

  const closeWindow = () => {
    setActiveWindow(null);
  };

  return (
    <div className="home-page">

      {/* Desktop Applications */}
      <div className="desktop-apps">
        {desktopApps.map((app) => (
          <motion.button
            key={app.id}
            type="button"
            drag
            dragMomentum={false}
            whileDrag={{
              scale: 1.1,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              zIndex: 100,
            }}
            className="home-dragable-icon"
            onDoubleClick={() => openWindow(app)}
          >
            {/* App Icon */}
            <i
              className={app.icon}
              style={{
                color: app.color,
              }}
            ></i>

            {/* App Name */}
            <p>{app.name}</p>
          </motion.button>
        ))}
      </div>

      {/* Active Window */}
      {activeWindow && (
        <WindowFrame
          src={activeWindow.src}
          title={activeWindow.name}
          onClose={closeWindow}
        />
      )}

      {/* Start Menu */}
      <StartMenu isMoved={isStartMenuMoved} />

      {/* Taskbar */}
      <Taskbar
        onStartButtonClick={() =>
          setIsStartMenuMoved((isMoved) => !isMoved)
        }
      />

    </div>
  );
}