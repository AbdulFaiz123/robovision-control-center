'use client';
import { useRobotStore } from '../store/robotStore';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export function RobotScene() {
    const jointAngles = useRobotStore((state) => state.telemetry.jointAngles);

    return (
        <div className="h-[340px] rounded-lg bg-slate-950">
            <Canvas camera={{ position: [4, 4, 6], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                <RobotArm jointAngles={jointAngles} />

                <OrbitControls />
            </Canvas>
        </div>
    );
}

function RobotArm({ jointAngles }: { jointAngles: number[] }) {
    const baseRotation = degreesToRadians(jointAngles[0]);
    const shoulderRotation = degreesToRadians(jointAngles[1]);
    const elbowRotation = degreesToRadians(jointAngles[2]);

    return (
        <group rotation={[0, baseRotation, 0]}>
            <mesh position={[0, 0.2, 0]}>
                <cylinderGeometry args={[0.6, 0.6, 0.4, 32]} />
                <meshStandardMaterial color="#64748b" />
            </mesh>

            <group position={[0, 0.5, 0]} rotation={[0, 0, shoulderRotation]}>
                <mesh position={[0, 1, 0]}>
                    <boxGeometry args={[0.35, 2, 0.35]} />
                    <meshStandardMaterial color="#38bdf8" />
                </mesh>

                <group position={[0, 2, 0]} rotation={[0, 0, elbowRotation]}>
                    <mesh position={[0, 0.8, 0]}>
                        <boxGeometry args={[0.28, 1.6, 0.28]} />
                        <meshStandardMaterial color="#22c55e" />
                    </mesh>

                    <mesh position={[0, 1.7, 0]}>
                        <sphereGeometry args={[0.22, 32, 32]} />
                        <meshStandardMaterial color="#f97316" />
                    </mesh>
                </group>
            </group>
        </group>
    );
}

function degreesToRadians(degrees: number) {
    return (degrees * Math.PI) / 180;
}