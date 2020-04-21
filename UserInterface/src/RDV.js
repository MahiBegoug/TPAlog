const axios = require("axios");
const fs = require("fs");
var url = "http://127.0.0.1:8000/api";

var queryString = decodeURIComponent(window.location.search);
var date_ = document.getElementById("date");
var time_ = document.getElementById("time");
var textarea = document.getElementById("textarea");
queryString = queryString.substring(1);
var queries = queryString.split("&");

var supprimer_rdv = document.getElementById("supprimer_rdv");
var modifier_rdv = document.getElementById("modifier_rdv");
var save_rdv = document.getElementById("save_rdv");
var ptients = document.getElementById("patients_popup");

function load_RDV(arg1, arg2, arg3, arg4, arg5) {
  date.value = arg1;
  time.value = arg2;
  textarea.innerText = arg3;
  textarea.dataset.id = arg4;
  ptients.selectedIndex = arg5;
  console.log(arg5);
  console.log(ptients.selectedIndex);
}
load_RDV(queries[1], queries[2], queries[3], queries[0], queries[4]);

supprimer_rdv.onclick = function () {
  axios
    .delete(url + "/destroyRdv/" + textarea.dataset.id, {})
    .then(function (response) {
      console.log("successful delete");
      window.location.href = "RDVs.html";
    })
    .catch(function (error) {
      console.log(error);
    });
};

modifier_rdv.onclick = function () {
  modifier_rdv.style.display = "none";
  save_rdv.style.display = "block";
  date.readOnly = false;
  textarea.readOnly = false;
  time.readOnly = false;
  ptients.disabled = false;
};

save_rdv.onclick = function () {
  axios
    .post(url + "/modifieRdv/" + textarea.dataset.id, {
      data: {
        dateOfvisiting: date.value,
        description: textarea.value,
        patient_id: ptients.options[ptients.selectedIndex].value,
        etat: "time",
      },
    })
    .then(function (response) {
      window.location.href = "RDVs.html";
    })
    .catch(function (error) {
      console.log(error);
      window.location.href = "RDVs.html";
    });
};

function load_patients() {
  axios
    .get(url + "/showAllPation", {})
    .then(function (response) {
      for (let step = 0; step < response["data"].length; step++) {
        var option = document.createElement("option");
        option.id = response["data"][step].id;
        option.text = response["data"][step].name;
        ptients.appendChild(option);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
load_patients();

var imprimer_rdv = document.getElementById("imprimer_rdv");
imprimer_rdv.onclick = function () {};
