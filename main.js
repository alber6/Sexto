

const header = document.querySelector("header");

const title = "España en el siglo XIX";
const h2 = "Proyectos de sexto de primaria";
header.innerHTML = `
<h1 id = title >${title}
<h2>${h2}</h2>`;

const products = [
  {
    author: "Dereck",
    url: 'https://www.canva.com/design/DAGiro0qq9w/cgcQRwUfa9oL5nHe-Y_XVA/edit?utm_content=DAGiro0qq9w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    image: '/assets/adri.png'
  },
  {
    author: "Izan",
    url: 'https://www.canva.com/design/DAGiLNwTwxY/91rbx5P9op8wSeg1lo8cRA/edit?utm_content=DAGiLNwTwxY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    image: '/assets/aitana.png'
  },
  {
    author: "Aitana",
    url: 'https://www.canva.com/design/DAF3a8UkHak/9P0pNsTsc57fEFLR_NubKQ/edit?utm_content=DAF3a8UkHak&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    image: '/assets/aitana.png'
  },
  {
    author: "Nazim",
    url: 'https://www.canva.com/design/DAGiQxPkYq4/7BhOFsyAWCGWeXZ-RA4aWw/edit?utm_content=DAGiQxPkYq4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    image: '/assets/nazim.png'
  },
  {
    author: "Analía",
    url: 'https://www.canva.com/design/DAGh-aXXLuE/ewvN95qy2rNYUsGEnnH4Hw/edit?utm_content=DAGh-aXXLuE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    image: '/assets/analiaayala.png'
  },
  {
  author: "Gustavo",
  url: 'https://www.canva.com/design/DAGh-V5dYiA/Rdr2lnT309qOlztsThQFqA/edit?utm_content=DAGh-V5dYiA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  image: '/assets/adri.png'
  },
  {
    author: "Lidia",
    url: 'https://www.canva.com/design/DAF94ngFh5M/_D0Qy3pK5SyGktfiEMuH0A/edit',
    image: '/assets/aitana.png'
  },
  {
    author: "David",
    url: 'https://www.canva.com/design/DAGiAVUbndM/34XfCOOPbhFNOMJj3gsBJA/edit',
    image: '/assets/DAVID.png'
  },
  {
    author: "Mar",
    url: 'https://www.canva.com/design/DAGh_Q6wbV0/N6aLilG7mPxw61fkj0DtmA/edit',
    image: '/assets/adri.png'
  },
  {
    author: 'Lía',
    url: 'https://www.canva.com/design/DAGiGfPDBA4/HHfGub1GMTqNLZavNgaqxw/edit',
    image: '/assets/adri.png'
  },
  {
    author: 'Ariadna',
    url: 'https://www.canva.com/design/DAGioq9aEDc/5LHql6-fAorW7_LjYryU6Q/edit',
    image: '/assets/fio.png'
  },
  {
    author: 'Alvaro',
    url: 'https://www.canva.com/design/DAGiHCaF66M/Q-Xv05FPCCuDb-_TaWSeIw/edit?utm_content=DAGiHCaF66M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    image: '/assets/alvaroo.png'
  },
  {
    author: 'Sofía',
    url: 'http://canva.com/design/DAGh-iqHSqU/RKF1xD9XjfXbUkhohR87VQ/view?utm_content=DAGh-iqHSqU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h13d2396ab1#1',
    image: '/assets/sofi.png'
  },
  {
  author: 'Fiorella',
  url: 'https://www.canva.com/design/DAGh-ZmAnXU/ZrvwvP2mm9rKF9K3ChbdPw/view?utm_content=DAGh-ZmAnXU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3cabab71bc',
  image: '/assets/fio.png'
  },
  {
  author: 'Gabriela',
  url: 'https://www.canva.com/design/DAGiQoYM84c/ugZicui16-Kahzdf0toseA/edit',
  image: '/assets/gabriela.png'
  },
  {
  author: 'Kayle',
  url: 'https://www.canva.com/design/DAGiq8oMlYY/9fNldX6IXuloHLW-KIZ5IA/edit',
  image: '/assets/sofi.png'
  },
  {
  author: 'Luna',
  url: 'https://www.canva.com/design/DAGiLUDlD_g/kXE5j37sB6dGCpqDjHsXAQ/edit',
  image: '/assets/luna.png'
  },
  {
  author: 'Armony',
  url: 'https://www.canva.com/design/DAGe65X8CEI/VZDTWT2fbG86JAIFeLvx5A/edit',
  image: '/assets/armony.png'
  },
  {
  author: 'Hans',
  url: 'https://www.canva.com/design/DAFyRnZZ2OY/jV1mJic49VUg_sTEQHZceQ/watch?utm_content=DAFyRnZZ2OY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc463258b92',
  image: '/assets/hans.png'
  },
  {
  author: 'Ana',
  url: 'https://www.canva.com/design/DAGh-dy-Bsc/483zuR4u25vFe3CKKuHsTg/edit',
  image: '/assets/armony.png'
  },
];

const body = document.querySelector("body");

const main = document.querySelector("main");
main.className = "container";

const pintarProducts = (products) => {
  if (products.length){
    main.innerHTML = "";
  for (const product of products) {
    const article = document.createElement("article")
    article.className = "gallery"
    article.innerHTML = `
    <a href="#">
      <img src= "${product.image}" alt="${product.name}"/>
    </a>
    <p>Autor: ${product.author}</p>
    `
    main.appendChild(article);
  }
  } else{
    main.innerHTML = "<h2>No hay coincidencias</h2>"
  }
}

// escucha TODOS los clics que ocurren en el documento.
  document.addEventListener("click", (e) => {
    //e es el objeto del evento, contiene informacion sobre el click, como se le aplica al document, funciona para 
    //cualquier elemento de la pagina

    //e.target es el elemento donde se hizo click, y busca con closest el más cercano que tenga esa clase
    const link = e.target.closest(".gallery");
    if (!link) return;

    e.preventDefault(); // evita que navegue
    alert("Por protección de los datos personales no es posible abrir los proyectos de los alumnos.");
        });

pintarProducts(products);

const footer = document.querySelector("footer")
const parrafo = "Colegio Liceo Ibérico 2025";
footer.innerHTML = `
<p>${parrafo}`;

const aside = document.querySelector("aside");
// botones para seleccionar a partir del nombre y de la fecha de lanzamiento
document.querySelector("#btnText").addEventListener("input", (ev) => {
  const productsFiltrados = products.filter((product) => product.author.toLowerCase().includes(ev.target.value.toLowerCase())
  );
  pintarProducts(productsFiltrados);
});

