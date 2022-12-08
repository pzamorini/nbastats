 /* tentando rodar uma api*/

 fetch("https://www.balldontlie.io/api/v1/games") /* estudar promises */
 .then( (_response) => _response.json())
 .then(({ data })  => { console.log(data);
   /* ({data}) object destructuring -> estou pegando uma propiedade 
 dentro do objeto */
   data.forEach((post) =>{
     const div = document.createElement("div");
     const home_team = document.createElement("span");
     const home_score = document.createElement("span");
     const visitor_team = document.createElement("span");
     const visitor_score = document.createElement("span");

     home_score.innerText = " " + post.home_team_score;
     visitor_score.innerText = " X" + " " + post.visitor_team_score;
     home_team.innerText = post.home_team.full_name;
     visitor_team.innerText = " " + post.visitor_team.full_name + " \n"; 
     /*isso aqui eu to manipulando 
     o texto e acessando a response da api, acessando o dado e atribuindo aos elementos 
     que criei acima*/
     div.appendChild(home_team);
     div.appendChild(home_score);
     div.appendChild(visitor_score);
     div.appendChild(visitor_team);
     jogos.appendChild(div);
     /* estou montando a estrutura do elemento na html, montando a o html */
     
     
   })
 })

let count = 1; 
document.getElementById("radio1").checked = true;

setInterval( function() {
  nextImage();
}, 8000
)

function nextImage(){
  count++
  if(count>4){
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
}
