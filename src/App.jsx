import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [-5, 1, 6], fov: 25 }}>
        <fog attach="fog" args={["#16a04b", 12, 30]} />
        <Experience />
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={1}
            intensity={1.42}
            radius={0.72}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;
