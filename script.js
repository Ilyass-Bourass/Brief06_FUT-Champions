
document.addEventListener("DOMContentLoaded",()=>{

    const Players=JSON.parse(localStorage.getItem("Players"));

    const containerJoueurs=document.querySelector(".containerJoueurs");

    Players.forEach((Player,index_Joueur_changement)=>{

        if(Player.position==="GK"){

        const Joueur=document.createElement("div");
        Joueur.classList.add("player",Player.position);

        Joueur.innerHTML=` <div class="DetailsJoeur">
                    <div class="player-position">
                        <p>${Player.position}</p>
                    </div>
                    <div class="player-photo">
                        <img src=${Player.photo} id="player-photo" alt="">
                    </div>
                    <div class="player-info">
                        <p class="rating">${Player.rating}</p>
                        <div class="country">
                            <img src=${Player.nationality} id="player-country" alt="">
                        </div>
                        <div class="club">
                            <img src=${Player.club} id="logo" alt="">
                        </div>
                    </div>
                    <div class="player-name">
                        <p>${Player.name}</p>
                    </div>
                    <div class="player-stats">
                        <div class="stats">
                            <p class="diving">DIV <span>${Player.diving}</span></p>
                            <p class="handling">HAN <span>${Player.handling}</span></p>
                            <p class="kicking">KIC <span>${Player.kicking}</span></p>
                            <p class="reflexes">REF <span>${Player.reflexes}</span></p>
                        </div>
                    </div>
                </div>
        `
        
        containerJoueurs.appendChild(Joueur);
        console.log("gardient")
        console.log(Joueur);
    }
    else {
        const Joueur=document.createElement("div");
        Joueur.classList.add("player",Player.position);
        Joueur.innerHTML=` <div class="DetailsJoeur">
                    <div class="player-position">
                        <p>${Player.position}</p>
                    </div>
                    <div class="player-photo">
                        <img src=${Player.photo} id="player-photo" alt="">
                    </div>
                    <div class="player-info">
                        <p class="rating">${Player.rating}</p>
                        <div class="country">
                            <img src=${Player.nationality} id="player-country" alt="">
                        </div>
                        <div class="club">
                            <img src=${Player.club} id="logo" alt="">
                        </div>
                    </div>
                    <div class="player-name">
                        <p>${Player.name}</p>
                    </div>
                    <div class="player-stats">
                        <div class="stats">
                            <p class="shooting">SHO <span>${Player.shooting}</span></p>
                            <p class="passing">PAS <span>${Player.passing}</span></p>
                             <p class="dribbling">DIR <span>${Player.dribbling}</span></p>
                            <p class="defending">DEF <span>${Player.defending}</span></p>
                        </div>
                        
                    </div>
                </div>
        `
        containerJoueurs.appendChild(Joueur);
        console.log("joueur");
        console.log(Joueur);
    }
    });

    const JoueursPrincipal=document.querySelectorAll(".parteright .player");
    const Joueurschangement=document.querySelectorAll(".containerJoueurs .player");

    function displayPlayer(PositionJoueur,JoueurPrincipal){
        Joueurschangement.forEach(Joueuchangement=>{
           if(Joueuchangement.querySelector('.player-position p').textContent==PositionJoueur){
            Joueuchangement.style.display="";
           }
           else{
            Joueuchangement.style.display="none";
           }
           Joueuchangement.onclick=function(){
                JoueurPrincipal.innerHTML = Joueuchangement.innerHTML
           }
        })
    }

    JoueursPrincipal.forEach(JoueurPrincipal=>{
        JoueurPrincipal.onclick=function(){
            // console.log(JoueurPrincipal.classList[1]);
            displayPlayer(JoueurPrincipal.classList[1],JoueurPrincipal);
        }
            
    })

    
    
    
    


    const selctJoueurGaradien=document.querySelector(".selctJoueurGaradien select");
    const formulaire_ajouterJoueur=document.querySelector(".formulaire_ajouterJoueur");
    const formulaireAjouterGardiennt=document.querySelector(".formulaireAjouterGardiennt");
    
    const iconsAjouterJoueur=document.querySelectorAll(".fa-plus");
    
  

    selctJoueurGaradien.addEventListener("change", () => {
        if (selctJoueurGaradien.value === "Gardien") {
            formulaire_ajouterJoueur.style.display = "none";
            formulaireAjouterGardiennt.style.display = "block";
        } else if (selctJoueurGaradien.value === "Joueur") {
            formulaireAjouterGardiennt.style.display = "none";
            formulaire_ajouterJoueur.style.display = "block";
        } else {
            formulaire_ajouterJoueur.style.display = "none";
            formulaireAjouterGardiennt.style.display = "none";
        }
    });

    iconsAjouterJoueur.forEach(iconAjouterJoueur=>{
        iconAjouterJoueur.addEventListener("click",(e)=>{
            console.log(e.target.getAttribute("value"));
        })
    })

})