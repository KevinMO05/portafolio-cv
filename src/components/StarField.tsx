import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useTheme } from "../lib/theme";

export default function StarField() {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: false, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Sparkles
        count={dark ? 140 : 70}
        scale={[16, 9, 6]}
        size={dark ? 2 : 1.3}
        speed={0.2}
        opacity={dark ? 0.6 : 0.32}
        color={dark ? "#ffffff" : "#2d5ff0"}
      />
    </Canvas>
  );
}
