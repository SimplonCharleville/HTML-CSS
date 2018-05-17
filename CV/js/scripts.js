// On écris sa fonction javascript
function showDetails(){
  // On défini la variable "x" qui va cibler notre élément HTML avec l'ID "address"
  // C'est pour simplifier son code
  var x = document.getElementById("address");
  
  // On écris la condition qui va vérifier le style de notre balise HTML
  if (x.style.display == "none") {
      // Si la condition est remplie (l'élément est masqué), alors on l'affiche
      x.style.display = "block";
   }
   // Si la condition n'est pas remplie (l'élément est affiché), alors on le masque
   else
   {
      x.style.display = "none";
   }
}
