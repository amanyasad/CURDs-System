
var productInp = document.getElementById("productName");
var categoryInp = document.getElementById("productCategory");
var priceInp = document.getElementById("productPrice");
var desInp = document.getElementById("productDescription");
var tbody = document.getElementById("tbody");
var searchInp = document.getElementById("searchInput");
 var createbtn = document.getElementById("createbtn");
 






if( localStorage.getItem("allProducts") == null ){

    var productContainer = [];

}else{
    var productContainer = JSON.parse(localStorage.getItem("allProducts"));
}

// if(createbtn.innerHTML == "Add Product"){
//   createbtn.onclick = createProduct;
// }else if(createbtn.innerHTML == "Update Product"){
//   createbtn.onclick = updateProduct;
// }

createbtn.onclick = createProduct;

console.log(productContainer)

displayProduct();

function createProduct (){

    var product ={
        productName : productInp.value,
        productCategory : categoryInp.value,
        productPrice : priceInp.value,
        productDescription : desInp.value

    }
     
   

    productContainer.push(product);

    displayProduct();
    changLocaleStorage();


   
    clearForm();

    
}


function clearForm(){
    productInp.value ="";
    categoryInp.value ="";
    priceInp.value = "";
    desInp.value ="";

    createbtn.innerHTML ="Add Product";
}


function displayProduct(){
  var trs = "";

     for ( var i= 0 ; i < productContainer.length ; i++) {
      
      
         trs += `<tr >
         <td >${i}</td>
         <td>${productContainer[i].productName}</td>
         <td>${productContainer[i].productCategory}</td>
         <td>${productContainer[i].productPrice}</td>
         <td>${productContainer[i].productDescription}</td>
         <td>
           <button class="btn btn-secondary" onclick="showData(${i})">
             <i class="fas fa-edit"></i>
            
           </button>
         </td>
         <td>
           <button class="btn btn-danger" onclick="deleteRow(${i})"  >
 
             <i class="fas fa-trash"  ></i>
           </button>
         </td>
        
       </tr>`;

       
         
     }

     tbody.innerHTML = trs;
    
    
}


function formSearch(){

  var trs ="";
  for (var i = 0 ; i < productContainer.length ; i++){

    

    if(productContainer[i].productName.toLowerCase().includes(searchInp.value.toLowerCase())){

      
      trs += `<tr >
      <td >${i}</td>
      <td>${productContainer[i].productName}</td>
      <td>${productContainer[i].productCategory}</td>
      <td>${productContainer[i].productPrice}</td>
      <td>${productContainer[i].productDescription}</td>
      <td>
        <button class="btn btn-secondary" onclick="showData(${i})">
          <i class="fas fa-edit"></i>
         
        </button>
      </td>
      <td>
        <button class="btn btn-danger" onclick="deleteRow(${i}) " >

          <i class="fas fa-trash" ></i>
        </button>
      </td>
     
    </tr>`;
     
      
     
    }else{
      
    }

  }

  console.log(searchInp.value);
  tbody.innerHTML = trs;

  changLocaleStorage();

}


function deleteRow( index){ 
console.log(index);
productContainer.splice(index,1);

console.log(productContainer)

changLocaleStorage();

displayProduct();
}

function showData(index){

  displayProduct();
  
  console.log(index);
  productInp.value = productContainer[index].productName;
  categoryInp.value = productContainer[index].productCategory;
  priceInp.value =productContainer[index].productPrice;
  desInp.value =productContainer[index].productDescription;

  createbtn.innerHTML = "Updat Porduct";

  createbtn.onclick = function(){
    updateProduct(index);
  };

}



function changLocaleStorage(){
  var x = JSON.stringify(productContainer );

localStorage.setItem("allProducts",x);
}

function updateProduct(index){

  
  productContainer[index].productName = productInp.value;
  productContainer[index].productCategory = categoryInp.value;
  productContainer[index].productPrice =  priceInp.value;
  productContainer[index].productDescription =desInp.value;
  
  

  displayProduct();
  clearForm();
  changLocaleStorage();
  
}




 


