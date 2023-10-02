// 1. "Save the data" - Vamos mover os dados em html e salvar em javascript

// Primeiro uma variável para salvar os dados, em seguida vamos criar algo que corresponda aos nossos dados. Neste caso, temos uma lista de produtos, portanto vamos criar um array porque um array representa uma lista. Os produtos da lista tem muitos valores, como imagem, nome e preço, então usaremos um objeto para representar cada produto, porque um objeto nos permite agrupar vários valores.

let products = [{
  image: 'imagens/products/athletic-cotton-socks-6-pairs.jpg" class="product-image',
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating: {
    stars: 45,
    count: 87
  },
  // como JS tem problemas para fazer contas com números decimais ou flutuantes (como 10.90). portanto uma prática recomendada ao calcular o dinheiro é calcular em centavos em vez de dólares
  priceCents: 1090
}, /*em seguida o proximo produto*/ {
  image: 'imagens/products/intermediate-composite-basketball.jpg" class="product-image',
  name: 'Intermediate Size Basketball',
  rating: {
    stars: 40,
    count: 127
  },
  priceCents: 2095
}, {
  image: 'imagens/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" class="product-image"',
  name: "Adults Plain Cotton T-Shirt - 2 Pack",
  rating: {
    stars: 45,
    count: 56
  },
  priceCents: 799,
}, {
  image: 'imagens/products/6-piece-white-dinner-plate-set.jpg" class="product-image"',
  name: "6 Piece White Dinner Plate Set",
  rating: {
    stars: 40,
    count: 37
  },
  priceCents: 2067
}, {
  image: 'imagens/products/6-piece-non-stick-baking-set.webp" class="product-image"',
  name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
  rating: {
    stars: 45,
    count: 175
  },
  priceCents: 3499
}, {
  image: 'imagens/products/plain-hooded-fleece-sweatshirt-yellow.jpg"class="product-image"',
  name: "Plain Hooded Fleece Sweatshirt",
  rating: {
    stars: 45,
    count: 317
  },
  priceCents: 2400
}, {
  image: 'imagens/products/luxury-tower-set-6-piece.jpg"class="product-image"',
  name: "Luxury Towel Set - Graphite Gray",
  rating: {
    stars: 45,
    count: 144
  },
  priceCents: 3599
}, {
  image: 'imagens/products/liquid-laundry-detergent-plain.jpg"class="product-image"',
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 45,
      count: 305
    },
    priceCents: 2899
}, {
  image: 'imagens/products/knit-athletic-sneakers-gray.jpg"class="product-image"',
  name: "Waterproof Knit Athletic Sneakers - Gray",
  rating: {
    stars: 40,
    count: 89
  },
  priceCents: 3390
}, {
  image: 'imagens/products/women-chiffon-beachwear-coverup-black.jpg"class="product-image"',
  name: "Women's Chiffon Beachwear Cover Up - Black",
  rating: {
    stars: 45,
    count: 235
  },
  priceCents: 2070
}, {
  image: 'imagens/products/round-sunglasses-black.jpg"class="product-image"',
  name: "Round Sunglasses",
  rating: {
    stars: 45,
    count: 30
  },
  priceCents: 1560
}, {
  image: 'imagens/products/women-beach-sandals.jpg"class="product-image"',
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 45,
      count: 562
    },
    priceCents: 249
}, {
  image: 'imagens/products/blackout-curtain-set-beige.webp"class="product-image"',
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 45,
      count: 232
    },
    priceCents: 4599,
  },
  {
    image: 'imagens/products/men-slim-fit-summer-shorts-gray.jpg"class="product-image"',
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 40,
      count: 160
    },
    priceCents: 1699,
  },
  {
    image: 'imagens/products/electric-glass-and-steel-hot-water-kettle.webp"class="product-image"',
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 50,
      count: 846
    },
    priceCents: 3074,
  },
  {
    image: 'imagens/products/facial-tissue-2-ply-18-boxes.jpg"class="product-image"',
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 40,
      count: 99
    },
    priceCents: 2374,
  },
  {
    image: 'imagens/products/straw-sunhat.webp"class="product-image"',
    name: "Straw Lifeguard Sun Hat",
    rating: {
      stars: 40,
      count: 215
    },
    priceCents: 2200,
  },
  {
    image: 'imagens/products/sky-flower-stud-earrings.webp"class="product-image"',
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 45,
      count: 52
    },
    priceCents: 1799,
  },
  {
    image: 'imagens/products/women-stretch-popover-hoodie-black.jpg"class="product-image"',
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 45,
      count: 2465
    },
    priceCents: 1374,
  },
  {
    image: 'imagens/products/bathroom-rug.jpg"class="product-image"',
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: 45,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: 'imagens/products/women-knit-ballet-flat-black.jpg"class="product-image"',
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: 40,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: 'imagens/products/men-golf-polo-t-shirt-blue.jpg"class="product-image"',
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 45,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: 'imagens/products/trash-can-with-foot-pedal-50-liter.jpg"class="product-image"',
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: 45,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: 'imagens/products/duvet-cover-set-blue-twin.jpg"class="product-image"',
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: 40,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: 'imagens/products/women-chunky-beanie-gray.webp"class="product-image"',
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 50,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: 'imagens/products/men-chino-pants-beige.jpg"class="product-image"',
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 45,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: 'imagens/products/men-athletic-shoes-green.jpg"class="product-image"',
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 40,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: 'imagens/products/men-navigator-sunglasses-brown.jpg"class="product-image"',
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 35,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: 'imagens/products/non-stick-cooking-set-15-pieces.webp"class="product-image"',
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 45,
      count: 511
    },
    priceCents: 6797,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: 'imagens/products/vanity-mirror-silver.jpg"class="product-image"',
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: 45,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: 'imagens/products/women-french-terry-fleece-jogger-camo.jpg"class="product-image"',
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 45,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: 'imagens/products/double-elongated-twist-french-wire-earrings.webp"class="product-image"',
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 45,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: 'imagens/products/round-airtight-food-storage-containers.jpg"class="product-image"',
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: 40,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: 'imagens/products/coffeemaker-with-glass-carafe-black.jpg"class="product-image"',
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 45,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: 'imagens/products/blackout-curtains-black.jpg"class="product-image"',
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 45,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: 'imagens/products/cotton-bath-towels-teal.webp"class="product-image"',
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: 45,
      count: 93
    },
    priceCents: 2110,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: 'imagens/products/knit-athletic-sneakers-pink.webp"class="product-image"',
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 40,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: 'imagens/products/countertop-blender-64-oz.jpg"class="product-image"',
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 40,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: 'imagens/products/floral-mixing-bowl-set.jpg"class="product-image"',
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 50,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: 'imagens/products/kitchen-paper-towels-30-pack.jpg"class="product-image"',
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: 45,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: 'imagens/products/men-cozy-fleece-zip-up-hoodie-red.jpg"class="product-image"',
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 45,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  }, {
    image: 'imagens/products/umbrella.jpg"class="product-image"',
    name: 'Black Umbrella',
    rating: {
      stars: 25,
      count: 3
    },
    priceCents: 1200
  }
];