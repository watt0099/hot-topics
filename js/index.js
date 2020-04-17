// FETCHING HTML PARTIAL
const loadBtn_p = document.querySelector(".portfolio");
const loadHere = document.querySelector(".container");
let url_p = "partials/portfolio.html";



function handleAjaxRequest_p() {
  fetch(url_p)
    .then(function (rsp) {
      return rsp.text();
    })
    .then( function (data){
      loadHere.innerHTML = data;
    })
};


loadBtn_p.addEventListener("click", handleAjaxRequest_p);

//Code for the room gallery
function lightBoxGallery(imgs) {

  // Get the expanded image
  let showImg = document.getElementById("showImg");

  // Use the same src in the expanded image as the image being clicked on from the grid
  showImg.src = imgs.src;

  // Show the image
  showImg.parentElement.style.display = "block";

 }