const CATALOG_ITEMS = [
    //{ id:, name:, desc:, category:, price:, img:, extras:[]}
    // TECNOLÓGICOS
    { id: 1, name: "Carregador Turbo 66W", desc: "Carregador ultra rápido com tecnologia GaN e cabo reforçado.", category: "Tecnológicos", price: 129.90, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80", extras: [{name: "Cabo Extra de 2m", price: 35.00}] },
    { id: 2, name: "Fone Bluetooth TWS", desc: "Fone com cancelamento de ruído ativo e bateria de 24 horas.", category: "Tecnológicos", price: 199.90, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80", extras: [{name: "Case de Silicone", price: 25.00}] },
    { id: 3, name: "Película de Vidro 3D", desc: "Proteção máxima contra quedas e arranhões.", category: "Tecnológicos", price: 29.90, img: "https://images.unsplash.com/photo-1596253399107-ed1c47d856fb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", extras: [{name: "Aplicação na Loja", price: 10.00}] },
    { id: 4, name: "Película de Hidrogel", desc: "Autoreparável, ideal para telas curvas e sensibilidade touch.", category: "Tecnológicos", price: 49.90, img: "https://images.unsplash.com/photo-1629131723732-900ccc9c745c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", extras: [{name: "Aplicação na Loja", price: 10.00}] },
    
    // Jóias
    { id: 5, name: "Anel de Prata 925", desc: "Design minimalista e elegante em prata de lei.", category: "Jóias", price: 89.90, img: "https://images.unsplash.com/photo-1656010280156-fa8c1793c235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", extras: [{name: "Embalar para Presente", price: 15.00}, {name: "Limpa Pratas 30ml", price: 25.00}, {name: "Case almofadada", price: 10.00}] },
    { id: 6, name: "Colar Ponto de Luz", desc: "Delicado colar com pingente de zircônia brilhante.", category: "Jóias", price: 79.90, img: "https://media.istockphoto.com/id/1203787084/pt/foto/elegant-white-gold-necklace-with-diamonds.webp?a=1&b=1&s=612x612&w=0&k=20&c=GN5rjy1vG9xHRnOScN4iprFG7v4ND2812vL_NWVJ010=", extras: [{name: "Embalar para Presente", price: 15.00}, {name: "Case almofadada", price: 10.00}] },
    { id: 7, name: "Pulseira Banhada a Ouro", desc: "Estilo cartier 18k com banho de alta durabilidade.", category: "Jóias", price: 149.90, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80", extras: [{name: "Embalar para Presente", price: 15.00}, {name: "Case almofadada", price: 10.00}] },
    { id: 8, name: "Brinco Argola Ouro 18k", desc: "Argolas clássicas lisas, tamanho médio.", category: "Jóias", price: 119.90, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80", extras: [{name: "Embalar para Presente", price: 15.00}, {name: "Case almofadada", price: 10.00}] },
    
    // ROUPAS
    { id: 9, name: "Camisa de Linho Premium", desc: "Respirável e sofisticada, perfeita para o verão.", category: "Roupas", price: 159.90, img: "https://images.unsplash.com/photo-1713881649391-a1c8ddaf83cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", extras: [{name: "Embalar para Presente", price: 15.00}] },
    { id: 10, name: "Bermuda de Academia", desc: "Tecido dry-fit com bolso invisível para celular.", category: "Roupas", price: 69.90, img: "https://images.unsplash.com/photo-1785355064366-68a094d13651?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", extras: [{name: "Embalar para Presente", price: 15.00}] },
    { id: 11, name: "Camiseta Básica Premium", desc: "100% algodão egípcio, não desbota e não encolhe.", category: "Roupas", price: 89.90, img: "https://images.unsplash.com/photo-1777901513094-f8b4ca262d57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", extras: [{name: "Embalar para Presente", price: 15.00}] },
    { id: 12, name: "Calça Jeans Skinny", desc: "Modelagem justa com bastante elastano para conforto.", category: "Roupas", price: 139.90, img: "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80", extras: [{name: "Acompanhar Cinto de Couro", price: 35.00}, {name: "Embalar para Presente", price: 15.00}] },

    // GELADOS
    { id: 13, name: "Açaí 500ml", desc: "Açaí puro e cremoso, batido na hora.\nProduto deve ser retirado na loja.", category: "Gelados", price: 18.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnv62qTctPZ7-xXSML1t6pzTiQCeSRGx3LfF9IwntPg&s=10", extras: [{name: "Leite em Pó", price: 3.00}, {name: "Leite Condensado", price: 3.50}, {name: "Morango Fresco", price: 4.00}, {name: "Nutella", price: 6.00}] },
    { id: 14, name: "Picolé Artesanal Frutas", desc: "Feito com 100% fruta natural, zero conservantes.", category: "Gelados", price: 6.00, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80", extras: [] },
    { id: 15, name: "Sorvete de Pistache Premium", desc: "Massa artesanal italiana, 2 bolas.", category: "Gelados", price: 24.00, img: "https://images.unsplash.com/photo-1603736029103-dafad0eb0906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", extras: [{name: "Calda Quente de Chocolate", price: 5.00}, {name: "Castanhas Trituradas", price: 4.00}] },
    { id: 16, name: "Geladinho Gourmet Ninho", desc: "Geladinho super cremoso de Leite Ninho com Nutella.", category: "Gelados", price: 8.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGubJAs4JKlBBEwl6r_z1bC86TLq24uriKMDpWpiz5tQ&s=10", extras: [] }
];

const CATEGORIES = ["Todos", "Tecnológicos", "Jóias", "Roupas", "Gelados"];
const ICONS = {
    "Todos": "fa-table-cells-large",
    "Tecnológicos": "fa-mobile-screen",
    "Jóias": "fa-gem",
    "Roupas": "fa-shirt",
    "Gelados": "fa-ice-cream"
};

let cart = [];
let currentProduct = null;
let currentQty = 1;
let selectedExtras = [];

// Formata moeda
const formatMoney = (val) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts('Todos');
});

// Renderizar Menu de Categorias
function renderCategories() {
    const nav = document.getElementById('category-nav');
    nav.innerHTML = CATEGORIES.map(cat => `
        <button onclick="filterCategory('${cat}')" class="category-btn ${cat === 'Todos' ? 'bg-brand-dark text-white' : 'bg-white text-gray-600 border border-2 border-gray-200'} whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <i class="fa-solid ${ICONS[cat]}"></i> ${cat}
        </button>
    `).join('');
}

// Filtro de Categoria
window.filterCategory = (category) => {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.className = btn.innerText.includes(category) 
            ? 'category-btn bg-brand-dark text-white whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold shadow-sm flex items-center gap-2 transition-colors'
            : 'category-btn bg-white text-gray-600 border border-gray-200 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors';
    });
    renderProducts(category);
};

// Renderizar Produtos
function renderProducts(category, container = document.getElementById('products-container'), searchTerm = "") {
    let html = "";
    const renderCard = (item) => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer" onclick="openProductModal(${item.id})">
            <div class="aspect-square bg-gray-100 overflow-hidden relative">
                <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                <span class="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-2.5 py-1 rounded-full text-gray-800 shadow-sm">${item.category}</span>
            </div>
            <div class="p-4">
                <h3 class="font-bold text-gray-900 leading-tight mb-1 truncate">${item.name}</h3>
                <p class="text-xs text-gray-500 line-clamp-1 mb-3">${item.desc}</p>
                <div class="flex items-end justify-between mt-auto">
                    <div>
                        <span class="block text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">A partir de</span>
                        <span class="font-extrabold text-brand-cyan text-lg">${formatMoney(item.price)}</span>
                    </div>
                    <div class="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    `;

    const filteredItems = CATALOG_ITEMS.filter(item => 
        (category === 'Todos' || item.category === category) &&
        (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.desc.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (filteredItems.length === 0) {
        container.innerHTML = `<div class="text-center py-10 text-gray-500">Nenhum produto encontrado.</div>`;
        return;
    }

    if (category === 'Todos' && searchTerm === "") {
        // Agrupar por categorias
        CATEGORIES.filter(c => c !== 'Todos').forEach(cat => {
            const itemsInCat = filteredItems.filter(i => i.category === cat);
            if(itemsInCat.length > 0) {
                html += `
                    <div class="mb-8">
                        <h2 class="text-xl font-extrabold mb-4 flex items-center gap-2 text-brand-dark">
                            <i class="fa-solid ${ICONS[cat]} text-brand-cyan"></i> ${cat}
                        </h2>
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            ${itemsInCat.map(renderCard).join('')}
                        </div>
                    </div>
                `;
            }
        });
    } else {
        html = `<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">${filteredItems.map(renderCard).join('')}</div>`;
    }

    container.innerHTML = html;
}

// Modal Produto
window.openProductModal = (id) => {
    currentProduct = CATALOG_ITEMS.find(i => i.id === id);
    currentQty = 1;
    selectedExtras = [];
    
    document.getElementById('modal-img').src = currentProduct.img;
    document.getElementById('modal-title').innerText = currentProduct.name;
    document.getElementById('modal-desc').innerText = currentProduct.desc;
    document.getElementById('modal-obs').value = '';
    
    const extrasContainer = document.getElementById('modal-extras-container');
    const extrasDiv = document.getElementById('modal-extras');
    
    if(currentProduct.extras && currentProduct.extras.length > 0) {
        extrasContainer.classList.remove('hidden');
        extrasDiv.innerHTML = currentProduct.extras.map((extra, index) => `
            <label class="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                <div class="flex items-center gap-3" class="border-2 border-gray-300">
                    <input type="checkbox" class="custom-checkbox extra-checkbox" data-index="${index}" onchange="updateModalPrice()">
                    <span class="text-sm font-medium text-gray-700">${extra.name}</span>
                </div>
                <span class="text-sm font-bold text-gray-500">+${formatMoney(extra.price)}</span>
            </label>
        `).join('');
    } else {
        extrasContainer.classList.add('hidden');
        extrasDiv.innerHTML = '';
    }

    updateModalPrice();
    document.getElementById('product-modal').classList.remove('hidden');
    document.getElementById('product-modal').classList.add('flex');
    document.body.style.overflow = 'hidden';
};

document.getElementById('close-product').addEventListener('click', () => {
    document.getElementById('product-modal').classList.add('hidden');
    document.getElementById('product-modal').classList.remove('flex');
    document.body.style.overflow = 'auto';
});

// Atualizar Preço Modal
window.updateModalPrice = () => {
    let total = currentProduct.price;
    selectedExtras = [];
    
    document.querySelectorAll('.extra-checkbox:checked').forEach(cb => {
        const index = cb.getAttribute('data-index');
        const extra = currentProduct.extras[index];
        total += extra.price;
        selectedExtras.push(extra);
    });

    total *= currentQty;
    
    document.getElementById('modal-price').innerText = formatMoney(currentProduct.price);
    document.getElementById('modal-qty').innerText = currentQty;
    document.getElementById('modal-total-btn').innerText = formatMoney(total);
};

// Controles de Quantidade
document.getElementById('btn-plus').addEventListener('click', () => { currentQty++; updateModalPrice(); });
document.getElementById('btn-minus').addEventListener('click', () => { if(currentQty > 1) currentQty--; updateModalPrice(); });

// Adicionar ao Carrinho
document.getElementById('btn-add-cart').addEventListener('click', () => {
    const obs = document.getElementById('modal-obs').value;
    let unitPrice = currentProduct.price + selectedExtras.reduce((acc, e) => acc + e.price, 0);
    
    cart.push({
        product: currentProduct,
        qty: currentQty,
        extras: selectedExtras,
        obs: obs,
        unitPrice: unitPrice,
        total: unitPrice * currentQty
    });

    document.getElementById('close-product').click();
    updateCartUI();
});

// Atualizar Interface do Carrinho
function updateCartUI() {
    const cartBar = document.getElementById('cart-bar');
    if (cart.length > 0) {
        cartBar.classList.remove('hidden');
        document.body.classList.add('cart-active');
        
        const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
        const totalValue = cart.reduce((acc, item) => acc + item.total, 0);

        document.getElementById('cart-bar-qty').innerText = totalItems;
        document.getElementById('cart-bar-total').innerText = formatMoney(totalValue);
        
        if(totalItems === 1){
            document.getElementById('cart-bar-text').innerText = " item";
        }else{
            document.getElementById('cart-bar-text').innerText = " itens";
        }
    } else {
        cartBar.classList.add('hidden');
        document.body.classList.remove('cart-active');
    }
}

// Lógica de Busca
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('search-input');
document.getElementById('open-search').addEventListener('click', () => {
    searchModal.classList.remove('hidden');
    searchModal.classList.add('flex');
    searchInput.focus();
    renderProducts('Todos', document.getElementById('search-results'));
});

document.getElementById('close-search').addEventListener('click', () => {
    searchModal.classList.add('hidden');
    searchModal.classList.remove('flex');
    searchInput.value = '';
});

searchInput.addEventListener('input', (e) => {
    renderProducts('Todos', document.getElementById('search-results'), e.target.value);
});

// Lógica do Checkout
const checkoutModal = document.getElementById('checkout-modal');
document.getElementById('open-checkout').addEventListener('click', () => {
    checkoutModal.classList.remove('hidden');
    checkoutModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    const itemsContainer = document.getElementById('checkout-items');
    itemsContainer.innerHTML = cart.map((item, index) => `
        <div class="flex gap-3 relative pb-4 mb-4 border-b border-gray-50 last:border-0 last:mb-0 last:pb-0">
            <img src="${item.product.img}" class="w-16 h-16 rounded-xl object-cover bg-gray-100">
            <div class="flex-1">
                <h4 class="font-bold text-sm text-gray-900 leading-tight">${item.product.name}</h4>
                ${item.extras.length > 0 ? `<p class="text-xs text-gray-500 mt-0.5">+ ${item.extras.map(e => e.name).join(', ')}</p>` : ''}
                ${item.obs ? `<p class="text-xs text-gray-400 italic mt-0.5">Obs: ${item.obs}</p>` : ''}
                <div class="flex justify-between items-center mt-2">
                    <span class="text-xs font-semibold text-gray-600">${item.qty}x ${formatMoney(item.unitPrice)}</span>
                    <span class="font-bold text-brand-cyan">${formatMoney(item.total)}</span>
                </div>
            </div>
            <button onclick="removeCartItem(${index})" class="absolute top-0 right-0 text-gray-300 hover:text-red-500 p-1"><i class="fa-solid fa-trash-can text-sm"></i></button>
        </div>
    `).join('');

    const total = cart.reduce((acc, item) => acc + item.total, 0);
    document.getElementById('checkout-subtotal').innerText = formatMoney(total);
    document.getElementById('checkout-total').innerText = formatMoney(total);
});

window.removeCartItem = (index) => {
    cart.splice(index, 1);
    updateCartUI();
    if(cart.length === 0) {
        document.getElementById('close-checkout').click();
    } else {
        document.getElementById('open-checkout').click(); // Re-render
    }
};

document.getElementById('close-checkout').addEventListener('click', () => {
    checkoutModal.classList.add('hidden');
    checkoutModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
});

// Finalizar no WhatsApp
document.getElementById('btn-send-whatsapp').addEventListener('click', () => {
    const name = document.getElementById('checkout-name').value.trim();
    const payment = document.getElementById('checkout-payment').value;
    
    if(!name) {
        alert("Por favor, preencha o seu nome.");
        return;
    }

    const total = cart.reduce((acc, item) => acc + item.total, 0);
    
    let text = `*Novo Pedido - Escobar Variedades* \n\n*Cliente:* ${name}\n*Pagamento:* ${payment}\n\n*Itens do Pedido:*\n`;
    
    cart.forEach(item => {
        text += `\n> ${item.qty}x *${item.product.name}*`;
        if(item.extras.length > 0) text += `\n   _Adicionais: ${item.extras.map(e => e.name).join(', ')}_`;
        if(item.obs) text += `\n   _Obs: ${item.obs}_`;
        text += `\n   _Valor: ${formatMoney(item.total)}_`;
    });
    
    text += `\n\n*Total a pagar: ${formatMoney(total)}*`;
    
    const encodedText = encodeURIComponent(text);
    const phoneNumber = "5573999644285"; //Número da empresa
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
});