var modal = document.querySelector("modal");
var form = document.querySelector("form");
var hide = document.querySelector("hidee");
var donthide = document.querySelector("donthidee");

function pid() {
    document.getElementById("modal-p").innerHTML="I have Modaalled! Weeeeeeeeeeeeeee!"
    form.style.display="none";
    form.classList.add("hidden");
    modal.style.display="block";
    modal.classList.remove("hidden");
};

function show() {
    document.getElementById("modal-p").innerHTML="Press to Modaal:"
    modal.style.display="none";
    modal.classList.add("hidden");
    form.style.display="block";
    form.classList.remove("hidden");
};
