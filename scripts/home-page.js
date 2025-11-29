//array [] --object {}

const categories = [
    {
        image: "../images/breakfast.png",
        name: "Breakfast"
    },
    {
        image: "../images/vegan.png",
        name: "Vegan"
    },
    {
        image: "../images/meat.png",
        name: "Meat"
    },
    {
        image: "../images/dessert.png",
        name: "Dessert"
    },
    {
        image: "../images/lunch.png",
        name: "Lunch"
    },
    {
        image: "../images/chocolate.png",
        name: "Chocolate"
    }
]



//DOM
const categoriesBottom = document.querySelector(".categories-bottom");
categoriesBottom.innerHTML = "";
for (const category of categories) {

    categoriesBottom.innerHTML += `
     <div class="category-card">
                <img src="${category.image}" alt="">
                <p>${category.name}</p>
            </div>`
}



const cards = [
    {
        image: "../images/burger.png",
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        text: "Snack",
        like: "../images/redlike.svg"
    },
    {
        image: "../images/limefish.png",
        name: "Fresh Lime Roasted Salmon with Ginger Sauce",
        text: "fish",
        like: "../images/graylike.svg"
    },
    {
        image: "../images/pancake.png",
        name: "Strawberry Oatmeal Pancake with Honey Syrup",
        text: "Breakfast",
        like: "../images/graylike.svg"
    },
    {
        image: "../images/salat.png",
        name: "Fresh and Healthy Mixed Mayonnaise Salad",
        text: "Healthy",
        like: "../images/redlike.svg"
    },
    {
        image: "../images/chicken.png",
        name: "Chicken Meatballs with Cream Cheese",
        text: "Meat",
        like: "../images/graylike.svg"
    },
    {
        image: "../images/beef.png",
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        text: "Western",
        like: "../images/graylike.svg"
    },
    {
        image: "../images/fruitcake.png",
        name: "Fruity Pancake with Orange & Blueberry",
        text: "Sweet",
        like: "../images/redlike.svg"
    },
    {
        image: "../images/chikrice.png",
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        text: "Snack",
        like: "../images/graylike.svg"
    },
    {
        image: "../images/noodles.png",
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        text: "Noodles",
        like: "../images/graylike.svg"
    }
];

const cardsBottom = document.querySelector(".recipes-cards");
cardsBottom.innerHTML = "";

for (const card of cards) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("r-card");

    cardDiv.innerHTML =
        `<div class="rate-like">
            <img src="${card.like}" alt="">
        </div>
        <div class="card-top">
            <img src="${card.image}" alt="">
        </div>
        <div class="card-bottom">
            <h3>${card.name}</h3>
            <div class="small-btn">
                <span><img src="../images/time.svg" alt="">30 Minutes</span>
                <span><img src="../images/spun.svg" alt="">${card.text}</span>
            </div>
        </div>`
        ;

    cardsBottom.appendChild(cardDiv);

    // Навешиваем клик на лайк
    const likeImg = cardDiv.querySelector(".rate-like img");
    likeImg.addEventListener("click", () => {
        // меняем src на красное или серое
        likeImg.src = likeImg.src.includes("redlike.svg")
            ? "../images/graylike.svg"
            : "../images/redlike.svg";
    });
}