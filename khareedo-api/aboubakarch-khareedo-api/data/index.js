const category = [
  {
    id: 1,
    name: 'T-Shirts',
  },
  {
    id: 2,
    name: 'Hoodies',
  },
  {
    id: 3,
    name: 'Jacket',
  },
  {
    id: 4,
    name: 'Shoes',
  },
  {
    id: 5,
    name: 'Bags',
  },
  {
    id: 6,
    name: 'Accessories',
  },
];

const products = [
  {
    id: 1,
    title: 'Polo Shirt',
    img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    price: '$150',
    category: 1,
    rating: 5,
  },
  {
    id: 2,
    title: '705 Black',
    img: 'https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    price: '$80',
    category: 1,
    rating: 2,
  },
  {
    id: 3,
    title: 'Black Hoodie',
    img: 'https://media.istockphoto.com/id/1142211733/photo/front-of-sweatshirt-with-hood-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=inMPwtP-ebqhXD9_A3bHETPkyC37x0rFNSLYgf6rLMM=',
    price: '$290',
    category: 2,
    rating: 3,
  },
  {
    id: 4,
    title: 'Nike Green',
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    price: '$320',
    category: 4,
    rating: 7,
  },
  {
    id: 5,
    title: 'Pack of Six',
    img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    price: '$170',
    category: 1,
    rating: 5,
  },
  {
    id: 6,
    title: 'Solid Blue',
    img: 'https://media.istockphoto.com/id/1319572197/photo/mens-hooded-jacket-for-your-design-mockup-for-print.jpg?s=612x612&w=0&k=20&c=c3n5O6D_gKpiX7zrN-K2wvDBYNuf9VMwUUysBg3TjkU=',
    price: '$210',
    category: 2,
    rating: 4,
  },
  {
    id: 7,
    title: 'Dark Green',
    img: 'https://media.istockphoto.com/id/1142211901/photo/front-of-sweatshirt-with-hood-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=-MrAs2qu2QXsZyHR5loq7ZzX_pl-uy7JfK6KKqWEs6o=',
    price: '$240',
    category: 2,
    rating: 8,
  },
  {
    id: 8,
    title: 'Solid White',
    img: 'https://images.unsplash.com/photo-1593526424177-9c9c7f68d4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    price: '$210',
    category: 1,
    rating: 6,
  },
  {
    id: 9,
    title: 'Maroon Wedges',
    img: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: '$410',
    category: 4,
    rating: 10,
  },
  {
    id: 10,
    title: 'White Jogers',
    img: 'https://media.istockphoto.com/id/695474472/photo/overhead-shot-of-white-sneakers-on-pink-background.jpg?s=612x612&w=0&k=20&c=GzsXYIfYMrZ2ZHXvM_rImCnBJkjZhgTJOxdMPLOJ22s=',
    price: '$190',
    category: 4,
    rating: 7,
  },
  {
    id: 11,
    title: 'High Heels',
    img: 'https://media.istockphoto.com/id/627372978/photo/high-heels-view-from-above.jpg?s=612x612&w=0&k=20&c=2bgND2FvVyHmpdnocK97vN52P7uwT14F6-WNRV1WKKc=',
    price: '$480',
    category: 4,
    rating: 8,
  },
  {
    id: 12,
    title: 'Gray Style',
    img: 'https://media.istockphoto.com/id/514571758/photo/photo-of-gray-hoody-holding-on-wood-background-vertical-blank.jpg?s=612x612&w=0&k=20&c=eglfsRaTE1qdNrdoqtS_r2Hq-htL5ZqcUCGfsNc8NhU=',
    price: '$230',
    category: 2,
    rating: 7,
  },
  {
    id: 13,
    title: 'Minimalist Trench',
    img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=60',
    price: '$520',
    category: 3,
    rating: 9,
  },
  {
    id: 14,
    title: 'Leather Weekend Bag',
    img: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=60',
    price: '$380',
    category: 5,
    rating: 8,
  },
  {
    id: 15,
    title: 'Slate Overshirt',
    img: 'https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?auto=format&fit=crop&w=800&q=60',
    price: '$210',
    category: 1,
    rating: 6,
  },
  {
    id: 16,
    title: 'Midnight Chelsea Boots',
    img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=60',
    price: '$450',
    category: 4,
    rating: 9,
  },
  {
    id: 17,
    title: 'Architectural Watch',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=60',
    price: '$890',
    category: 6,
    rating: 10,
  },
  {
    id: 18,
    title: 'Canvas Tote',
    img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=60',
    price: '$95',
    category: 5,
    rating: 5,
  },
  {
    id: 19,
    title: 'Linen Button-Up',
    img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=60',
    price: '$120',
    category: 1,
    rating: 7,
  },
  {
    id: 20,
    title: 'Graphic Print Tee',
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=60',
    price: '$45',
    category: 1,
    rating: 8,
  },
  {
    id: 21,
    title: 'Oversized Zip Hoodie',
    img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=60',
    price: '$180',
    category: 2,
    rating: 9,
  },
  {
    id: 22,
    title: 'Vintage Pullover',
    img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=60',
    price: '$140',
    category: 2,
    rating: 6,
  },
  {
    id: 23,
    title: 'Denim Trucker Jacket',
    img: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=60',
    price: '$210',
    category: 3,
    rating: 9,
  },
  {
    id: 24,
    title: 'Puffer Coat',
    img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=60',
    price: '$340',
    category: 3,
    rating: 8,
  },
  {
    id: 25,
    title: 'Classic Loafers',
    img: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=60',
    price: '$280',
    category: 4,
    rating: 10,
  },
  {
    id: 26,
    title: 'Chunky Running Shoes',
    img: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=60',
    price: '$190',
    category: 4,
    rating: 7,
  },
  {
    id: 27,
    title: 'Crossbody Leather Bag',
    img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=60',
    price: '$250',
    category: 5,
    rating: 9,
  },
  {
    id: 28,
    title: 'Minimalist Backpack',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=60',
    price: '$160',
    category: 5,
    rating: 8,
  },
  {
    id: 29,
    title: 'Silver Chain Necklace',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=60',
    price: '$85',
    category: 6,
    rating: 7,
  },
  {
    id: 30,
    title: 'Classic Aviator Sunglasses',
    img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=60',
    price: '$130',
    category: 6,
    rating: 9,
  },
  {
    id: 31,
    title: 'Striped Polo',
    img: 'https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?auto=format&fit=crop&w=800&q=60',
    price: '$110',
    category: 1,
    rating: 6,
  },
  {
    id: 32,
    title: 'Fleece Half-Zip',
    img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=60',
    price: '$150',
    category: 2,
    rating: 8,
  },
  {
    id: 33,
    title: 'Windbreaker Jacket',
    img: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=60',
    price: '$190',
    category: 3,
    rating: 7,
  },
  {
    id: 34,
    title: 'Platform Sneakers',
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=60',
    price: '$210',
    category: 4,
    rating: 9,
  },
  {
    id: 35,
    title: 'Duffel Gym Bag',
    img: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=800&q=60',
    price: '$120',
    category: 5,
    rating: 5,
  },
  {
    id: 36,
    title: 'Leather Wallet',
    img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=60',
    price: '$75',
    category: 6,
    rating: 8,
  },
  {
    id: 37,
    title: 'Basic White Tee',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=60',
    price: '$40',
    category: 1,
    rating: 10,
  },
  {
    id: 38,
    title: 'Knit Beanie',
    img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=60',
    price: '$35',
    category: 6,
    rating: 7,
  },
];

const sortProductDescByRating = (numberOfProducts = 18) => {
  const prods = products.sort((a, b) => b.rating - a.rating);
  return prods.slice(0, numberOfProducts);
};

const appendCategoryNames = (bestSeller) => {
  return bestSeller.map((item) => {
    const cat = category.find((cat) => cat.id === item.category);
    return { ...item, category: cat.name };
  });
};

const getBestSeller = () => {
  const bestSeller = sortProductDescByRating();
  return appendCategoryNames(bestSeller);
};

const getBestSellerByCategoryId = (id) => {
  const bestSeller = sortProductDescByRating();
  const prods = bestSeller.filter((item) => item.category.toString() === id);
  return appendCategoryNames(prods);
};

const getProductById = (id) => {
  const product = products.find((item) => item.id.toString() === id);
  const cat = category.find((item) => item.id === product?.category);
  return { ...product, category: cat?.name };
};

module.exports = {
  category,
  products,
  getBestSeller,
  getBestSellerByCategoryId,
  getProductById,
  sortProductDescByRating,
};
