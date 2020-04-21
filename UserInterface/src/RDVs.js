const axios = require("axios");
var url = "http://127.0.0.1:8000/api";
// Pop up screen
var modal = document.getElementById("dialog_popup");
var suivant_btn = document.getElementById("suivant_rdv");
var cancel_btn = document.getElementById("cancel_btn");
var select_patient_filter = document.getElementById("patients");
var select_patient_filter_create = document.getElementById("patients_popup");
suivant_btn.onclick = function () {
  modal.style.display = "flex";
};
cancel_btn.onclick = function () {
  modal.style.display = "none";
};
btn_appliquer.onclick = function () {
  var strUser =
    select_patient_filter.options[select_patient_filter.selectedIndex].value;
  var date = document.getElementById("date_rdv").value;
  console.log(strUser);
  if (date != null && date != "") {
    filter_RDVs_date(date);
  } else if (strUser != null && strUser != "") {
    filter_RDVs_patient(strUser);
  } else {
    load_RDVs();
  }
};

function filter_RDVs_date(date_arg) {
  axios
    .get(url + "/showbyDate/" + date_arg, {})
    .then(function (response) {
      cleartable();
      fill(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function filter_RDVs_patient(patient_arg) {
  axios
    .get(url + "/showRdvPatient/" + patient_arg, {})
    .then(function (response) {
      cleartable();
      fill(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function cleartable() {
  const rows = document.querySelectorAll("tr[id]");
  rows.forEach((row) => {
    row.remove();
  });
}
function fill(response) {
  console.log();
  for (let i = 0; i < response["data"].length; i++) {
    var tr = document.createElement("tr");
    tr.id = response["data"][i].id;
    tr.name = response["data"][i].patient_id;
    var td_date = document.createElement("td");
    var td_heure = document.createElement("td");
    var td_objet = document.createElement("td");
    td_date.innerHTML = response["data"][i].dateOfvisiting;
    td_heure.innerHTML = "00:00";
    td_objet.innerHTML = response["data"][i].description;
    tr.appendChild(td_date);
    tr.appendChild(td_heure);
    tr.appendChild(td_objet);
    rdvs.appendChild(tr);
  }
  dynamic_table();
}

var rdvs = document.getElementById("table_RDVs_inside");
function load_RDVs() {
  axios
    .get(url + "/showAllRdv", {})
    .then(function (response) {
      fill(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function load_patients() {
  axios
    .get(url + "/showAllPation", {})
    .then(function (response) {
      for (let step = 0; step < response["data"].length; step++) {
        var option = document.createElement("option");
        option.value = response["data"][step].id;
        option.text = response["data"][step].name;

        select_patient_filter.appendChild(option);
      }
      for (let step = 0; step < response["data"].length; step++) {
        var option = document.createElement("option");
        option.value = response["data"][step].id;
        option.text = response["data"][step].name;

        select_patient_filter_create.appendChild(option);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

var add_date = document.getElementById("add_date");
var add_time = document.getElementById("add_time");
var add_object = document.getElementById("textareainside");
var patients_popup = document.getElementById("patients_popup");
var add_btn = document.getElementById("add_btn");

add_btn.onclick = function () {
  var date_ = add_date.value;
  var time_ = add_time.value;
  var object_ = add_object.value;
  var patient_ = patients_popup.options[patients_popup.selectedIndex].value;
  if (time_ != null && date_ != null && object_ != null && patient_ != null) {
    axios
      .post(url + "/createRdv/", {
        dateOfvisiting: date_,
        description: object_,
        patient_id: patient_,
      })
      .then(function (response) {
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  modal.style.display = "none";
};

function dynamic_table() {
  const rows = document.querySelectorAll("tr[id]");
  rows.forEach((row) => {
    row.addEventListener("click", () => {
      var query_string =
        "?" +
        row.id +
        "&" +
        row.cells[0].innerHTML +
        "&" +
        row.cells[1].innerHTML +
        "&" +
        row.cells[2].innerHTML +
        "&" +
        row.name;
      window.location.href = "RDV.html" + query_string;
    });
  });
}

dynamic_table();

load_patients();
load_RDVs();
