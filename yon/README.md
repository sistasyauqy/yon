# 📦 Sistem Manajemen Aset - AssetHub

Sebuah aplikasi web modern untuk mengelola aset organisasi dengan sistem login, registrasi, dan role-based dashboard.

## 🎯 Fitur Utama

### 1. **Autentikasi & Registrasi**
- ✅ Halaman Login yang menarik
- ✅ Halaman Registrasi dengan validasi
- ✅ Sistem role (User dan Admin)
- ✅ Redirect otomatis berdasarkan role
- ✅ Session management menggunakan localStorage

### 2. **Dashboard User**
- 📊 Statistik aset (Total, Tersedia, Dipinjam)
- 📋 Daftar aset yang bisa dipinjam
- 🎯 Riwayat peminjaman pribadi
- 👤 Profil pengguna
- 🔍 Pencarian dan filter aset

### 3. **Dashboard Admin**
- 📊 Dashboard dengan statistik lengkap
- 💼 Kelola Aset (Tambah, Edit, Hapus)
- 📋 Monitor semua peminjaman
- 👥 Kelola pengguna
- 📈 Grafik statistik aset

### 4. **Fitur Peminjaman**
- Peminjaman aset dengan tanggal kembali
- Pengembalian aset
- Tracking status peminjaman
- Validasi ketersediaan aset

## 🚀 Cara Menggunakan

### Akun Demo
Aplikasi dilengkapi dengan 2 akun demo:

**Admin:**
- Email: `admin@example.com`
- Password: `admin123`

**User:**
- Email: `user@example.com`
- Password: `user123`

### Langkah Pertama
1. Buka file `index.html` di browser
2. Masuk menggunakan akun demo atau buat akun baru
3. Sesuai dengan role, Anda akan diarahkan ke dashboard masing-masing

## 📁 Struktur File

```
project/
├── index.html              # Halaman Login
├── register.html           # Halaman Registrasi
├── dashboard-user.html     # Dashboard User
├── dashboard-admin.html    # Dashboard Admin
├── style.css              # Styling utama
├── script.js              # Utility functions
└── README.md              # File ini
```

## 🎨 Desain & UI

- **Modern & Responsive**: Berfungsi sempurna di desktop, tablet, dan mobile
- **Gradient Colors**: Penggunaan gradient untuk desain yang menarik
- **Smooth Animations**: Transisi dan animasi yang halus
- **Dark Sidebar**: Sidebar gelap dengan warna-warna cerah untuk navigasi
- **Card-based Layout**: Desain berbasis card untuk pengalaman pengguna yang lebih baik

## 💾 Data Storage

Data disimpan di `localStorage` browser:
- `users` - Daftar pengguna
- `assets` - Daftar aset
- `currentUser` - Session pengguna yang sedang login

## 🔐 Keamanan

**Catatan Penting**: Aplikasi ini menggunakan localStorage untuk demo. Di production:
- ❌ JANGAN simpan password di localStorage
- ❌ JANGAN kirim data sensitif tanpa enkripsi
- ✅ Gunakan backend server untuk autentikasi
- ✅ Implementasikan JWT atau session token
- ✅ Gunakan HTTPS dan enkripsi database

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🎓 Contoh Penggunaan

### Sebagai User Biasa:
1. Login dengan akun user
2. Lihat aset yang tersedia di dashboard
3. Pinjam aset dengan mengisi tanggal pengembalian
4. Kelola peminjaman di section "Peminjaman Saya"
5. Kembalikan aset kapan saja

### Sebagai Admin:
1. Login dengan akun admin
2. Tambah aset baru di Kelola Aset
3. Edit spesifikasi aset
4. Hapus aset jika tidak diperlukan
5. Monitor semua peminjaman
6. Kelola pengguna sistem

## 🔧 Teknologi yang Digunakan

- **HTML5** - Struktur markup
- **CSS3** - Styling dengan flexbox dan grid
- **Vanilla JavaScript** - Logika aplikasi
- **LocalStorage API** - Penyimpanan data
- **Chart.js** (admin) - Visualisasi data

## 📈 Fitur Tambahan di Admin

- **Pie Chart**: Visualisasi distribusi aset berdasarkan kategori
- **Statistik Real-time**: Update otomatis saat ada perubahan data
- **Force Return**: Admin bisa memaksa pengembalian aset
- **Bulk Actions**: (Dapat ditambahkan di versi mendatang)

## ⌨️ Keyboard Shortcuts (Future Feature)

- `Ctrl + L` - Logout
- `Ctrl + K` - Search
- `Ctrl + N` - Tambah aset baru (Admin)

## 🐛 Known Issues & Limitations

1. Data hilang jika browser cache dihapus
2. Tidak ada enkripsi password (demo only)
3. Tidak ada notifikasi real-time
4. Tidak ada export/import data

## 🚦 Roadmap Fitur

- [ ] Backend API integration
- [ ] Real database (MongoDB/PostgreSQL)
- [ ] Email notifications
- [ ] QR Code untuk aset tracking
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Two-factor authentication
- [ ] Audit log
- [ ] Advanced reporting

## 📞 Support

Untuk pertanyaan atau laporan bug, silakan hubungi tim development.

## 📄 License

Proyek ini dibuat untuk keperluan edukasi dan demo.

---

**Dibuat dengan ❤️ untuk manajemen aset yang lebih baik**
