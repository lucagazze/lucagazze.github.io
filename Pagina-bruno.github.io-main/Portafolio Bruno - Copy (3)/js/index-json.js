console.log("correcto");

const xhttp = new XMLHttpRequest();

xhttp.open("GET", "../data/analisis-bruno  - Hoja 1.json", true);

xhttp.send();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let datos = JSON.parse(this.responseText);

    let res = document.querySelector("#analisis-content");
    res.innerHTML = "";

    for (const item of datos) {
      if (
        item.id == "5" ||
        item.id == "4" ||
        item.id == "3" ||
        item.id == "2" ||
        item.id == "1" ||
        item.id == "6"
      ) {
        res.innerHTML += `
    <a style="color:white;" class="card card${item.id}" href="../words/${item.href}.pdf">
            <div class="box">
            <h3>${item.fecha}</h3>
            <div class="text">- ${item.empresa} -</div>
                <img loading="lazy" src="../img/comprimidas/${item.imagen}.JPG" alt="">
                <p>${item.resumen}</p>
            </div>
        </a>
       
    `;
      }
    }
  }
};
