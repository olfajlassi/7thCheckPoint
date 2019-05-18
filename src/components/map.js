import React, {Component} from 'react';
import luffy from './luffy.png';
import zoro from './zoro.png';
import robin from './robin.png';
import chopper from './chopper.png';
/*pour les images: 
  soit on crée import luffy from ./luffy.png et on utilise la variable luffy
  soit on met les images sous public et on utilise /luffy.png
  on n'utilise pas require() !!*/

const  contain = [
    {button: "Luffy",
     title: "Monkey D Luffy",
     image : luffy,
     buttonclass : "btn btn-outline-danger"},
    {button: "Zoro",
     title:"Roronoa Zoro",
     image : zoro,
     buttonclass : "btn btn-outline-success"}, 
    {button: "Robin",
     title: "Niko Robin",
     image : robin,
     buttonclass : "btn btn-outline-dark"},
     {button: "Chopper",
     title: "Toni Toni Chopper",
     image : chopper,
     buttonclass : "btn btn-outline-info"}
]

const AppBox= {
    float: 'left',
    textAlign: 'center'
}

const AppImg= {
  float: 'left',
  width: '200px',
  height: '250px'
}

const hide= {
  display: 'none'
}

class Mapping extends Component{
    
    display = (button, image, title) => {

        let x = document.getElementById('box');
        if (x.style.display === "none") {
          x.style.display = "block";
        }   
        let im = document.getElementById('img');
        im.src = image;
        let name = document.getElementById('title');
        name.innerText = title;
    }

    render(){
      return (
        <div>{
          contain.map (e => { 
              return(
              <div style={AppBox}>
                  <button class={e.buttonclass} onClick={()=>this.display(e.button, e.image, e.title)}>{e.button}</button>
                  <div id='box' style={hide}>
                    <h4 id='title'>{e.title}</h4>
                    <img class="border border-dark" alt="crew" style={AppImg} id='img' src={(e.image)} />
                  </div>
              </div>
              )
          })
        }</div>
      )
}
}
export default Mapping;