import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "../lib/theme";

/** Rounds the corners of a flat polygon by inserting quadratic curves at each vertex. */
function roundedPolygon(points: THREE.Vector2[], radius: number) {
  const shape = new THREE.Shape();
  const len = points.length;
  for (let i = 0; i < len; i++) {
    const prev = points[(i - 1 + len) % len];
    const curr = points[i];
    const next = points[(i + 1) % len];
    const toPrev = new THREE.Vector2().subVectors(prev, curr).normalize();
    const toNext = new THREE.Vector2().subVectors(next, curr).normalize();
    const start = curr.clone().addScaledVector(toPrev, radius);
    const end = curr.clone().addScaledVector(toNext, radius);
    if (i === 0) shape.moveTo(start.x, start.y);
    else shape.lineTo(start.x, start.y);
    shape.quadraticCurveTo(curr.x, curr.y, end.x, end.y);
  }
  shape.closePath();
  return shape;
}

function chevronGeometry(mirror: 1 | -1) {
  const pts = [
    [-1.15, 0.6],
    [0, -0.32],
    [1.15, 0.6],
    [0.75, 0.98],
    [0, 0.42],
    [-0.75, 0.98],
  ].map(([x, y]) => new THREE.Vector2(x * mirror, y));
  const shape = roundedPolygon(pts, 0.1);
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.34,
    bevelEnabled: true,
    bevelThickness: 0.045,
    bevelSize: 0.045,
    bevelSegments: 6,
    curveSegments: 24,
  });
}

function Chevrons() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const geoTop = useMemo(() => chevronGeometry(1), []);
  const geoBottom = useMemo(() => chevronGeometry(-1), []);

  useFrame((state, delta) => {
    pointer.current.x = state.pointer.x;
    pointer.current.y = state.pointer.y;
    if (group.current) {
      group.current.rotation.y +=
        delta * 0.18 + (pointer.current.x * 0.4 - group.current.rotation.y) * 0.02;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -pointer.current.y * 0.25,
        0.04,
      );
    }
  });

  return (
    <group ref={group} scale={1.0}>
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.8}>
        <mesh
          geometry={geoTop}
          position={[0.70, 1.1, 0]}
          rotation={[0, 0, Math.PI]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color="#3ea0d8"
            roughness={0.25}
            metalness={0.35}
          />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.65}>
        <mesh geometry={geoBottom} position={[-0.12, -0.6, 0.1]} castShadow receiveShadow>
          <meshStandardMaterial
            color="#2d5ff0"
            roughness={0.2}
            metalness={0.4}
          />
        </mesh>
      </Float>
    </group>
  );
}

function Rig({ dark }: { dark: boolean }) {
  const { scene } = useThree();
  scene.fog = new THREE.Fog(dark ? 0x0a0a0c : 0xfbfbfd, 6, 13);
  return (
    <>
      <ambientLight intensity={dark ? 0.5 : 0.8} />
      <directionalLight
        position={[3, 4, 4]}
        intensity={dark ? 1.6 : 1.4}
        color={dark ? "#8fb8ff" : "#ffffff"}
      />
      <pointLight position={[-4, -2, -2]} intensity={dark ? 12 : 6} color="#3ea0d8" />
      <ContactShadows
        position={[0, -1.6, 0]}
        opacity={dark ? 0.5 : 0.25}
        scale={8}
        blur={2.6}
        far={2.5}
      />
    </>
  );
}

export default function HeroScene() {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6.7], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <Rig dark={dark} />
        <Chevrons />
      </Suspense>
    </Canvas>
  );
}
