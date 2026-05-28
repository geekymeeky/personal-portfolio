import React from 'react';
import { Environment } from '@react-three/drei';
import BackgroundShader from './BackgroundShader';

export const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <Environment preset="city" />
      <BackgroundShader />
    </>
  );
};

export default Scene;
