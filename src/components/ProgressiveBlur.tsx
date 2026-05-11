import type { CSSProperties } from "react";

const layers: { blur: number; mask: string }[] = [
  { blur: 2,  mask: "linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 90%)" },
  { blur: 8,  mask: "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%)" },
  { blur: 20, mask: "linear-gradient(to bottom, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 100%)" },
];

const containerStyle: CSSProperties = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "90px",
  zIndex: 999,
  pointerEvents: "none",
};

const ProgressiveBlur = () => {
  return (
    <div style={containerStyle} aria-hidden="true">
      {layers.map((layer, i) => {
        const style: CSSProperties = {
          position: "absolute",
          inset: 0,
          backdropFilter: `blur(${layer.blur}px)`,
          WebkitBackdropFilter: `blur(${layer.blur}px)`,
          maskImage: layer.mask,
          WebkitMaskImage: layer.mask,
        };
        return <div key={i} style={style} />;
      })}
    </div>
  );
};

export default ProgressiveBlur;
