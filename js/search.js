

    const property = [
{  
    type: "Villa", 
    name:"Lifestyle International Realty", 
    address:"11540 Street, Forbes Park, Makati City",
    city: "Makati",
    status: "For Sale",
    image: "img/3-main.jpg",
    price: "Php 30,000,000.00"
},
{   
    type: "House", 
    name:"Sweet Home Residence", 
    address:"123 SW 107th Ave, BGC, Taguig City",
    city: "Taguig",
    status: "For Sale",
    image: "img/property-5.jpg",
    price: "Php 5,000,000.00"
},
{    
    type: "Office", 
    name:"The Empire Building", 
    address:"775 Julia, Vargas, Ortigas, Pasig City ",
    city: "Pasig",
    status: "For Rent",
    image: "img/office.jpg",
    price: "Php 50,000,000.00/ month"
},
{   
    type: "Condominium", 
    name:"Golden Urban", 
    address:"132 Street, Sumulong Highway, Marikina City",
    city: "Marikina",
    status: "For Rent",
    image: "img/condo.jpg",
    price: "Php 20,000.00/ month"
},


];


function show(){
  const list = document.querySelector("#products-cards-container")

  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild)
  }

  var x = document.getElementById("status").value;
  var y = document.getElementById("type").value;
  var z = document.getElementById("location").value;


  const results = property.filter(element => {
    if (x!=="0"&& y!=="0" && z !=="0") {
        return element.type === y && element.status === x && element.city === z;
      }
      else if(y==="0" && z==="0"){
        return element.status === x;
      }
      else if(x==="0" && z==="0"){
        return element.type === y;
      }
      else if(x==="0" && y==="0"){
        return element.city === z;
      }
      else if(x==="0"){
        return element.type === y && element.city === z;
      }
      else if(y==="0"){
        return element.status === x && element.city === z;
      }
      else if(z==="0"){
        return element.status === x && element.type === y;
      }
    
    });

for (i = 0; i < results.length; i++) {
console.log(results[i].name)
  cardsContainer = document.querySelector("#products-cards-container");

  let newCard = document.createElement("div");

cardHtml = `
   <div class="card me-3" style="float:left">              
    <div class="product-header">
        <img src="${results[i].image}"/>
    </div>
    <div class="product-content">
        <h4><a href="appartment.html">${results[i].name}</a></h4>
        <p>${results[i].status}</p>
        <p>${results[i].price}</p>
        <p>${results[i].address}</p>
    </div> 
    
   </div>   
`;


cardsContainer.appendChild(newCard);
newCard.innerHTML = cardHtml;

}

}
