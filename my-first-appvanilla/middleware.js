

export const ajax = () => {
  const http = new XMLHttpRequest();
  const url = `http://localhost:3001/products`;
  http.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200 ) { 
      const response = JSON.parse(this.responseText) 
      // console.log(response , "linea22")
      luisHook(response)
    }
  }
  
  http.open("GET", url);
  http.send();
}

const luisHook = (arg) => {

  const formato = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})
  
  const copia = document.querySelector('#opp').innerHTML =`
  <div  class="page-content" >

       <div class="product-cards" >

       <div class="contenedor-cart animate__animated animate__backInLeft" >
       <div class="contenedor-img" >
       <img src=${arg.respuesta[0].image.src}></img>
       </div>
       <div class="contenedor-name" >
       <h4 class="centerC" >${arg.respuesta[0].title.slice(0, -10)}</h4>
       </div>
       <p>${ formato.format(arg.respuesta[0].variants[0].price)}</p>
       </div>
       
       <div class="contenedor-cart animate__animated animate__backInLeft" >
       <div class="contenedor-img" >
       <img src=${arg.respuesta[1].image.src}></img>
       </div>
       <div class="contenedor-name" >
       <h4 class="centerC" >${arg.respuesta[1].title.slice(0, 30)}</h4>
       </div>
       <p>${ formato.format(arg.respuesta[1].variants[0].price)}</p>
       </div>
       
       <div class="contenedor-cart animate__animated animate__backInLeft" >
       <div class="contenedor-img" >
       <img src=${arg.respuesta[2].image.src}></img>
       </div>
       <div class="contenedor-name" >
       <h4 class="centerC" >${arg.respuesta[2].title}</h4>
       </div>
       <p>${ formato.format(arg.respuesta[2].variants[0].price)}</p>
       </div>

       <div class="contenedor-cart animate__animated animate__backInLeft" >
       <div class="contenedor-img" >
       <img src=${arg.respuesta[3].image.src}></img>
       </div>
       <div class="contenedor-name" >
       <h4 class="centerC" >${arg.respuesta[3].title}</h4>
       </div>
       <p>${ formato.format(arg.respuesta[3].variants[0].price)}</p>
       </div>
    
    </div>
  
   </div>
    `
}


// export default Navbar
