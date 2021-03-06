var campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor")
];

console.log(campos);
event.preventDefalt();
var tbody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener("submit", function(){
  var tr = document.creatElement("tr");
  campos.forEach(function(campo){
    var td = document.creatElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);

  });

var tdVolume = document.creatElement("td");
tdVolume.textContent = campo[1].value * campo[2].value;
tr.appendChild(tdVolume);

tbody.appendChild(tr);

campos[0].value = '';
campos[1].value = 1;
campos[2].value = 0;
campos.[0].focus();

});
