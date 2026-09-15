export default function WindowFrame({ children }) {
  return (
    <section className="window-frame">{children}
      <iframe
        src={children}
        title="External Content Example"
        width="100%"
        height="500px"
        style={{ border: 'none' }}
        loading="lazy" // Optimizes page load performance
        sandbox="allow-scripts allow-same-origin" // Security best practice
      />    </section>
  )
}
