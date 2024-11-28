
document.addEventListener("DOMContentLoaded",()=>{

    let Players = JSON.parse(localStorage.getItem('Players')) || [];

    const selctJoueurGaradien=document.querySelector(".selctJoueurGaradien select");
    const formulaire_ajouterJoueur=document.querySelector(".formulaire_ajouterJoueur");
    const formulaireAjouterGardiennt=document.querySelector(".formulaireAjouterGardiennt");
    
    

    function choisirentreJoueurGardient(){
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
    }

    choisirentreJoueurGardient();
    

    

   // formulaire_ajouterJoueur.style.display = "block";

    const containerJoueurs = document.querySelector(".containerJoueurs");

   // formulaireAjouterGardiennt.style.display = "block"; 

    function ajouterGardientLocalStorage() {
        const formulaireAjouterGardiennt = document.querySelector(".formulaireAjouterGardiennt #playerForm");
        const BtnEnregestrerLeformulaire = formulaireAjouterGardiennt.querySelector(".btnEnrgestrerJoueur");
    
        // Vérifier si des joueurs existent déjà dans le localStorage
        let Players = JSON.parse(localStorage.getItem('Players')) || [];
    
        BtnEnregestrerLeformulaire.addEventListener('click', function(event) {
            event.preventDefault();  
    
         
            const name = formulaireAjouterGardiennt.querySelector("#name").value.trim();  
            const photo = formulaireAjouterGardiennt.querySelector("#photo").value.trim();
            
            const position = "GK";  
            const nationality = formulaireAjouterGardiennt.querySelector("#nationality").value.trim();
            const club = formulaireAjouterGardiennt.querySelector("#club").value.trim();
            const rating = formulaireAjouterGardiennt.querySelector("#rating").value.trim();
            const diving = formulaireAjouterGardiennt.querySelector("#diving").value.trim();
            const handling = formulaireAjouterGardiennt.querySelector("#handling").value.trim();
            const kicking = formulaireAjouterGardiennt.querySelector("#kicking").value.trim();
            const reflexes = formulaireAjouterGardiennt.querySelector("#reflexes").value.trim();
    
           
            console.log(name,photo,nationality,club, rating, diving, handling, kicking, reflexes);
    
         
            if (1) {
                const Player = {
                    name,
                    photo,
                    position,
                    nationality,
                    club,
                    rating: parseInt(rating),  
                    diving: parseInt(diving),
                    handling: parseInt(handling),
                    kicking: parseInt(kicking),
                    reflexes: parseInt(reflexes)
                };
    
                Players.push(Player);
    

                localStorage.setItem('Players', JSON.stringify(Players));
    

                formulaireAjouterGardiennt.reset();
            } else {
                alert('Veuillez remplir tous les champs requis.');
            }
            location.reload();
        });
    }
    
    ajouterGardientLocalStorage();
    

function ajouterJoueurLocalStorage() {
    const formulaireAjouterJoueur = document.querySelector(".formulaire_ajouterJoueur #playerForm");
    const BtnEnregestrerLeformulaire = formulaireAjouterJoueur.querySelector(".btnEnrgestrerJoueur");

    BtnEnregestrerLeformulaire.addEventListener('click', function(event) {
        event.preventDefault();

        
        const name = document.querySelector("#name").value;
        const photo = document.querySelector("#photo").value;
        const position = document.querySelector("#position").value;
        const nationality = document.querySelector("#nationality").value;
        const club = document.querySelector("#club").value;
        const rating = document.querySelector("#rating").value;
        const shooting = document.querySelector("#shooting").value;
        const passing = document.querySelector("#passing").value;
        const dribbling = document.querySelector("#dribbling").value;
        const defending = document.querySelector("#defending").value;

        
        if (name && photo && position && rating && shooting && passing && dribbling && defending){
            
            const Player = {
                name,
                photo,
                position,
                nationality,
                club,
                rating: parseInt(rating),  
                shooting: parseInt(shooting),
                passing: parseInt(passing),
                dribbling: parseInt(dribbling),
                defending: parseInt(defending)
            };

          
            Players.push(Player);

            localStorage.setItem('Players', JSON.stringify(Players));


            formulaireAjouterJoueur.reset();
        } else {

            alert('Veuillez remplir tous les champs requis.');
        }
        location.reload();
    });
}
ajouterJoueurLocalStorage();


    

    function ajouterListeJoeur(){
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
        }
        });
    }

    ajouterListeJoeur();
    

    const JoueursPrincipal=document.querySelectorAll(".parteright .player");
    const Joueurschangement=document.querySelectorAll(".containerJoueurs .player");


    function updatePlayerPosition(PositionJoueur,JoueurPrincipal){
        Joueurschangement.forEach(Joueuchangement=>{
           if(Joueuchangement.querySelector('.player-position p').textContent==PositionJoueur){
            Joueuchangement.style.display="";
           }
           else{
            Joueuchangement.style.display="none";
           }
           Joueuchangement.onclick=function(){
                JoueurPrincipal.innerHTML = Joueuchangement.innerHTML;

                const i=document.createElement("i");
                i.innerHTML=`<i class="fas fa-times"></i>`
                JoueurPrincipal.appendChild(i);

                i.addEventListener("click",()=>{
                    JoueurPrincipal.innerHTML="";
                   // ajouterListeJoeur();
                })
           }
        })
    }

    function ajouterJoueurListePrincipal(){

        JoueursPrincipal.forEach(JoueurPrincipal=>{
            JoueurPrincipal.onclick=function(){
                location.href = "#containerJoueurs";
                // console.log(JoueurPrincipal.classList[1]);
                updatePlayerPosition(JoueurPrincipal.classList[1],JoueurPrincipal);
            }
                
        })
    }
    ajouterJoueurListePrincipal()

    

    
    
    
})