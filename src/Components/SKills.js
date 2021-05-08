import React from 'react';
import "./Skills.css";
import Badges from '../Elements/Badges';


const list = [
    {   
        id: 1,
        name: "Mongo-DB",
        s_image: "./Photos/mongo.png"
    },

    {   
        id:2,
        name: 'React',
        s_image: "./Photos/react-js.svg"
    },
    {   
        id:3,
        name: 'CSS',
        s_image: "./Photos/css.svg" 
    },
    {   
        id:4,
        name:'JS',
        s_image: "./Photos/js.png"
    },
    {   
        id:5,
        name: 'HTML',
        s_image: "./Photos/html.png" 
    },
    {   
        id:6,
        name: 'SQL',
        s_image: "./Photos/sql.png" 
    },
    {   
        id:7,
        name: 'Material-UI',
        s_image: "./Photos/material.png" 
    },
    {   
        id:8,
        name: 'Node',
        s_image: "./Photos/node.png" 
    },
    {   
        id:9,
        name: 'Bootstrap',
        s_image: "./Photos/bootstrap.png" 
    },
    {   
        id:10,
        name: 'Git',
        s_image: "./Photos/git.png"
    },
    {   
        id:11,
        name:'Adobe-XD',
        s_image:"./Photos/xd.png"
    }
    

];

function SKills() {
    return (
        
        <div className="Container" id="stack">
            <h1>Stack I Use</h1>
            <div className="skil_list">
            { 
        
                list.map((s_list,i)=>{
                return ( 
                    <Badges key={i} name={s_list.name} s_image={s_list.s_image} id={s_list.id} />
                    
                    ); 
                })
            }    

            </div>
        </div>
    )
}

export default SKills;
