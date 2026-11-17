// Data Dummy Produk Pastelicious Terbaru
const products = [
    {
        id: 1,
        name: "Pastel Bihun",
        price: "Rp 5.000",
        desc: "Isian bihun jagung yang lembut dengan bumbu rempah gurih.",
        icon: "🍜"
    },
    {
        id: 2,
        name: "Pastel Sayur",
        price: "Rp 5.500",
        desc: "Kombinasi sayuran segar (wortel, kentang, buncis) yang manis dan renyah.",
        icon: "🥕"
    },
    {
        id: 3,
        name: "Pastel Sayur Telor",
        price: "Rp 7.000",
        desc: "Pastel sayur spesial dengan tambahan setengah butir telur rebus di dalamnya.",
        icon: "🥚"
    },
    {
        id: 4,
        name: "Pastel Sayur Ayam Suwir",
        price: "Rp 8.000",
        desc: "Perpaduan sayur segar dan ayam suwir berbumbu yang melimpah.",
        icon: "🍗"
    }
];

// Fungsi Render Produk
function renderProducts() {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-icon">${product.icon}</div>
            <h3>${product.name}</h3>
            <div class="price">${product.price}</div>
            <p>${product.desc}</p>
        `;
        productList.appendChild(card);
    });
}

// Panggil fungsi render saat halaman dimuat
document.addEventListener('DOMContentLoaded', renderProducts);

// ==========================================
// LOGIKA UNTUK POPUP MODAL
// ==========================================
const modal = document.getElementById("menu-modal");
const openBtn = document.getElementById("open-menu-btn");
const closeBtn = document.querySelector(".close-btn");

// Buka Modal saat tombol "Lihat Menu Kami" di-klik
openBtn.addEventListener("click", function(e) {
    e.preventDefault(); // Mencegah link lompat ke atas
    modal.classList.add("show");
});

// Tutup Modal saat tombol (X) di-klik
closeBtn.addEventListener("click", function() {
    modal.classList.remove("show");
});

// Tutup Modal saat area gelap di luar kotak di-klik
window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});