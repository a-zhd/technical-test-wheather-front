const BACKEND_URL = "http://localhost:8200";


function getFromYears() {
  return [1, 2, 4, 5, 6657, 87];
}

function getToYears() {

}

function request (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  if (xhr.status != 200)
    alert("Error in query");
  else
    callback(xhr.responseText);
}

function init() {
  // request(BACKEND_URL + "/temperatures", function (resp) {
  //   // console.log(resp);
  // });
  request(BACKEND_URL + "/precipitations", function (resp) {
    console.log(resp);
  });
}

init();
