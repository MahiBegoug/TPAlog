const axios = require("axios");
var url = "http://127.0.0.1:8000/api";
var table_patients = document.getElementById("table_patients");
function load_patients() {
  axios
    .get(url + "/showAllPation", {})
    .then(function (response) {
      for (let i = 0; i < response["data"].length; i++) {
        var tr = document.createElement("tr");
        tr.id = response["data"][i].id;
        var td_nom = document.createElement("td");
        var td_age = document.createElement("td");
        var td_adresse = document.createElement("td");
        td_nom.innerHTML = response["data"][i].name;
        td_age.innerHTML = response["data"][i].age;
        td_adresse.innerHTML = response["data"][i].address;
        tr.appendChild(td_nom);
        tr.appendChild(td_age);
        tr.appendChild(td_adresse);
        table_patients.appendChild(tr);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

load_patients();
