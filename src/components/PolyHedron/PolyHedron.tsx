import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshBasicMaterial, MeshNormalMaterial, MeshPhongMaterial,MeshStandardMaterial} from "three";

interface PolyhedronProps {
  name?: string;
  position?: [number, number, number];
  material?: MeshBasicMaterial | MeshNormalMaterial |MeshPhongMaterial | MeshStandardMaterial;
}

function PolyHedron({ ...props }: PolyhedronProps) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.2 * delta;
      ref.current.rotation.y += 0.05 * delta;
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  );
}

export default PolyHedron;
