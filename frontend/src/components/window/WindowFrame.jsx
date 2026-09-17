import { useState } from "react";
import { motion } from "motion/react";

export default function WindowFrame({ src }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const reloadPage = () => {
    window.location.reload();
  };

  if (isMinimized) {
    return (
      <motion.div
        className="window-minimized"
        drag
        dragMomentum={false}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          className="minimized-window-button"
          onClick={() => setIsMinimized(false)}
        >
          <i className="fa-solid fa-file-pdf"></i>
          <span>My Resume</span>
        </button>
      </motion.div>
    );
  }

  return (
    <motion.section
      className={`window-frame ${
        isMaximized ? "window-maximized" : ""
      }`}
      drag={!isMaximized}
      dragMomentum={false}
      initial={{
        opacity: 0,
        scale: 0.95,
        x: "-50%",
        y: "-50%",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: "-50%",
        y: "-50%",
      }}
    >
      {/* Browser Tab Bar */}
      <div className="window-tab-bar">

        <div className="window-tab active">
          <i className="fa-solid fa-file-pdf"></i>

          <span>My Resume</span>

          <button
            className="tab-close"
            onClick={() => setIsMinimized(true)}
            title="Minimize"
          >
            ×
          </button>
        </div>

        <button className="new-tab-button" title="New Tab">
          +
        </button>

        {/* Window Controls */}
        <div className="window-controls">
          <button
            onClick={() => setIsMinimized(true)}
            title="Minimize"
          >
            −
          </button>

          <button
            onClick={() => setIsMaximized((value) => !value)}
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? "❐" : "□"}
          </button>

          <button
            className="close-button"
            onClick={() => setIsMinimized(true)}
            title="Close"
          >
            ×
          </button>
        </div>
      </div>

      {/* Browser Toolbar */}
      <div className="window-toolbar">

        <div className="navigation-buttons">
          <button title="Back">
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <button title="Forward">
            <i className="fa-solid fa-arrow-right"></i>
          </button>

          <button
            title="Reload"
            onClick={reloadPage}
          >
            <i className="fa-solid fa-rotate-right"></i>
          </button>
        </div>

        {/* Address Bar */}
        <div className="address-bar">
          <i className="fa-solid fa-lock"></i>

          <span>
            {src}
          </span>
        </div>

        <button className="toolbar-menu" title="Menu">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>

      {/* Window Content */}
      <div className="window-content">
        <iframe
          src={src}
          title="My Resume"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </motion.section>
  );
}