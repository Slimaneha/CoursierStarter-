
function accesSite () {
    document.getElementById("exampleModal").style.display="none"
}



v1 = "Roubaix";
v2 = "Tourcoing";
v3 = "Wattrelos";
v4 = "Croix";
v5 = "Wasquehal";
v6 = "Bondu";
v7 = "Marcq en baroeul";
v8 = "Mons en baroeul";
v9 = "Villeneuve d'ascq";
v10 = "La madeleine" ;





 function afficheVilles () {

        document.getElementById("v1").innerHTML=v1
        document.getElementById("v2").innerHTML=v2
        document.getElementById("v3").innerHTML=v3
        document.getElementById("v4").innerHTML=v4
        document.getElementById("v5").innerHTML=v5
        document.getElementById("v6").innerHTML=v6
        document.getElementById("v7").innerHTML=v7
        document.getElementById("v8").innerHTML=v8
        document.getElementById("v9").innerHTML=v9
        document.getElementById("v10").innerHTML=v10



}

afficheVilles ()



function article() {

        document.getElementById("block2").style.display="none";
        document.getElementById("block3").style.display="block"
        document.getElementById("block1").style.display="none"


      

}



codePostal =0;
var selectElmtTaxiUn = document.getElementById("villes");
var  choixTaxiVille =""
var agesUn =""

function information ()

{
   
    var  choixTaxiVille = textselectionne = selectElmtTaxiUn.options[selectElmtTaxiUn.selectedIndex].text;
    var   agesUn= document.getElementById("ages").value



    if (agesUn > 17){

         document.getElementById("block6Valide").style.display="block"
         document.getElementById("block5").style.display="none"
         document.getElementById("buttonRetourValide").style.display="block"
         document.getElementById("buttonCheckUn").style.display="none"
         document.getElementById("buttonCheckpass").style.display="block"
         document.getElementById("villesUn").innerHTML=choixTaxiVille; 




    }

    else  {
        document.getElementById("buttonCheckUn").style.display="none"
        document.getElementById("block6Erreur").style.display="block"
        document.getElementById("block5").style.display="none"
        document.getElementById("buttonRetourErreur").style.display="block"

    }



   

}









