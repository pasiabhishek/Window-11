import { useState } from "react";
import { motion } from "motion/react";

import Taskbar from "../taskbar/Taskbar";
import StartMenu from "../start-menu/StartMenu";
import WindowFrame from "../window/WindowFrame";

export default function Home() {
  const [isStartMenuMoved, setIsStartMenuMoved] = useState(false);
  const [isWindowMoved, setWindowMoved] = useState(false);

  const resumeWindow = () => {
    setWindowMoved((isOpen) => !isOpen);
  };

  return (
    <div className="home-page">

      {/* My Resume Desktop Icon */}
      <motion.button
        type="button"
        drag
        dragMomentum={false}
        whileDrag={{
          scale: 1.1,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
        className="home-dragable-icon"
        onClick={resumeWindow}
      >
        <i className="fa-solid fa-folder"></i>
        <p>My Resume</p>
      </motion.button>

      {/* Resume Window */}
      {isWindowMoved && (
        <WindowFrame
          src="https://masteraazam.vercel.app/"
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