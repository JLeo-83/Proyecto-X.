import { Canvas } from "@react-three/fiber"; // Importa Canvas
import { PerspectiveCamera } from "@react-three/drei"; // Importa PerspectiveCamera

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm-text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, my name is Leandro
          <span className="waving-hand">✌️</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands - Leandro
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
        </Canvas>
        {/* 
          <Suspense fallback={<CanvasLoader />}>
            
            <HackerRoom scale={0.05} position={[0, 0, 0]} />
            <ambientalLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas> */}
      </div>
    </section>
  );
};

export default Hero;
