import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF("/models/react.glb");

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 5.5,
            duration: 2, //velocidad del rebote
            repeat: -1, //repite el rebote infinitamente
            yoyo: true, //Sube y baja el objeto
        });
    });

    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 11]} scale={0.7}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Target;
