import React from 'react';
import CharacterSelect from "./assets/Character.png";

const temp1 = [
{
    name: "Nightingale",
    position: "0 0",
}, 
{
    name: "Rook",
    // position: "0 -1418px", 
    position: "0px 0px",
},
{
    name: "Zeke",
    // position: "1418px -1418px",
    position: "0px 0px",
},
{ 
    name: "Remi",
    //position: "300px 0px",
    position: "0px 0px",
}
];

function CharacterSelection() {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'nowrap',
        }}>
            {temp1.map((value, index) => (
                <div key={Math.random()} style={{width: '300px'}}>
                    <img 
                        alt={value.name} 
                        key={index} 
                        src={CharacterSelect}
                        style={{
                            objectFit: 'none',
                            objectPosition: value.position,
                            transform: 'scale(0.5, 0.5)',
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

export default CharacterSelection;