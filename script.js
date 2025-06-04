document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Smartwatch",
      price: 999,
      image: "https://via.placeholder.com/200?text=Smartwatch"
    },
    {
      name: "Bluetooth Speaker",
      price: 1299,
      image: "https://via.placeholder.com/200?text=Speaker"
    },
    {
      name: "Wireless Earbuds",
      price: 1599,
      image: "https://via.placeholder.com/200?text=Earbuds"
    }
  ];

  const productList = document.getElementById("product-list");

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded-lg shadow-md";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded">
      <h3 class="mt-2 text-lg font-medium text-gray-800">${product.name}</h3>
      <p class="text-gray-600">₹${product.price}</p>
      <button class="mt-2 bg-black text-white px-4 py-1 rounded hover:bg-gray-800">Buy</button>
    `;
    productList.appendChild(div);
  });
});

