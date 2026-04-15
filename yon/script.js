// ==================== UTILITY FUNCTIONS ====================

/**
 * Format tanggal ke format Indonesia
 */
function formatDate(date) {
    return new Date(date).toLocaleDateString('id-ID');
}

/**
 * Format tanggal dan waktu ke format Indonesia
 */
function formatDateTime(date) {
    return new Date(date).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

/**
 * Validasi email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Debounce function untuk search
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Tampilkan notifikasi
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

/**
 * Generate ID unik
 */
function generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
}

/**
 * Cek role pengguna
 */
function getUserRole() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        return user.role;
    }
    return null;
}

/**
 * Dapatkan data pengguna saat ini
 */
function getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        return JSON.parse(currentUser);
    }
    return null;
}

/**
 * Logout
 */
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// ==================== LOCAL STORAGE FUNCTIONS ====================

/**
 * Simpan user ke localStorage
 */
function saveUser(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingIndex = users.findIndex(u => u.id === user.id);
    
    if (existingIndex > -1) {
        users[existingIndex] = user;
    } else {
        users.push(user);
    }
    
    localStorage.setItem('users', JSON.stringify(users));
}

/**
 * Dapatkan semua pengguna
 */
function getAllUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

/**
 * Dapatkan pengguna berdasarkan email
 */
function getUserByEmail(email) {
    const users = getAllUsers();
    return users.find(u => u.email === email);
}

/**
 * Simpan aset ke localStorage
 */
function saveAsset(asset) {
    const assets = JSON.parse(localStorage.getItem('assets')) || [];
    const existingIndex = assets.findIndex(a => a.id === asset.id);
    
    if (existingIndex > -1) {
        assets[existingIndex] = asset;
    } else {
        assets.push(asset);
    }
    
    localStorage.setItem('assets', JSON.stringify(assets));
}

/**
 * Dapatkan semua aset
 */
function getAllAssets() {
    return JSON.parse(localStorage.getItem('assets')) || [];
}

/**
 * Dapatkan aset berdasarkan ID
 */
function getAssetById(assetId) {
    const assets = getAllAssets();
    return assets.find(a => a.id === assetId);
}

/**
 * Hapus aset
 */
function deleteAsset(assetId) {
    let assets = JSON.parse(localStorage.getItem('assets')) || [];
    assets = assets.filter(a => a.id !== assetId);
    localStorage.setItem('assets', JSON.stringify(assets));
}

// ==================== VALIDATION FUNCTIONS ====================

/**
 * Validasi password
 */
function isValidPassword(password) {
    return password.length >= 6;
}

/**
 * Validasi nama
 */
function isValidName(name) {
    return name.trim().length >= 3;
}

/**
 * Validasi form pengguna
 */
function validateUserForm(name, email, password, confirmPassword) {
    if (!isValidName(name)) {
        return 'Nama minimal 3 karakter';
    }
    
    if (!isValidEmail(email)) {
        return 'Email tidak valid';
    }
    
    if (!isValidPassword(password)) {
        return 'Password minimal 6 karakter';
    }
    
    if (password !== confirmPassword) {
        return 'Password tidak cocok';
    }
    
    return null;
}

// ==================== UI HELPER FUNCTIONS ====================

/**
 * Tampilkan loading spinner
 */
function showLoading(element) {
    const loader = document.createElement('div');
    loader.className = 'loader';
    element.appendChild(loader);
}

/**
 * Sembunyikan loading spinner
 */
function hideLoading(element) {
    const loader = element.querySelector('.loader');
    if (loader) {
        loader.remove();
    }
}

/**
 * Disable button
 */
function disableButton(button) {
    button.disabled = true;
    button.style.opacity = '0.6';
}

/**
 * Enable button
 */
function enableButton(button) {
    button.disabled = false;
    button.style.opacity = '1';
}

/**
 * Update sidebar navigation
 */
function updateNavigation(section) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === section) {
            item.classList.add('active');
        }
    });

    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });

    const sectionElement = document.getElementById(section + '-section');
    if (sectionElement) {
        sectionElement.classList.add('active');
    }
}

// ==================== EXPORT DATA FUNCTIONS ====================

/**
 * Export tabel ke CSV
 */
function exportToCSV(tableId, filename = 'export.csv') {
    const table = document.getElementById(tableId);
    if (!table) return;

    let csv = [];
    const rows = table.querySelectorAll('tr');

    rows.forEach(row => {
        const cols = row.querySelectorAll('td, th');
        let csvRow = [];
        cols.forEach(col => {
            csvRow.push('"' + col.textContent + '"');
        });
        csv.push(csvRow.join(','));
    });

    const csvContent = csv.join('\n');
    const link = document.createElement('a');
    link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
    link.download = filename;
    link.click();
}

/**
 * Print elemen
 */
function printElement(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('<link rel="stylesheet" href="style.css">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(element.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips jika ada
    initializeTooltips();
    
    // Setup global event listeners
    setupGlobalListeners();
});

/**
 * Initialize tooltips
 */
function initializeTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        });

        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

/**
 * Setup global event listeners
 */
function setupGlobalListeners() {
    // Tutup modal ketika klik di luar
    document.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Prevent form submission on Enter key (kecuali di textarea)
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
            const form = event.target.closest('form');
            if (form) {
                event.preventDefault();
                form.dispatchEvent(new Event('submit'));
            }
        }
    });
}

// ==================== HELPER FOR TABLES ====================

/**
 * Sort tabel berdasarkan column
 */
function sortTable(tableId, columnIndex) {
    const table = document.getElementById(tableId);
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();

        if (!isNaN(aValue) && !isNaN(bValue)) {
            return aValue - bValue;
        }

        return aValue.localeCompare(bValue);
    });

    rows.forEach(row => tbody.appendChild(row));
}

/**
 * Filter tabel based on search
 */
function filterTable(tableId, searchValue, columnIndex = -1) {
    const table = document.getElementById(tableId);
    const rows = table.querySelectorAll('tbody tr');
    const searchTerm = searchValue.toLowerCase();

    rows.forEach(row => {
        let found = false;

        if (columnIndex === -1) {
            // Search semua column
            found = row.textContent.toLowerCase().includes(searchTerm);
        } else {
            // Search spesifik column
            found = row.cells[columnIndex]?.textContent.toLowerCase().includes(searchTerm);
        }

        row.style.display = found ? '' : 'none';
    });
}

// ==================== ANIMATION HELPERS ====================

/**
 * Animate element dengan Intersection Observer
 */
function observeElements(selector) {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    elements.forEach(el => observer.observe(el));
}

// ==================== DATE HELPERS ====================

/**
 * Get tanggal kemarin
 */
function getYesterdayDate() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
}

/**
 * Get tanggal besok
 */
function getTomorrowDate() {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
}

/**
 * Check apakah tanggal sudah lewat
 */
function isPastDate(date) {
    return new Date(date) < new Date();
}

/**
 * Hitung selisih hari
 */
function getDaysDifference(date1, date2) {
    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.floor((date2 - date1) / msPerDay);
}
