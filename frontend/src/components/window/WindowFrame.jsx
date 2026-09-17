import { useState } from "react";
import { motion } from "motion/react";

export default function WindowFrame({ src, title = "Window", onClose }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
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
          <i className="fa-solid fa-window-maximize"></i>
          <span>{title}</span>
        </button>
      </motion.div>
    );
  }
  return (
    <motion.section
      className={`window-frame ${isMaximized ? "window-maximized" : ""}`}
      drag={!isMaximized}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.94, x: "-50%", y: "-50%" }}
      animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
    >
      <div className="window-tab-bar">
        <div className="window-tab active">
          <i className="fa-solid fa-window-maximize"></i>
          <span>{title}</span>
          <button
            className="tab-close"
            onClick={onClose}
            title="Close"
          >
            ×
          </button>
        </div>
        <button className="new-tab-button">+</button>
        <div className="window-controls">
          <button
            onClick={() => setIsMinimized(true)}
            title="Minimize"
          >
            −
          </button>
          <button
            onClick={() => setIsMaximized((value) => !value)}
            title="Maximize"
          >
            {isMaximized ? "❐" : "□"}
          </button>
          <button
            className="close-button"
            onClick={onClose}
            title="Close"
          >
            ×
          </button>
        </div>
      </div>
      <div className="window-toolbar">
        <div className="navigation-buttons">
          <button>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button onClick={() => window.location.reload()}>
            <i className="fa-solid fa-rotate-right"></i>
          </button>
        </div>
        <div className="address-bar">
          <i className="fa-solid fa-lock"></i>
          <span>{src}</span>
        </div>
        <button className="toolbar-menu">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
      <div className="window-content">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </motion.section>
  );
}