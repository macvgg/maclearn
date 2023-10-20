const annoucement = document.getElementById("annoucement");
const close = document.getElementById("close");
const newbtn = document.getElementById("new");
annoucement.classList.remove("not-appear");

function notappear() {
  annoucement.classList.add("not-appear");
}

close.addEventListener("click",notappear);
setInterval(function(){
  newbtn.classList.toggle("new-effect");
},500)