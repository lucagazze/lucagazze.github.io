console.log("correcto");

const xhttp = new XMLHttpRequest();

xhttp.open("GET", "../data/analisis-bruno  - Hoja 1.json", true);

xhttp.send();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let datos = JSON.parse(this.responseText);
    console.log(datos);
    let arr = datos;
    let res = document.querySelector("#grid");
    res.innerHTML = "";

    for (const item of datos) {
      res.innerHTML += `
            <a class="item" category="${item.category}"  href="../words/${item.href}.pdf">
            
                <div class="item-contenido" >
                <b>${item.fecha}</b>
                <h2>- ${item.empresa} -</h2>
                    <img loading="lazy" src="../img/comprimidas/${item.imagen}.JPG" />
                    <h3>${item.resumen}</h3>

                </div>
                </a>
               
            `;

      //FILTRADOR DE ARRAYS(NO SIRVE PARA NADA = MIRAR CONSOLA)
    }
    var newArr = arr.filter(function (el) {
      return el.resumen === "sape";
    });

    console.log(newArr);
  }
};
