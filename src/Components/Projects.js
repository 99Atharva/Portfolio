import React from 'react'
import "./Projects.css";
import Card from "../Elements/Card";
const pro_list = [
    {
        tittle:'Mydrama',
        cover:"./Project/Web.png",
        url:"https://github.com/99Atharva/Mydrama",
        live:"https://99atharva.github.io/Mydrama/",
        des:"Just a fun project, I like Kdramas so...If you too like series you can check out your favourite here."
    },
    {
        tittle:"Web choice",
        cover:"./Project/webc.png",
        url:"https://github.com/99Atharva/web-choice",
        live:"https://webchoice-backend.web.app/",
        des:"Media marketing web app"
    },
    {
        tittle:"Amazon_Clone",
        cover:"./Project/Amazon_Clone.png",
        url:"#",
        live:"https://amazon-clone-mauve-alpha.vercel.app/",
        des:"E-Commerce"
    }
];

function Projects() {
    return (
        < div className="cont" >
       <h1>My Projects</h1> 
       <div className="list"> 
        {    
            pro_list.map((p_list,i)=>{
                return ( 
                    <Card key={i} tittle={p_list.tittle} 
                    cover={p_list.cover} url={p_list.url} 
                    live={p_list.live} des={p_list.des} />                    
                    ); 
                })
        } 
                        
       </div>
        </div>
    )
}

export default Projects;
