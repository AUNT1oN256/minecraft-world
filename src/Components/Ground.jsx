export default function Ground({ onAddBlock }){
    const size = 10;

    return(
        <group>
            {[...Array(size)].map((_,x) => 
                [...Array(size)].map((_,z) => {
                    const posX = x - size / 2;
                    const posZ = z - size / 2;
                    return (
                        <mesh
                            
                        >
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color={'#4CAF50'} />
                        </mesh>
                    );
                })
            )}
        </group>
    );
}