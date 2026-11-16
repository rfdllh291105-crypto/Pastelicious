// Data Dummy Produk Pastelicious
const products = [
    {
        id: 1,
        name: "Pastel Ayam Spesial",
        price: "Rp 5.000",
        desc: "Isian ayam cincang bumbu rempah yang gurih dan melimpah.",
        icon: "🥟"
    },
    {
        id: 2,
        name: "Pastel Daging Sapi",
        price: "Rp 7.000",
        desc: "Daging sapi pilihan yang empuk dengan racikan bumbu rahasia.",
        icon: "🥩"
    },
    {
        id: 3,
        name: "Pastel Keju Lumer",
        price: "Rp 6.000",
        desc: "Perpaduan keju mozarella lumer dengan kulit pastel yang renyah.",
        icon: "🧀"
    },
    {
        id: 4,
        name: "Pastel Cokelat Kacang",
        price: "Rp 6.500",
        desc: "Manisnya cokelat berpadu dengan gurihnya kacang tanah sangrai.",
        icon: "🍫"
    }
];

// Fungsi untuk merender produk ke dalam HTML
function renderProducts() {
    const productList = document.getElementById('product-list');
    
    // Looping data array di atas
    products.forEach(product => {
        // Membuat elemen div untuk card
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Mengisi HTML di dalam card
        card.innerHTML = `
            <div class="product-icon">${product.icon}</div>
            <h3>${product.name}</h3>
            <div class="price">${product.price}</div>
            <p>${product.desc}</p>
        `;
        
        // Memasukkan card ke dalam container
        productList.appendChild(card);
    });
}

// Menjalankan fungsi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', renderProducts);
