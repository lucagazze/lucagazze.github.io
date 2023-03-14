$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  //  QUE APAREZCA EL MENU EN RESPONSIVE
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // ANIMACION DE ESCRIBIR EN HOME
  var typed = new Typed(".typing", {
    strings: ["Analista", "Contador", "Inversionista"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

//Funciones de leer mas
let i = 0;
let button = document
  .querySelector("#button")
  .addEventListener("click", function () {
    if (!i) {
      document.getElementById("vermas").style.display = "block";
      document.getElementById("button").innerHTML = "Ocultar";
      document.getElementById("button").classList.add("ocultado");
      i = 1;
    } else {
      document.getElementById("vermas").style.display = "none";
      document.getElementById("button").innerHTML = "Ver mas";
      document.getElementById("button").classList.remove("ocultado");
      i = 0;
    }
  });

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
