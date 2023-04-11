const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {

  // let ulEl = document.getElementsByClassName("lista")
  // console.log(ulEl); // HTMLcollecion
  
  // let arrUlEl = document.querySelectorAll(".lista")
  // console.log(arrUlEl); //NodeList

  // console.log(ulEl[0]); // <ul class="lista">li*3...</ul>

  // Eliminar nodos
  let elementos = document.querySelectorAll(".lista li")
  elementos.forEach(li => {
    li.remove()
  });

  // Agregar clases al array. 
  cosasQueAprendimos.forEach(el => {
    el.class = el.tema;
  });
  
  // Agregar nodos
  let UlEl = document.querySelectorAll("ul")
  for (let i = 0; i < cosasQueAprendimos.length; i++) {
    let newLi = document.createElement("li")
    let  texto = document.createTextNode(cosasQueAprendimos[i].tema);
    newLi.appendChild(texto);
    newLi.classList.add(cosasQueAprendimos[i].class);
    UlEl[0].appendChild(newLi);
  }

}

main();
