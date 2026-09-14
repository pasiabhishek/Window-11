export default function StartButton({ onClick }) {
  return (
    <div className="Start-Button">

      <button type="button" onClick={onClick} aria-label="Open Start menu" >
        <i className="fa-brands fa-microsoft"></i>
      </button>

    </div>
  )
}
