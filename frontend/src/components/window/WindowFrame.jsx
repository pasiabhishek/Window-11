export default function WindowFrame({ src }) {
  return (
    <section className="window-frame">
      <iframe
        src={src}
        title="My Resume"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
      />
    </section>
  );
}