let products = [
    { id: 1, name: "  samsung", price: 10000, image: "../images/samsung.png" },
    { id: 2, name: "vivo", price: 20000, image: "../images/vivo.png" },
    { id: 3, name: "iphone", price: 30000, image: "../images/iphone.png" },
]


function showData() {
    let data = ""

    products.map((v, i) => (
        data += `
        <div class="col-lg-3 col-md-6 col-12">
            <div class="card">
                <img src="${v.image}" height="200px" width="100%" alt="">
                 <div class="card-body">
            <span>Name:${v.name}</span>
            <span>Price:${v.price}</span>
            <button class="btn btn-primary" onclick="cartFun(${v.id})">cart</button>
        </div>
            </div>
        </div>
        `
    ))

    document.getElementById("showData").innerHTML = data


}
showData()


function searchFun(e) {
    e.preventDefault()
    let searchData = document.getElementById("input").value

    let output = products.filter((v, i) => v.name.toLowerCase().trim().includes(searchData.toLowerCase().trim()) || v.price == searchData)
    console.log(output);
    console.log(typeof (searchData));

    let data = ""
    output.map((v, i) => (
        data += `
        <div class="col-lg-3 col-md-6 col-12">
            <div class="card">
                <img src="${v.image}" height="200px" width="100%" alt="">
                 <div class="card-body">
            <span>Name:${v.name}</span>
            <span>Price:${v.price}</span>
        </div>
            </div>
        </div>
        `
    ))
    document.getElementById("searchOutput").innerHTML = data

}

// cart function

var cart = []

function cartFun(proID) {

    let cartData = products.find((v, i) => v.id == proID)
    console.log("cartData", cartData);

    let existingData=cart.find((v,i)=>v.id ==proID)


    if(existingData){
        cartData.quantity ++
    }
    else{
         cart.push(cartData)
         cartData.quantity=1
    }

   
    console.log("cart", cart);
    showcart(cart)
}



function showcart(cartPro) {
    let data = ""
    console.log("showcart",cartPro);
    
    cartPro.map((v,i) => (
        data += `
         <tr>
                <td>
                    <img src="${v.image}"height="100px" width="100px" alt="">
                </td>
                <td>${v.name}</td>
                <td>${v.price}</td>
                <td>${v.quantity}</td>
                <td><button class="btn btn-close" onclick="removeFun(${v.id})"></button></td>
            </tr>
      `
    ))
    document.getElementById("cartShow").innerHTML=data

}



function removeFun(proID){


let removeData=cart.find((v,i)=>v.id==proID)

console.log(removeData);

cart=cart.filter((v,i)=>v.id!=proID)

showcart(cart)
}