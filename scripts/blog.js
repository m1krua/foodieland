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



const blogs = document.querySelector('.blogs');

const blogData = [
    {
        img: '../images/blog2.png',
        title: '10 Vegetarian Recipes To Eat This Month',
        avatar: '../images/blog2.svg',
        name: 'Robert Fox'
    },
    {
        img: '../images/blog3.png',
        title: 'Warm Crochet for Winter',
        avatar: '../images/blog3.svg',
        name: 'Dianne Russell'
    },
    {
        img: '../images/blog4.png',
        title: 'Full Guide to Becoming a Professional Chef',
        avatar: '../images/blog4.svg',
        name: 'Leslie Alexander'
    },
    {
        img: '../images/blog5.png',
        title: 'Simple & Delicious Vegetarian Lasagna',
        avatar: '../images/blog5.svg',
        name: 'Courtney Henry'
    },
    {
        img: '../images/blog6.png',
        title: 'Plantain and Pinto Stew with Aji Verde',
        avatar: '../images/blog6.svg',
        name: 'Albert Flores'
    }
];

for (const blog of blogData) {
    blogs.innerHTML +=
        `<div class="blog-left">
            <div>
                <img src="${blog.img}" alt="">
            </div>

            <div>
                <h1>${blog.title}</h1>
                <p class="common-p">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
                            incididunt
                            ut labore et dolore magna aliqut enim </p>
                <div class="profils">
                    <img src="${blog.avatar}" alt="">
                        <span>${blog.name}</span>
                        <span class="profile-date">12 November 2021</span>
                </div>
            </div>
        </div>`
        ;
}


  const pages = document.querySelectorAll('.scroll .page');

  pages.forEach(btn => {
    btn.addEventListener('click', () => {
      pages.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });