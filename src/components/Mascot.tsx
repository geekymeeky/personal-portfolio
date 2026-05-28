
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export const Mascot = ({ url, scale = 1, ...props }: any) => {
  const texture = useTexture(url) as THREE.Texture;
  
  // To avoid crash if texture isn't fully loaded, fallback to 1
  const img = texture.image as any;
  const aspect = img && img.width ? img.width / img.height : 1;

  // Make sure texture colors are accurate
  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh {...props} scale={[scale * aspect, scale, 1]}>
      <planeGeometry args={[1, 1]} />
      {/* MeshBasicMaterial is unlit, perfect for 2D sprites so they don't get dark shadows */}
      <meshBasicMaterial map={texture} transparent={true} toneMapped={false} />
    </mesh>
  );
};
