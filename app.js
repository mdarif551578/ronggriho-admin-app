/**
 * admin-script.js
 *
 * Consolidated script for managing Users, Products, and Orders with Firebase Firestore.
 * Cart functionality has been removed.
 */

// --- Firebase Configuration ---
// IMPORTANT: Replace with your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYxNV1soev0QJ5m8_gz_qykG5a4qBdrLo",
  authDomain: "dhakai-threads.firebaseapp.com",
  projectId: "dhakai-threads",
  storageBucket: "dhakai-threads.firebasestorage.app",
  messagingSenderId: "932531070870",
  appId: "1:932531070870:web:87bae6648e3b7bee909fb7",
  measurementId: "G-RLZGCTSV9H",
};

// --- Initialize Firebase ---
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// --- Data Storage for Edit actions ---
let allUsersData = {};
let allOrdersData = {};

// --- User Management ---
// This code will only run on pages with a userForm (e.g., users.html)
if (document.getElementById("userForm")) {
  const userForm = document.getElementById("userForm");
  const usersTableBody = document.getElementById("usersTableBody");
  const cancelButton = document.getElementById("cancelButton");

  // Display Users
  db.collection("users").onSnapshot((querySnapshot) => {
    usersTableBody.innerHTML = "";
    allUsersData = {}; // Clear previous data
    querySnapshot.forEach((doc) => {
      const user = doc.data();
      const createdAt = user.createdAt ?
        new Date(user.createdAt.seconds * 1000).toLocaleString() :
        "N/A";
      allUsersData[doc.id] = { id: doc.id, ...user };
      const row = `<tr>
          <td class="px-6 py-4">${doc.id}</td>
          <td class="px-6 py-4">${user.displayName || ""}</td>
          <td class="px-6 py-4">${user.email || ""}</td>
          <td class="px-6 py-4">${user.phone || ""}</td>
          <td class="px-6 py-4">${user.role || ""}</td>
          <td class="px-6 py-4">${createdAt}</td>
          <td class="px-6 py-4 text-right text-sm font-semibold flex space-x-2">
              <button onclick="editUser('${
                doc.id
              }')" class="text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-sm px-3 py-1.5">Edit</button>
              <button onclick="deleteUser('${
                doc.id
              }')" class="text-white bg-red-700 hover:bg-red-800 font-semibold rounded-lg text-sm px-3 py-1.5">Delete</button>
          </td>
        </tr>`;
      usersTableBody.innerHTML += row;
    });
  });

  // Handle Form Submit
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userId = document.getElementById("userId").value;
    const userData = {
      displayName: document.getElementById("displayName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      role: document.getElementById("role").value,
    };

    if (userId) {
      db.collection("users").doc(userId).update(userData).then(cancelEdit).catch(console.error);
    } else {
      userData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      db.collection("users").add(userData).then(() => userForm.reset()).catch(console.error);
    }
  });

  cancelButton.addEventListener("click", cancelEdit);
}

function editUser(id) {
  const user = allUsersData[id];
  if (!user) return;
  document.getElementById("formTitle").innerText = "Edit User";
  document.getElementById("submitButton").innerText = "Update User";
  document.getElementById("cancelButton").style.display = "inline";
  document.getElementById("userId").value = user.id;
  document.getElementById("displayName").value = user.displayName || "";
  document.getElementById("email").value = user.email || "";
  document.getElementById("phone").value = user.phone || "";
  document.getElementById("role").value = user.role || "customer";
  window.scrollTo(0, 0);
}

function cancelEdit() {
  document.getElementById("formTitle").innerText = "Add User";
  document.getElementById("submitButton").innerText = "Add User";
  document.getElementById("cancelButton").style.display = "none";
  document.getElementById("userForm").reset();
  document.getElementById("userId").value = "";
}

function deleteUser(id) {
  if (confirm("Are you sure you want to delete this user?")) {
    db.collection("users").doc(id).delete();
  }
}

// --- Product Management ---
// This code will only run on pages with a productForm (e.g., products.html)
if (document.getElementById("productForm")) {
  const productForm = document.getElementById("productForm");
  const productsAccordion = document.getElementById("productsAccordion");
  const addReviewButton = document.getElementById("addReviewButton");
  const reviewsContainer = document.getElementById("reviewsContainer");

  addReviewButton.addEventListener("click", () => {
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review-entry", "flex", "space-x-2", "items-center", "mb-2");
    reviewDiv.innerHTML = `
        <input type="text" placeholder="User" class="review-user flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
        <textarea placeholder="Review Text" class="review-text flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"></textarea>
        <button type="button" class="remove-review text-slate-700 bg-red-700 hover:bg-red-800 font-semibold rounded-lg text-sm px-2 py-1">Remove</button>
      `;
    reviewsContainer.insertBefore(reviewDiv, addReviewButton);
    reviewDiv.querySelector(".remove-review").addEventListener("click", () => reviewDiv.remove());
  });

  db.collection("products").orderBy("createdAt", "desc").onSnapshot((querySnapshot) => {
    productsAccordion.innerHTML = "";
    if (querySnapshot.empty) {
      productsAccordion.innerHTML = `<p class="text-gray-500">No products found.</p>`;
      return;
    }
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      let stockClass = "stock-in", stockText = `${product.stock} in Stock`;
      if (product.stock === 0) {
        stockClass = "stock-out"; stockText = "Out of Stock";
      } else if (product.stock <= 10) {
        stockClass = "stock-low"; stockText = `Low Stock (${product.stock})`;
      }
      const imagesHTML = product.images?.map(url => `<a href="${url}" target="_blank"><img src="${url}" class="w-24 h-24 object-cover rounded shadow-md inline-block mr-2 mb-2"></a>`).join("") || '<p class="text-sm">No images.</p>';
      const reviewsHTML = product.reviews?.map(r => `<div class="border-t pt-2 mt-2"><b>${r.user}:</b> <span>${r.text}</span></div>`).join("") || '<p class="text-sm">No reviews.</p>';

      const productItem = document.createElement("div");
      productItem.className = "accordion-item rounded-lg overflow-hidden";
      productItem.setAttribute("data-id", doc.id);
      productItem.innerHTML = `
            <div class="accordion-header"><div class="flex-grow"><h3 class="font-bold text-lg">${product.name || ""}</h3><div class="flex items-center space-x-4 text-sm mt-1"><span>ID: ${doc.id}</span><span class="font-semibold">৳${(product.price || 0).toFixed(2)}</span><span><span class="stock-indicator ${stockClass}"></span>${stockText}</span><span>Category: ${Array.isArray(product.category) ? product.category.join(", ") : "N/A"}</span><span class="font-semibold">Shipping: ৳${(product.shippingFee || 0).toFixed(2)}</span></div></div><div class="flex items-center space-x-2"><button data-action="edit" class="text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg text-sm px-3 py-1.5">Edit</button><button data-action="delete" class="text-white bg-red-600 hover:bg-red-700 font-semibold rounded-lg text-sm px-3 py-1.5">Delete</button><svg class="w-6 h-6 accordion-arrow text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></div>
            <div class="accordion-content"><div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6"><div class="md:col-span-2"><h4 class="font-semibold mb-2">Description</h4><p class="text-sm mb-4">${product.description || ""}</p><h4 class="font-semibold mb-2">Long Description</h4><p class="text-sm">${product.longDescription || ""}</p></div><div><h4 class="font-semibold mb-2">Details</h4><ul class="text-sm list-disc list-inside space-y-1"><li><b>Tags:</b> ${product.tags?.join(", ") || "None"}</li><li><b>Sizes:</b> ${product.sizes?.join(", ") || "None"}</li><li><b>Colors:</b> ${product.colors?.join(", ") || "None"}</li><li><b>Related IDs:</b> ${product.relatedProductIds?.join(", ") || "None"}</li></ul></div><div class="md:col-span-3"><h4 class="font-semibold mb-2 mt-4">Images</h4><div>${imagesHTML}</div></div><div class="md:col-span-3"><h4 class="font-semibold mb-2 mt-4">Reviews</h4><div class="text-sm">${reviewsHTML}</div></div></div></div>`;
      productItem.productData = { id: doc.id, ...product };
      productsAccordion.appendChild(productItem);
    });
  });

  productsAccordion.addEventListener("click", (e) => {
    const actionTarget = e.target.closest("button[data-action]");
    const productItem = e.target.closest(".accordion-item");

    if (actionTarget && productItem) {
      const action = actionTarget.getAttribute("data-action");
      if (action === "edit") {
        editProduct(productItem.productData);
      } else if (action === "delete") {
        deleteProduct(productItem.dataset.id);
      }
      return;
    }

    const header = e.target.closest(".accordion-header");
    if (header) {
      header.classList.toggle("open");
      header.nextElementSibling.classList.toggle("open");
    }
  });

  productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const productId = document.getElementById("productId").value;
    const reviews = Array.from(document.querySelectorAll(".review-entry")).map(entry => ({ user: entry.querySelector(".review-user").value.trim(), text: entry.querySelector(".review-text").value.trim() })).filter(r => r.user && r.text);
    const getCheckboxValues = (name) => Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);

    const productData = {
      name: document.getElementById("name").value,
      slug: document.getElementById("slug").value,
      description: document.getElementById("description").value,
      longDescription: document.getElementById("longDescription").value,
      price: parseFloat(document.getElementById("price").value),
      discountPrice: parseFloat(document.getElementById("discountPrice").value) || null,
      stock: parseInt(document.getElementById("stock").value),
      shippingFee: parseFloat(document.getElementById("shippingFee").value) || 0,
      category: getCheckboxValues("category"),
      tags: document.getElementById("tags").value.split(",").map(t => t.trim()).filter(Boolean),
      images: document.getElementById("images").value.split(",").map(t => t.trim()).filter(Boolean),
      sizes: getCheckboxValues("size"),
      colors: getCheckboxValues("color"),
      relatedProductIds: document.getElementById("relatedProductIds").value.split(",").map(t => t.trim()).filter(Boolean),
      isFeatured: document.getElementById("isFeatured").checked,
      isFlashSale: document.getElementById("isFlashSale").checked,
      reviews: reviews,
    };

    if (productId) {
      db.collection("products").doc(productId).update(productData).then(cancelEditProduct);
    } else {
      productData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      db.collection("products").add(productData).then(cancelEditProduct);
    }
  });

  document.getElementById("cancelButton").addEventListener("click", cancelEditProduct);
}

function editProduct(product) {
  const setCheckboxValues = (name, values) => {
    document.querySelectorAll(`input[name="${name}"]`).forEach(cb => cb.checked = false);
    if (Array.isArray(values)) {
      values.forEach(value => {
        const cb = document.querySelector(`input[name="${name}"][value="${value}"]`);
        if (cb) cb.checked = true;
      });
    }
  };

  document.getElementById("formTitle").innerText = "Edit Product";
  document.getElementById("submitButton").innerText = "Update Product";
  document.getElementById("cancelButton").style.display = "inline";
  document.getElementById("productId").value = product.id;
  document.getElementById("name").value = product.name || "";
  document.getElementById("slug").value = product.slug || "";
  document.getElementById("description").value = product.description || "";
  document.getElementById("longDescription").value = product.longDescription || "";
  document.getElementById("price").value = product.price || 0;
  document.getElementById("discountPrice").value = product.discountPrice || "";
  document.getElementById("stock").value = product.stock || 0;
  document.getElementById("shippingFee").value = product.shippingFee || 0;
  document.getElementById("tags").value = product.tags?.join(", ") || "";
  document.getElementById("images").value = product.images?.join(", ") || "";
  document.getElementById("relatedProductIds").value = product.relatedProductIds?.join(", ") || "";
  document.getElementById("isFeatured").checked = product.isFeatured || false;
  document.getElementById("isFlashSale").checked = product.isFlashSale || false;

  setCheckboxValues("category", product.category);
  setCheckboxValues("size", product.sizes);
  setCheckboxValues("color", product.colors);

  const reviewsContainer = document.getElementById("reviewsContainer");
  const addReviewButton = document.getElementById("addReviewButton");
  document.querySelectorAll(".review-entry").forEach(el => el.remove());
  if (Array.isArray(product.reviews)) {
    product.reviews.forEach(review => {
      const reviewDiv = document.createElement("div");
      reviewDiv.className = "review-entry flex space-x-2 items-center mb-2";
      reviewDiv.innerHTML = `<input type="text" value="${review.user}" class="review-user flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"><textarea class="review-text flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600">${review.text}</textarea><button type="button" class="remove-review text-slate-700 bg-red-700 hover:bg-red-800 font-semibold rounded-lg text-sm px-2 py-1">Remove</button>`;
      reviewsContainer.insertBefore(reviewDiv, addReviewButton);
      reviewDiv.querySelector(".remove-review").addEventListener("click", () => reviewDiv.remove());
    });
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function cancelEditProduct() {
  document.getElementById("formTitle").innerText = "Add Product";
  document.getElementById("submitButton").innerText = "Add Product";
  document.getElementById("cancelButton").style.display = "none";
  document.getElementById("productForm").reset();
  document.getElementById("productId").value = "";
  document.querySelectorAll(".review-entry").forEach(el => el.remove());
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
}

function deleteProduct(id) {
  if (confirm("Are you sure you want to delete this product?")) {
    db.collection("products").doc(id).delete();
  }
}

// --- Order Management ---
if (document.getElementById("orderForm")) {
  const orderForm = document.getElementById("orderForm");
  const ordersTableBody = document.getElementById("ordersTableBody");

  db.collection("orders").onSnapshot((querySnapshot) => {
    ordersTableBody.innerHTML = "";
    allOrdersData = {};
    querySnapshot.forEach((doc) => {
      const order = doc.data();
      const createdAt = order.createdAt ? new Date(order.createdAt.seconds * 1000).toLocaleString() : "N/A";
      const itemsDisplay = Array.isArray(order.items) ? order.items.map(item => `ID: ${item.productId}, Qty: ${item.quantity}, Price: ${item.price}`).join("<br>") : "No items";
      allOrdersData[doc.id] = { id: doc.id, ...order };
      const row = `<tr class="text-sm">
          <td class="px-6 py-4">${doc.id}</td><td class="px-6 py-4">${order.uid || ""}</td><td class="px-6 py-4">${itemsDisplay}</td><td class="px-6 py-4">৳${order.total || 0}</td><td class="px-6 py-4">${order.status || ""}</td><td class="px-6 py-4">${order.shippingFullName || ""}</td><td class="px-6 py-4">${order.shippingAddress || ""}</td><td class="px-6 py-4">${order.shippingCity || ""}</td><td class="px-6 py-4">${order.shippingDistrict || ""}</td><td class="px-6 py-4">${order.shippingPhone || ""}</td><td class="px-6 py-4">${order.paymentMethod || ""}</td><td class="px-6 py-4">${order.paymentStatus || ""}</td><td class="px-6 py-4">${createdAt}</td>
          <td class="px-6 py-4 text-right text-sm font-semibold flex flex-col space-y-2">
              <button onclick='editOrder("${doc.id}")' class="text-slate-700 bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-sm px-3 py-1.5">Edit</button>
              <button onclick="deleteOrder('${doc.id}')" class="text-slate-700 bg-red-700 hover:bg-red-800 font-semibold rounded-lg text-sm px-3 py-1.5">Delete</button>
          </td>
        </tr>`;
      ordersTableBody.innerHTML += row;
    });
  });

  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderId = document.getElementById("orderId").value;
    const itemsArray = document.getElementById("items").value.split(",").map(itemStr => {
      const parts = itemStr.split(":");
      return { productId: parts[0], quantity: parseInt(parts[1], 10) || 1, price: parseFloat(parts[2]) || 0 };
    });
    const orderData = {
      items: itemsArray,
      total: parseFloat(document.getElementById("total").value),
      status: document.getElementById("status").value,
      shippingFullName: document.getElementById("shippingFullName").value,
      shippingAddress: document.getElementById("shippingAddress").value,
      shippingCity: document.getElementById("shippingCity").value,
      shippingDistrict: document.getElementById("shippingDistrict").value,
      shippingPhone: document.getElementById("shippingPhone").value,
      paymentMethod: document.getElementById("paymentMethod").value,
      paymentStatus: document.getElementById("paymentStatus").value,
    };
    if (orderId) {
      db.collection("orders").doc(orderId).update(orderData).then(cancelEditOrder);
    }
  });

  document.getElementById("cancelButton").addEventListener("click", cancelEditOrder);
}

function editOrder(id) {
  const order = allOrdersData[id];
  if (!order) return;
  document.getElementById("updateFormContainer").style.display = "block";
  document.getElementById("orderId").value = order.id;
  document.getElementById("uid").value = order.uid || "";
  document.getElementById("items").value = Array.isArray(order.items) ? order.items.map(i => `${i.productId}:${i.quantity}:${i.price}`).join(",") : "";
  document.getElementById("total").value = order.total || 0;
  document.getElementById("status").value = order.status || "pending";
  document.getElementById("shippingFullName").value = order.shippingFullName || "";
  document.getElementById("shippingAddress").value = order.shippingAddress || "";
  document.getElementById("shippingCity").value = order.shippingCity || "";
  document.getElementById("shippingDistrict").value = order.shippingDistrict || "";
  document.getElementById("shippingPhone").value = order.shippingPhone || "";
  document.getElementById("paymentMethod").value = order.paymentMethod || "cash";
  document.getElementById("paymentStatus").value = order.paymentStatus || "pending";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function cancelEditOrder() {
  document.getElementById("updateFormContainer").style.display = "none";
  document.getElementById("orderForm").reset();
  document.getElementById("orderId").value = "";
}

function deleteOrder(id) {
  if (confirm("Are you sure you want to delete this order?")) {
    db.collection("orders").doc(id).delete();
  }
}