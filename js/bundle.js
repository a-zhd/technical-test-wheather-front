const BACKEND_URL = "http://localhost:8200";


function getFromYears() {
  return [1, 2, 4, 5, 6657, 87];
}

function getToYears() {

}

function request (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  if (xhr.readyState === 4) {
    if (xhr.status === 200)
       callback(xhr.responseText);
    else
       alert("Error in query");

  }
}

function init() {
  request(BACKEND_URL + "/precipitations", function (resp) {
    console.log(resp);
  });
  request(BACKEND_URL + "/temperatures", function (resp) {
    console.log(resp);
  });
}

init();
