
document.addEventListener("DOMContentLoaded",()=>{

    let Players = JSON.parse(localStorage.getItem('Players')) || [];

    const selctJoueurGaradien=document.querySelector(".selctJoueurGaradien select");
    const formulaire_ajouterJoueur=document.querySelector(".formulaire_ajouterJoueur");
    const formulaireAjouterGardiennt=document.querySelector(".formulaireAjouterGardiennt");
    const containerJoueurs = document.querySelector(".containerJoueurs");
    
    
    function afficherJoueur(){

        containerJoueurs.innerHTML="";
        Players.forEach((Player,index)=>{

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
            const iconSupprimer=document.createElement("i");
            iconSupprimer.innerHTML=`<i class="fas fa-times"></i>`
            Joueur.appendChild(iconSupprimer);
            containerJoueurs.appendChild(Joueur);

            iconSupprimer.addEventListener("click",()=>{
                supprimerJoueur(Player,index);
            })

            const iconModifier=document.createElement("i");
            iconModifier.innerHTML=`<i class="fa fa-user-edit"></i>`
            Joueur.appendChild(iconModifier);
            containerJoueurs.appendChild(Joueur);

            iconModifier.addEventListener("click",()=>{
                modifierInformationGardient(Player);
            })

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
            const iconSupprimer=document.createElement("i");
            iconSupprimer.innerHTML=`<i class="fas fa-times"></i>`
            Joueur.appendChild(iconSupprimer);

            containerJoueurs.appendChild(Joueur);
            iconSupprimer.addEventListener("click",()=>{
                supprimerJoueur(Player,index);
            })

            const iconModifier=document.createElement("i");
            iconModifier.innerHTML=`<i class="fa fa-user-edit"></i>`
            Joueur.appendChild(iconModifier);
            containerJoueurs.appendChild(Joueur);
            
            iconModifier.addEventListener("click",()=>{
                modifierInformationJoueur(Player);
            })

        }
        });
    }
    afficherJoueur();

    
    function supprimerJoueur(Player,indexSupprimer){
        Players.splice(indexSupprimer,1);
        localStorage.setItem("Players",JSON.stringify(Players));
        if(Player.position=="GK"){
            alert(`Le gardient ${Player.name} à été supprimer avec succés`);
        }
        else{
            alert(`Le joueur ${Player.name} à été supprimer avec succés`);
        }
        afficherJoueur();
    }

    function modifierInformationJoueur(Player){
        const divformulaireModierJoueur=document.querySelector(".FormulaireModierjoueur");
        const formulaireModierJoueur=divformulaireModierJoueur.querySelector("#playerForm");

                divformulaireModierJoueur.style.display="block";

                formulaireModierJoueur[0].value = Player.position;
                formulaireModierJoueur[1].value = Player.club;
                formulaireModierJoueur[2].value = Player.rating;
                formulaireModierJoueur[3].value = Player.shooting;
                formulaireModierJoueur[4].value = Player.passing;
                formulaireModierJoueur[5].value = Player.dribbling;
                formulaireModierJoueur[6].value = Player.defending;
    
                const BtnEnregestrerLeformulaire = formulaireModierJoueur[7];

                BtnEnregestrerLeformulaire.addEventListener("click", (e) => {
                    e.preventDefault();
    
                    
                    Player.position = formulaireModierJoueur[0].value.trim();
                    Player.club = formulaireModierJoueur[1].value.trim();
                    Player.rating = parseInt(formulaireModierJoueur[2].value);
                    Player.shooting = parseInt(formulaireModierJoueur[3].value);
                    Player.passing = parseInt(formulaireModierJoueur[4].value);
                    Player.dribbling = parseInt(formulaireModierJoueur[5].value);
                    Player.defending = parseInt(formulaireModierJoueur[6].value);
    
                  
                    localStorage.setItem("Players", JSON.stringify(Players));
    
                    
                    divformulaireModierJoueur.style.display = "none";
                    alert(`la modification du Joueur ${Player.name} à été fait avec succés`);
                    afficherJoueur();
                });
    }

    function modifierInformationGardient(Player){
        const divFormulaireModierGardient=document.querySelector(".FormulaireModierGardient");
        const FormulaireModierGardient=divFormulaireModierGardient.querySelector("#playerForm");
                divFormulaireModierGardient.style.display="block";

                
                FormulaireModierGardient[0].value = Player.club;
                FormulaireModierGardient[1].value = Player.rating;
                FormulaireModierGardient[2].value = Player.diving;
                FormulaireModierGardient[3].value = Player.handling;
                FormulaireModierGardient[4].value = Player.kicking;
                FormulaireModierGardient[5].value = Player.reflexes;
    
                const BtnEnregestrerLeformulaire = FormulaireModierGardient[6];

                BtnEnregestrerLeformulaire.addEventListener("click", (e) => {
                    e.preventDefault();
    
                    
                   
                    Player.club = FormulaireModierGardient[0].value.trim();
                    Player.rating = parseInt(FormulaireModierGardient[1].value);
                    Player.diving = parseInt(FormulaireModierGardient[2].value);
                    Player.handling = parseInt(FormulaireModierGardient[3].value);
                    Player.kicking = parseInt(FormulaireModierGardient[4].value);
                    Player.reflexes = parseInt(FormulaireModierGardient[5].value);
    
                  
                    localStorage.setItem("Players", JSON.stringify(Players));
                    divFormulaireModierGardient.style.display = "none";
                    alert(`La modification du gardient ${Player.name} à éte fait avec succés`);
                    afficherJoueur();
                });
    }

    const selectChoixFormation=document.querySelector("#formation");

    selectChoixFormation.addEventListener("change",(e)=>{
        chosirVotreFormation(selectChoixFormation.value);
    });


    function chosirVotreFormation(choixFormation){
        const playerST=document.querySelector(".parteright .ST");
        const playerRW=document.querySelector(".parteright .RW");
        const playerLW=document.querySelector(".parteright .LW");

        if(choixFormation==2){
           playerST.style.gridRow = "2";
           playerRW.style.gridColumn="7/9";
           playerLW.style.gridColumn="3/5"
        }
        else if(choixFormation==1){
            playerST.style.gridRow = "1";
            playerRW.style.gridColumn="8/10";
             playerLW.style.gridColumn="2/4"
        }
    }


    
    selctJoueurGaradien.addEventListener("change",()=>{
        choisirentreJoueurGardient(selctJoueurGaradien.value);
    })

    function choisirentreJoueurGardient(Choix){  
            if (Choix=== "Gardien") {
                formulaire_ajouterJoueur.style.display = "none";
                formulaireAjouterGardiennt.style.display = "block";
            } else if (Choix === "Joueur") {
                formulaireAjouterGardiennt.style.display = "none";
                formulaire_ajouterJoueur.style.display = "block";
            } else {
                formulaire_ajouterJoueur.style.display = "none";
                formulaireAjouterGardiennt.style.display = "none";
            }   
    }


    const JoueursPrincipal=document.querySelectorAll(".parteright .player");
    const Joueurschangement=document.querySelectorAll(".containerJoueurs .player");
   // const JoueursPrermutation=document.querySelectorAll(".parteright .player")[0];

   function ajouterJoueurListePrincipal(){

    JoueursPrincipal.forEach(JoueurPrincipal=>{
        JoueurPrincipal.onclick=function(){
            //location.href = "#containerJoueurs";
            // console.log(JoueurPrincipal.classList[1]);
            updatePlayerPosition(JoueurPrincipal.classList[1],JoueurPrincipal);
        }
            
    })
    
}

    ajouterJoueurListePrincipal();

    function updatePlayerPosition(PositionJoueur,JoueurPrincipal){
        Joueurschangement.forEach(Joueuchangement=>{
            // if(Joueuchangement.querySelector('.player-position p').textContent==PositionJoueur && jOueurnExistePas(Joueuchangement))
           if(Joueuchangement.querySelector('.player-position p').textContent==PositionJoueur){
            Joueuchangement.style.display="";
           }
           else{
            Joueuchangement.style.display="none";
           }
           Joueuchangement.onclick=function(){
                // if(JoueurPrincipal){
                //     JoueursPrermutation.innerHTML=JoueurPrincipal.innerHTML;
                //     JoueurPrincipal.innerHTML = Joueuchangement.innerHTML;
                //     Joueuchangement.innerHTML=JoueursPrermutation.innerHTML;
                // }
                // else{
                //     JoueurPrincipal.innerHTML = Joueuchangement.innerHTML;
                // }
               
                JoueurPrincipal.innerHTML = Joueuchangement.innerHTML;

                const i=document.createElement("i");
                i.innerHTML=`<i class="fas fa-times"></i>`
                JoueurPrincipal.appendChild(i);

                i.addEventListener("click",()=>{
                    JoueurPrincipal.innerHTML="";
                })
               // Joueuchangement.style.display ='none'
           }
        })
    }

    // function jOueurnExistePas(Joueuchangement) {
    //     let trouve = true;  
    
        
    //     const joueurNomElement = Joueuchangement.querySelector('.player-name p');
    //     if (joueurNomElement) {
    //         const joueurNom = joueurNomElement.textContent;
    //         JoueursPrincipal.forEach(JoueurPrincipal => {
    //             const joueurPrincipalNomElement = JoueurPrincipal.querySelector('.player-name p');
    //             if (joueurPrincipalNomElement) {
    //                 const joueurPrincipalNom = joueurPrincipalNomElement.textContent;
    
    //                 if (joueurNom === joueurPrincipalNom) {
    //                     trouve = false;  
    //                 }
    //             }
    //         });
    //     }
        
    //     return trouve;
    // }
    


function ajouterNouveauGardient() {
        const formulaireAjouterGardiennt = document.querySelector(".formulaireAjouterGardiennt #playerForm");
        const BtnEnregestrerLeformulaire = formulaireAjouterGardiennt.querySelector(".btnEnrgestrerJoueur");
    
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
    
         
            if (name && photo &&  rating && diving && handling && kicking && reflexes) {
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
                alert(`le Gardient ${Player.name} à été ajouter avec succés`);
            } else {
                alert('Veuillez remplir tous les champs requis.');
            }
            afficherJoueur();
        });
    }

ajouterNouveauGardient();


function ajouterNouveauJoueur() {
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
                alert(`le Joueur ${Player.name} à été ajouter avec succés`);
            } else {
    
                alert('Veuillez remplir tous les champs requis.');
            }
            afficherJoueur();
        });
    }

ajouterNouveauJoueur();  
   
})