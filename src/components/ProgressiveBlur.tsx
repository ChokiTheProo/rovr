import type { CSSProperties } from "react";

const layers: { blur: number; mask: string }[] = [
  { blur: 0.25, mask: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)" },
  { blur: 0.5,  mask: "linear-gradient(to bottom, rgba(0,0,0,0) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,0) 50%)" },
  { blur: 1,    mask: "linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 62.5%)" },
  { blur: 2,    mask: "linear-gradient(to bottom, rgba(0,0,0,0) 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,0) 75%)" },
  { blur: 4,    mask: "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 87.5%)" },
  { blur: 8,    mask: "linear-gradient(to bottom, rgba(0,0,0,0) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)" },
  { blur: 16,   mask: "linear-gradient(to bottom, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,1) 100%)" },
  { blur: 32,   mask: "linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)" },
];

const containerStyle: CSSProperties = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "200px",
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
