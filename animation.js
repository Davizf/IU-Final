function acceptCookies(){
    document.getElementById("politicaCookies").style.display="none";
};
function hoteles(){
    document.getElementById("optionSummer").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("subMain").style.display="block";
    document.getElementById("submainBar").style.display="block";
    document.getElementById("searchBar").style.display="block";
    document.getElementById("byKeywords").style.display="none";
    document.getElementById("keyTitleHotel").style.display="block";
    document.getElementById("separated").style.display="block";
    document.getElementById("infoHotels").style.display="block";
    document.getElementById("infoExperiences").style.display="none";
    document.getElementById("añadirLista1").style.display="none";
    document.getElementById("añadirLista2").style.display="none";
    document.getElementById("keyTitleExperience").style.display="none";
    document.getElementById("gallery").style.display="none";
    document.getElementById("writeOpinionBox").style.display="none";
    document.getElementById("detailInfoHotelsBox").style.display="none";
};
function addList1(){
  document.getElementById("añadirLista2").style.display="none";
  document.getElementById("añadirLista1").style.display="block";
};

function addList2(){
  document.getElementById("añadirLista1").style.display="none";
  document.getElementById("añadirLista2").style.display="block";
};
function experiences(){
  document.getElementById("optionSummer").style.display="none";
  document.getElementById("main").style.display="none";
  document.getElementById("subMain").style.display="block";
  document.getElementById("submainBar").style.display="block";
  document.getElementById("searchBar").style.display="block";
  document.getElementById("byKeywords").style.display="none";
  document.getElementById("keyTitleExperience").style.display="block";
  document.getElementById("separated").style.display="block";
  document.getElementById("infoExperiences").style.display="block";
  document.getElementById("infoHotels").style.display="none";
  document.getElementById("añadirLista1").style.display="none";
  document.getElementById("añadirLista2").style.display="none";
  document.getElementById("keyTitleHotel").style.display="none";
  document.getElementById("gallery").style.display="none";
  document.getElementById("writeOpinionBox").style.display="none";
  document.getElementById("detailInfoHotelsBox").style.display="none";
}

function searchForm(){
  var lugar = document.getElementById("lugar");
  var partida = document.getElementById("partida");
  var llegada = document.getElementById("llegada");
  var personas = document.getElementById("personas");
  document.getElementById("main").style.display="none";
  document.getElementById("subMain").style.display="block";
  document.getElementById("submainBar").style.display="block";
  document.getElementById("searchBar").style.display="block";
  document.getElementById("separated").style.display="block";
  document.getElementById("infoHotels").style.display="block";
  document.getElementById("infoExperiences").style.display="none";
  document.getElementById("añadirLista1").style.display="none";
  document.getElementById("añadirLista2").style.display="none";
  document.getElementById("byKeywords").style.display="block";
  document.getElementById("keyTitleHotel").style.display="none";
  document.getElementById("keyTitleExperience").style.display="none";
  document.getElementById("place").innerHTML = "En " + lugar.value.bold();
  document.getElementById("date").innerHTML = "Desde el " + partida.value.bold() + " hasta el " + llegada.value.bold();
  document.getElementById("person").innerHTML = "Para " + personas.value.bold() + " personas";
};

function backMain(){
  document.getElementById("main").style.display="block";
  document.getElementById("subMain").style.display="none";
};

function hotelViaCastellana(){
  document.getElementById("optionSummer").style.display="none";
  document.getElementById("añadirLista1").style.display="none";
  document.getElementById("añadirLista2").style.display="none";
  document.getElementById("infoHotels").style.display="none";
  document.getElementById("infoExperiences").style.display="none";
  document.getElementById("gallery").style.display="block";
  document.getElementById("detailInfoHotelsBox").style.display="block";
  document.getElementById("var1").innerHTML = "Hotel Via Castellana";
  document.getElementById("var2").innerHTML = "Lujoso";
  document.getElementById("var3").innerHTML = "Madrid Centro";
  document.getElementById("var4").innerHTML = "Recomendado";
  document.getElementById("var5").innerHTML = "Chamartin, Madrid";
  document.getElementById("var6").innerHTML = "El Hotel Via Castellana esta en la zona financiera de Chamartin,"
  + "en el Paseo de la Castellana de Madrid, junto a las emblematicas torres Kio.";
};

function hotelNH(){
  document.getElementById("optionSummer").style.display="none";
  document.getElementById("añadirLista1").style.display="none";
  document.getElementById("añadirLista2").style.display="none";
  document.getElementById("infoHotels").style.display="none";
  document.getElementById("infoExperiences").style.display="none";
  document.getElementById("gallery").style.display="block";
  document.getElementById("detailInfoHotelsBox").style.display="block";
  document.getElementById("var1").innerHTML = "Hotel NH Principe de Vergara";
  document.getElementById("var2").innerHTML = "Elegante";
  document.getElementById("var3").innerHTML = "Barrio de Salamana";
  document.getElementById("var4").innerHTML = "Tranquilo";
  document.getElementById("var5").innerHTML = "Principe de Vergara, Madrid";
  document.getElementById("var6").innerHTML = "Este hotel de deseño esta situado en el elegante barrio de Salamanca de Madrid,"
   + "a 200 metro de la esracion de metro Avenida de America.";
};

function Tour(){
  document.getElementById("optionSummer").style.display="none";
  document.getElementById("añadirLista1").style.display="none";
  document.getElementById("añadirLista2").style.display="none";
  document.getElementById("infoHotels").style.display="none";
  document.getElementById("infoExperiences").style.display="none";
  document.getElementById("gallery").style.display="block";
  document.getElementById("detailInfoHotelsBox").style.display="block";
  document.getElementById("var1").innerHTML = "Tour guiado por Madrid";
  document.getElementById("var2").innerHTML = "Madrid Centro";
  document.getElementById("var3").innerHTML = "Guiado";
  document.getElementById("var4").innerHTML = "Recomendado";
  document.getElementById("var5").innerHTML = "Madrid";
  document.getElementById("var6").innerHTML = "Disfruta de todos los rincones de Madrid centro en una visita guiada por toda la"
  + "zona en la que conoceras los rincones mas asombrosos de la ciudad.";
};
function Bucea(){
  document.getElementById("optionSummer").style.display="none";
  document.getElementById("añadirLista1").style.display="none";
  document.getElementById("añadirLista2").style.display="none";
  document.getElementById("infoHotels").style.display="none";
  document.getElementById("infoExperiences").style.display="none";
  document.getElementById("gallery").style.display="block";
  document.getElementById("detailInfoHotelsBox").style.display="block";
  document.getElementById("var1").innerHTML = "Bucea entre peces";
  document.getElementById("var2").innerHTML = "Buceo";
  document.getElementById("var3").innerHTML = "Acuatica";
  document.getElementById("var4").innerHTML = "Mar";
  document.getElementById("var5").innerHTML = "Guardamar, Alicante";
  document.getElementById("var6").innerHTML = "Disfruta de una experiencia distinta buceando entre peces por las playas de Guardamar en la"
  + "que podras ver muchas especies de peces distintas y conocer un poco la vida marina de la zona.";
};
function Hideout(){
  document.getElementById("optionSummer").style.display="none";
  document.getElementById("añadirLista1").style.display="none";
  document.getElementById("añadirLista2").style.display="none";
  document.getElementById("infoHotels").style.display="none";
  document.getElementById("infoExperiences").style.display="none";
  document.getElementById("gallery").style.display="block";
  document.getElementById("detailInfoHotelsBox").style.display="block";
  document.getElementById("var1").innerHTML = "Hideout";
  document.getElementById("var2").innerHTML = "Naturaleza";
  document.getElementById("var3").innerHTML = "Indonesia";
  document.getElementById("var4").innerHTML = "Ecologico";
  document.getElementById("var5").innerHTML = "Hideout Bali";
  document.getElementById("var6").innerHTML = "Ahora mismo no tenemos opiniones para este evento.<br/>Se el primero en opinar!";
};
function Villa(){
  document.getElementById("optionSummer").style.display="none";
  document.getElementById("añadirLista1").style.display="none";
  document.getElementById("añadirLista2").style.display="none";
  document.getElementById("infoHotels").style.display="none";
  document.getElementById("infoExperiences").style.display="none";
  document.getElementById("gallery").style.display="block";
  document.getElementById("detailInfoHotelsBox").style.display="block";
  document.getElementById("var1").innerHTML = "Villa Amonteera";
  document.getElementById("var2").innerHTML = "Lujose";
  document.getElementById("var3").innerHTML = "Tailandia";
  document.getElementById("var4").innerHTML = "Alternativo";
  document.getElementById("var5").innerHTML = "tailandias";
  document.getElementById("var6").innerHTML = "Ahora mismo no tenemos opiniones para este evento.<br/>Se el primero en opinar!";
};

function addOpinion(){
    document.getElementById("gallery").style.display="none";
    document.getElementById("writeOpinionBox").style.display="block";
};

function moreResult(){
  document.getElementById("optionSummer").style.display="block";
  document.getElementById("infoHotels").style.display="none";
  document.getElementById("infoExperiences").style.display="none";
}
