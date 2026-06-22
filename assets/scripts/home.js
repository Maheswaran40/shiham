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
    console.log(typeof(searchData));
    
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
    document.getElementById("searchOutput").innerHTML=data

}