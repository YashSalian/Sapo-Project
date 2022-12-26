// var o=document.getElementById("open")
// var modal=document.getElementById("modal-container")
// var c=document.getElementById("close")


// o.addEventListener('click', ()=>{
//     modal.classList.add('show')
// });

// c.addEventListener('click', ()=>{
//     modal.classList.remove('show')
// });

var modal = document.getElementById("modal-container");

var open = document.getElementById("open");

var close = document.getElementsById("close");

// open.onclick = function() {
//   modal.style.display = "block";
// }
// close.onclick = function() {
//   modal.style.display = "none";
// }

open.addEventListener('click', ()=>{modal.style.display="block"});
close.addEventListener('click', ()=>{modal.style.display="none"});
