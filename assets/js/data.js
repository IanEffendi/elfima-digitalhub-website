// Sample Data - LocalStorage Management
const DATA_KEY = 'elfima_data';

// Default Data
defaultData = {
    products: [
        {
            id: 1,
            name: 'Website Professional',
            price: 5000000,
            category: 'website',
            description: 'Website profesional dengan desain custom',
            status: 'active'
        },
        {
            id: 2,
            name: 'E-Commerce Store',
            price: 8000000,
            category: 'website',
            description: 'Toko online lengkap dengan payment gateway',
            status: 'active'
        },
        {
            id: 3,
            name: 'Mobile App - iOS',
            price: 12000000,
            category: 'app',
            description: 'Aplikasi mobile native untuk iOS',
            status: 'active'
        },
        {
            id: 4,
            name: 'Mobile App - Android',
            price: 12000000,
            category: 'app',
            description: 'Aplikasi mobile native untuk Android',
            status: 'active'
        },
        {
            id: 5,
            name: 'Digital Marketing Package',
            price: 3000000,
            category: 'marketing',
            description: 'Paket marketing digital lengkap',
            status: 'active'
        }
    ],
    services: [
        {
            id: 1,
            name: 'Kursus Online',
            icon: '🎓',
            description: 'Materi berkualitas dengan instruktur berpengalaman',
            details: ['Akses seumur hidup', 'Sertifikat resmi', 'Support komunitas']
        },
        {
            id: 2,
            name: 'Konsultasi IT',
            icon: '💻',
            description: 'Strategi digital untuk pertumbuhan bisnis',
            details: ['Analisis kebutuhan', 'Rekomendasi solusi', 'Implementasi support']
        },
        {
            id: 3,
            name: 'Web Development',
            icon: '🌐',
            description: 'Website modern dan responsif untuk bisnis Anda',
            details: ['Custom design', 'SEO optimized', 'Mobile friendly']
        },
        {
            id: 4,
            name: 'Mobile App',
            icon: '📱',
            description: 'Aplikasi mobile profesional untuk iOS dan Android',
            details: ['User-friendly interface', 'High performance', 'Regular updates']
        }
    ],
    bundles: [
        {
            id: 1,
            name: 'Starter Bundle',
            description: 'Paket lengkap untuk startup dan UMKM',
            normalPrice: 10000000,
            bundlePrice: 7500000,
            items: ['Website Professional', 'Domain 1 Tahun', 'SSL Certificate']
        },
        {
            id: 2,
            name: 'Growth Bundle',
            description: 'Paket untuk bisnis yang ingin berkembang',
            normalPrice: 18000000,
            bundlePrice: 12600000,
            items: ['Website + E-Commerce', 'Digital Marketing', 'Mobile App']
        },
        {
            id: 3,
            name: 'Enterprise Bundle',
            description: 'Solusi lengkap untuk perusahaan besar',
            normalPrice: 30000000,
            bundlePrice: 18000000,
            items: ['Website', 'Mobile App', 'Konsultasi IT', 'Digital Marketing']
        }
    ],
    messages: []
};

// Initialize Data
function initializeData() {
    if (!localStorage.getItem(DATA_KEY)) {
        localStorage.setItem(DATA_KEY, JSON.stringify(defaultData));
    }
}

// Get All Data
function getAllData() {
    initializeData();
    return JSON.parse(localStorage.getItem(DATA_KEY)) || defaultData;
}

// Get Products
function getProducts() {
    return getAllData().products;
}

// Get Services
function getServices() {
    return getAllData().services;
}

// Get Bundles
function getBundles() {
    return getAllData().bundles;
}

// Get Messages
function getMessages() {
    return getAllData().messages;
}

// Save Data
function saveData(newData) {
    localStorage.setItem(DATA_KEY, JSON.stringify(newData));
}

// Add Product
function addProduct(product) {
    const data = getAllData();
    product.id = Math.max(...data.products.map(p => p.id), 0) + 1;
    data.products.push(product);
    saveData(data);
    return product;
}

// Update Product
function updateProduct(id, product) {
    const data = getAllData();
    const index = data.products.findIndex(p => p.id === id);
    if (index !== -1) {
        data.products[index] = { ...data.products[index], ...product };
        saveData(data);
        return data.products[index];
    }
    return null;
}

// Delete Product
function deleteProduct(id) {
    const data = getAllData();
    data.products = data.products.filter(p => p.id !== id);
    saveData(data);
}

// Add Service
function addService(service) {
    const data = getAllData();
    service.id = Math.max(...data.services.map(s => s.id), 0) + 1;
    data.services.push(service);
    saveData(data);
    return service;
}

// Update Service
function updateService(id, service) {
    const data = getAllData();
    const index = data.services.findIndex(s => s.id === id);
    if (index !== -1) {
        data.services[index] = { ...data.services[index], ...service };
        saveData(data);
        return data.services[index];
    }
    return null;
}

// Delete Service
function deleteService(id) {
    const data = getAllData();
    data.services = data.services.filter(s => s.id !== id);
    saveData(data);
}

// Add Bundle
function addBundle(bundle) {
    const data = getAllData();
    bundle.id = Math.max(...data.bundles.map(b => b.id), 0) + 1;
    data.bundles.push(bundle);
    saveData(data);
    return bundle;
}

// Update Bundle
function updateBundle(id, bundle) {
    const data = getAllData();
    const index = data.bundles.findIndex(b => b.id === id);
    if (index !== -1) {
        data.bundles[index] = { ...data.bundles[index], ...bundle };
        saveData(data);
        return data.bundles[index];
    }
    return null;
}

// Delete Bundle
function deleteBundle(id) {
    const data = getAllData();
    data.bundles = data.bundles.filter(b => b.id !== id);
    saveData(data);
}

// Add Message
function addMessage(message) {
    const data = getAllData();
    message.id = Math.max(...data.messages.map(m => m.id), 0) + 1;
    message.timestamp = new Date().toLocaleString('id-ID');
    data.messages.push(message);
    saveData(data);
    return message;
}

// Delete Message
function deleteMessage(id) {
    const data = getAllData();
    data.messages = data.messages.filter(m => m.id !== id);
    saveData(data);
}

// Initialize on page load
initializeData();