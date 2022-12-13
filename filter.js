const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 100,
      cat: "Casual",
    },
    {
        id: 6,
        name: "Rolex Watch 1 ",
        img: "https://m.media-amazon.com/images/I/51s1CVApQKL.jpg",
        price: 100,
        cat: "Luxury",
      },
    {
        id: 7,
        name: "Marine Watch 1 ",
        img: "https://m.media-amazon.com/images/I/71-PQdvKx5L._AC_SX679_.jpg",
        price: 95,
        cat: "Casual",
      },
    {
        id: 8,
        name: "Marine Watch 34",
        img: "https://5.imimg.com/data5/NN/GW/TA/ANDROID-65455699/product-jpeg-500x500.jpg",
        price: 95,
        cat: "Luxury",
      },
    {
        id: 9,
        name: "Marine Watch 76",
        img: "https://i5.walmartimages.com/asr/b6c651c4-73ba-4856-83e5-dbef6cce7e2b.bbca7cf49c6bf45b46b080df96e29a69.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
        price: 95,
        cat: "Casual",
      },
    {
        id: 10,
        name: "Marine Watch 45",
        img: "https://i5.walmartimages.com/asr/f103df0f-c0f9-4f44-a6ba-830e01ed71a2.46f62bfeb8ac1c04cd1f54082e18741e.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
        price: 80,
        cat: "Luxury",
      },
    {
        id: 11,
        name: "Marine Watch 87",
        img: "https://n2.sdlcdn.com/imgs/g/z/7/Xforia-Gents-Metal-Gold-Watches-SDL859498639-1-b7608.jpeg",
        price: 80,
        cat: "Casual",
      },
    {
        id: 12,
        name: "Marine Watch ",
        img: "https://rukminim1.flixcart.com/image/832/832/kzhbfrk0/watch/i/6/n/new-stylish-watches-black-and-blue-sbaprime-boys-original-imagbhjzfgkeyzfj.jpeg?q=70",
        price: 80,
        cat: "Luxury",
      },
    {
        id: 13,
        name: "Marine Watch ",
        img: "https://previews.123rf.com/images/ozaiachin/ozaiachin1302/ozaiachin130200060/17908696-golden-watches-on-white-background.jpg",
        price: 75,
        cat: "Casual",
      },
    {
        id: 14,
        name: "Marine Watch ",
        img: "https://www.westend61.de/images/0000144021pw/wrist-watches-on-white-background-close-up-CSF015425.jpg",
        price: 75,
        cat: "Luxury",
      },
    {
        id: 15,
        name: "Marine Watch ",
        img: "https://5.imimg.com/data5/SL/MK/MY-9850299/dark-blue-royal-classic-big-size-dial-1000x1000.jpeg",
        price: 75,
        cat: "Casual",
      },
    {
        id: 16,
        name: "Marine Watch ",
        img: "https://nwolshop.com/wp-content/uploads/2019/12/707-ghjwqe.jpeg",
        price: 70,
        cat: "Luxury",
      },
    {
        id: 17,
        name: "Marine Watch ",
        img: "https://rukminim1.flixcart.com/image/832/832/jv9udu80/watch/c/e/h/fabric-chronicle-collection-original-imafg7rfqcp2gwvy.jpeg?q=70",
        price: 70,
        cat: "Casual",
      },
    {
        id: 18,
        name: "Marine Watch ",
        img: "https://i5.walmartimages.com/asr/10c1d64d-6864-46c9-9bdf-0b8df2074dd8.8edced376b59151681901f8457e9d214.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
        price: 60,
        cat: "Luxury",
      },
    {
        id: 19,
        name: "Marine Watch ",
        img: "https://rukminim1.flixcart.com/image/832/832/kj4m0sw0-0/watch/w/u/j/a-silver-metal-strap-with-very-simple-dial-wrist-reagan-original-imafyrkq9rzcfddg.jpeg?q=70",
        price: 60,
        cat: "Casual",
      },
    {
        id: 20,
        name: "Marine Watch ",
        img: "https://images.jdmagicbox.com/quickquotes/images_main/tissot-wrist-watch-for-men-384080233-9jqww.jpeg",
        price: 55,
        cat: "Luxury",
      },
    {
        id: 21,
        name: "Marine Watch ",
        img: "https://assets.dragonmart.ae/pictures/0455712_casio-mens-stainless-steel-digital-wrist-watch-gold-34mm-a178wga-1adf.jpeg",
        price: 174,
        cat: "Casual",
      },
    {
        id: 22,
        name: "Marine Watch ",
        img: "https://media.istockphoto.com/id/465318817/photo/mens-wristwatch-with-black-leather-band-on-white-background.jpg?s=170667a&w=0&k=20&c=HOyGiOVdrJ4lOEKR06I1IA9CirIacdzYogo7s-5NsZg=",
        price: 24,
        cat: "Casual",
      },
    {
        id: 23,
        name: "Marine Watch ",
        img: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014120228_437Wx649H_202208122221151.jpeg",
        price: 34,
        cat: "Casual",
      },
    {
        id: 24,
        name: "Marine Watch ",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsWIU3G6RTXg0C5xIk6s7ZKSkXB03SpWqZw&usqp=CAU",
        price: 44,
        cat: "Sport",
      },
    {
        id: 25,
        name: "Marine Watch ",
        img: "https://image-us.samsung.com/SamsungUS/home/mobile/wearables/smartwatches/sm-r920nzkggfu-gallery/SM-R920_Golf-Edition_001_Front_Black-Titanium_Gallery-1600x1200.jpg?$product-details-jpg$",
        price: 54,
        cat: "Casual",
      },
    {
        id: 26,
        name: "Marine Watch ",
        img: "https://s.alicdn.com/@sc04/kf/HTB1aD47aMFY.1VjSZFqxh5dbXXav.jpeg_300x300.jpeg",
        price: 64,
        cat: "Sport",
      },
    {
        id: 27,
        name: "Marine  Watch ",
        img: "https://i5.walmartimages.com/asr/6b0c926c-610d-4756-9ebb-e93833a8b24a.35d9329545082be83edc3bc73893a492.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
        price: 74,
        cat: "Casual",
      },
    {
        id: 28,
        name: "Marine Mens Watch ",
        img: "https://5.imimg.com/data5/SELLER/Default/2022/3/ZK/HA/GB/30488159/timeland-17--500x500.jpeg",
        price: 84,
        cat: "Sport",
      },
    {
        id: 29,
        name: "Marine Mens Watch ",
        img: "https://media.istockphoto.com/id/518820558/photo/smartwatch-digital-clock-on-white.jpg?s=612x612&w=0&k=20&c=iytJPHBJ15SoPGcnDjXIBa6PjE7c0qIap8WJf_oETbg=",
        price: 94,
        cat: "Casual",
      },
    {
        id: 30,
        name: "Marine Mens Watch ",
        img: "https://img.tatacliq.com/images/i7/658Wx734H/MP000000010483145_658Wx734H_202109021902261.jpeg",
        price: 74,
        cat: "Sport",
      },
  ];
  
  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const categoriesContainer = document.querySelector(".cats");
  const priceRange = document.querySelector(".priceRange");
  const priceValue = document.querySelector(".priceValue");
  
  const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
      .map(
        (product) =>
          `
         <div class="product">
            <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
          </div>
      `
      )
      .join("");
  };
  
  displayProducts(data);
  
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
  
    if (value) {
      displayProducts(
        data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
    } else {
      displayProducts(data);
    }
  });
  
  const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
      "All",
      ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
      }),
    ];
  
    categoriesContainer.innerHTML = categories
      .map(
        (cat) =>
          `
        <span class="cat">${cat}</span>
      `
      )
      .join("");
  
    categoriesContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;
  
      selectedCat === "All"
        ? displayProducts(data)
        : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
  };
  
  const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
  
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "$" + e.target.value;
      displayProducts(data.filter((item) => item.price <= e.target.value));
    });
  };
  
  setCategories();
  setPrices();