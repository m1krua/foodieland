const loops = [
    {
        image: "../images/loop1.png",
        title: "Mixed Tropical Fruit Salad with Superfood Boosts",
        healthy: "Healthy",
        like: "../images/redlike.svg"
    },
    {
        image: "../images/loop2.png",
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        healthy: "Western",
        like: "../images/graylike.svg"
    },
    {
        image: "../images/loop3.png",
        title: "Healthy Japanese Fried Rice with Asparagus",
        healthy: "Healthy",
        like: "../images/redlike.svg"
    },
    {
        image: "../images/loop4.png",
        title: "Cauliflower Walnut Vegetarian Taco Meat",
        healthy: "Eastern",
        like: "../images/graylike.svg"
    }
]




const loopsBottom = document.querySelector(".loop-cards");
loopsBottom.innerHTML = "";

for (const loop of loops) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("l-card");

    cardDiv.innerHTML = `
        <div class="l-like">
            <img class="like-btn" src="${loop.like}" alt="like">
        </div>

        <div class="loop-top">
            <img src="${loop.image}" alt="">
        </div>

        <div class="card-bottom">
            <h3>${loop.title}</h3>
            <div class="small-btn">
                <span><img src="../images/time.svg" alt="">30 Minutes</span>
                <span><img src="../images/spun.svg" alt="">${loop.healthy}</span>
            </div>
        </div>`
        ;

    loopsBottom.appendChild(cardDiv);

    const likeImg = cardDiv.querySelector(".like-btn");

    likeImg.addEventListener("click", (e) => {
        e.stopPropagation();

        if (likeImg.src.includes("redlike.svg")) {
            likeImg.src = "../images/graylike.svg";
        } else {
            likeImg.src = "../images/redlike.svg";
        }
    });
}

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    let wasChecked = false

    radio.addEventListener('click', () => {
        if (wasChecked) {
            radio.checked = false
            radio.nextElementSibling.classList.remove('checked')
            wasChecked = false
        } else {
            radio.checked = true
            radio.nextElementSibling.classList.add('checked')
            wasChecked = true
        }
    })
})

>
document.querySelectorAll('.directions .step input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', () => {
    cb.nextElementSibling.classList.toggle('checked', cb.checked)
  });
});