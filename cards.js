var Items = [
    {
    "Image" : "http://127.0.0.1:5501/JS/Butter.jpg",
    "Price" : "1200",
    "Brand" : "Puma",
    },
    {
    "Image" : "http://127.0.0.1:5501/JS/Butter.jpg",
    "Price" : "1600",
    "Brand" : "Nivya",
    },
    {
    "Image" : "http://127.0.0.1:5501/JS/Butter.jpg",
    "Price" : "1500",
    "Brand" : "Addidas",
    },
    {
    "Image" : "http://127.0.0.1:5501/JS/Butter.jpg",
    "Price" : "1800",
    "Brand" : "Nike",
    },
    {
    "Image" : "http://127.0.0.1:5501/JS/Butter.jpg",
    "Price" : "1600",
    "Brand" : "Nivya",
    },
    {
    "Image" : "http://127.0.0.1:5501/JS/Butter.jpg",
    "Price" : "1900",
    "Brand" : "Cosco",
    },
    {
    "Image" : "http://127.0.0.1:5501/JS/Butter.jpg",
    "Price" : "2000",
    "Brand" : "Supervalley",
    },
    {
    "Image" : "http://127.0.0.1:5501/JS/Butter.jpg",
    "Price" : "82000",
    "Brand" : "HP",
    },
    {
    "Image" : "http://127.0.0.1:5501/JS/Butter.jpg",
    "Price" : "1600",
    "Brand" : "Nivya",
    },
    {
    "Image" : "http://127.0.0.1:5501/JS/Butter.jpg",
    "Price" : "70000",
    "Brand" : "DELL",
    },
]

const cards = Items.map((ele) => {
    return ( `
    <div class="card">
        <div class="img-section">
            <img src=${ele.Image} alt="">
        </div>
        <div class="info-section">
            <div class="price-section">
                Price: ${ele.Price}
            </div>
            <div class="brand-section">
                Brand: ${ele.Brand}
            </div>
        </div>
    </div>
    `)
})
var parent = document.getElementsByClassName("parent-card")[0];
parent.innerHTML = cards.join(" ");

