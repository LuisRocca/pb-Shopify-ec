import './style.css'
import {ajax} from'./middleware'

ajax()

document.querySelector('#btn').addEventListener('click', () => {

  const http = new XMLHttpRequest();
  const url = `https://new-app-microcomerce.herokuapp.com/products`;
  http.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200 ) { 
      const response = JSON.parse(this.responseText) 
      // console.log(response , "linea22")
      const formato = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })
      document.querySelector('#opp').innerHTML =`
      <div  class="page-content" >
    
              <div class="product-cards" >
    
              <div class="contenedor-cart animate__animated animate__backInRight" >
              <div class="contenedor-img" >
              <img src=${response.respuesta[4].image.src}></img>
              </div>
              <div class="contenedor-name" >
              <h4 class="centerC" >${response.respuesta[4].title.slice(0, 30)}</h4>
              </div>
              <p>${ formato.format(response.respuesta[4].variants[0].price) }</p>
              </div>
              
              <div class="contenedor-cart animate__animated animate__backInRight" >
              <div class="contenedor-img" >
              <img src=${response.respuesta[5].image.src}></img>
              </div>
              <div class="contenedor-name" >
              <h4 class="centerC" >${response.respuesta[5].title}</h4>
              </div>
              <p>${formato.format(response.respuesta[5].variants[0].price) }</p>
              </div>
    
              <div class="contenedor-cart animate__animated animate__backInRight" >
              <div class="contenedor-img" >
              <img src=${response.respuesta[6].image.src}></img>
              </div>
              <div class="contenedor-name" >
              <h4 class="centerC" >${response.respuesta[6].title}</h4>
              </div>
              <p>${formato.format(response.respuesta[6].variants[0].price) }</p>
              </div>      
              </div> 
              
      </div>
      `
    }  
  }
  http.open("GET", url);
  http.send();  
})
document.querySelector('#btn2').addEventListener('click', () => ajax())
// document.querySelector('#fakeButton').addEventListener('click', () => alert(' Esta funcionalidad aun esta en produccion '))

document.querySelector('#app').innerHTML = `
<header>
<div class="menu">
  <h2 class="logo" >Rains</h2>
  <nav>
      <ul>
        <li><a href="#">EUR</a></li>
        <li><i class="fas fa-search"></i></li>
        <li><i class="fas fa-shopping-bag"></i></li>
        <li><i class="fas fa-bars"></i></li>
      </ul>
  </nav>
</div>
</header>
`
document.querySelector('#slider').innerHTML =`
<div class="container">

  <ul class="slider animate__animated animate__bounce ">
    <li id="slide1">
      <img src="https://i.postimg.cc/wjdJXvyg/Capturaofertapruebashopify.png"/>
    </li>
    <li id="slide2">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3947459/sunset.jpg"/>
    </li>
    <li id="slide3">
      <h1>Muchas gracias por tomarme en cuenta para esta oportunidad</h1>
      <p> He contruido muchos mas sitios los cuales podran ver en mis distintas redes, ya que siempre publico lo que 
       hago en Linkedin o en mi git hub </p>
      <h2>un poco mas sobre mi</h2>
      <p>🔭   I aspire to go very far and develop great things.
      🤔   Exploring new technologies and developing software solutions and quick hacks.
      🎓   Studying Computer Science, computer programming and Mathematics.
      💼   Back-end developer and front-end web developer.
      🌱   Enthusiast in cyber Security and Artificial Intelligence .
      ✍️   Watching Anime and trying out latest design trends as hobbies/side hustles.
      ☕   I belive, a perfect cup of coffee can be the ultimate solution for any stress.</p>
      <h3>Les dejo a continuacion enlazadas mis redes para que puedan conocerme mas </h3>

      <a href="https://github.com/LuisRocca"><i class="fab fa-github"></i></a>
      <a  href="https://www.linkedin.com/in/luis-miguel-alfonzo-roca-web-developer/"><i class="fab fa-linkedin"></i></a>
      <a  href="https://torre.co/luisrocca96?s=xCRxqDvkpk"><i class="fab fa-accessible-icon"></i></a>
    </li>
  </ul>
  
<ul class="menu-slider animate__animated animate__flash ">
<li>
  <a href="#slide1">1</a>
</li>
<li>
  <a href="#slide2">2</a>
</li>
 <li>
  <a href="#slide3">3</a>
</li>
</ul>

</div>
`