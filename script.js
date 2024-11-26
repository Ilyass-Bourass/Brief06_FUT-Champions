
document.addEventListener("DOMContentLoaded",()=>{

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