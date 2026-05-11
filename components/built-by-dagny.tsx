/**
 * Built by Dagny watermark. Inline in the footer legal row.
 * Footer is the light pine-cream canvas, so use the dark wordmark.
 */
export function BuiltByDagny() {
  return (
    <a
      href="https://bydagny.com?ref=built-by&utm_source=hundseid-sag-og-laft"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block opacity-50 transition-opacity hover:opacity-90"
    >
      <img
        src="https://bydagny.com/built-by-dagny-black.png"
        alt="Built by Dagny"
        width={80}
        height={40}
        loading="lazy"
        style={{ width: 80, height: "auto" }}
      />
    </a>
  );
}
