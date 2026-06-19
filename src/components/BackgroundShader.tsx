import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
varying vec2 vUv;

// Hash without Sine
float hash(vec2 p) {
    vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

// Value noise
float noise(in vec2 x) {
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float a = hash(p+vec2(0.0,0.0));
    float b = hash(p+vec2(1.0,0.0));
    float c = hash(p+vec2(0.0,1.0));
    float d = hash(p+vec2(1.0,1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

const mat2 m = mat2( 0.80,  0.60, -0.60,  0.80 );

float fbm( vec2 p ) {
    float f = 0.0;
    f += 0.50000*noise( p ); p = m*p*2.02;
    f += 0.25000*noise( p ); p = m*p*2.03;
    f += 0.12500*noise( p ); p = m*p*2.01;
    f += 0.06250*noise( p ); p = m*p*2.04;
    f += 0.03125*noise( p );
    return f/0.96875;
}

void main() {
    // centered coordinates
    vec2 q = vUv;
    vec2 p = -1.0 + 2.0*q;
    
    // Camera direction with perspective
    float ro_y = 1.0;
    float rd_y = max(p.y + 0.3, 0.01); // horizon at y=-0.3
    
    // Ray intersect with cloud plane
    float t = ro_y / rd_y;
    vec2 tc = p * t;
    
    tc.y -= uTime * 0.3; // fly forward smoothly
    tc.x += uTime * 0.1; // slow drift
    
    // Evaluate FBM
    float f = fbm(tc * 0.4);
    
    // Cloud density
    float den = smoothstep(0.3, 0.7, f);
    
    // Lighting (fake volumetric shadowing)
    float f_light = fbm(tc * 0.4 + vec2(0.1, 0.1));
    float dif = clamp((f - f_light) * 3.0 + 0.5, 0.0, 1.0);
    
    // Sky color (Obsidian Dark)
    vec3 col = vec3(0.02, 0.02, 0.03) - p.y * 0.1;
    col = mix(col, vec3(0.01, 0.05, 0.10), exp(-8.0*max(p.y+0.2, 0.0)));
    
    // Cloud color with directional light scattering (Cyan / Dark Blue highlights)
    vec3 cloudCol = vec3(0.05, 0.25, 0.40) * (0.2 + 0.8*dif);
    
    // Mix with atmospheric perspective (fade to horizon)
    float fade = exp(-0.02 * t);
    col = mix(col, cloudCol, den * fade * 0.8);
    
    // Subtle overall darkening to keep it ambient
    col *= 0.85;
    
    gl_FragColor = vec4(col, 1.0);
}
`;

const BackgroundShader: React.FC = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh renderOrder={-1}>
      {/* Plane covering the entire screen. In perspective camera, a z of -10 and large scale works,
          but using a shader that ignores camera view (gl_Position = vec4(position, 1.0)) means
          it's a fullscreen quad! We just need a simple plane. */}
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 }
        }}
        depthWrite={false}
      />
    </mesh>
  );
};

export default BackgroundShader;
