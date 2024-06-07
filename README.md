Fitur Yang Terdapat :
1. Halaman Utama (Daftar Restoran)
   - Menampilkan daftar restoran yang datanya bersumber dari API: restaurant-api.dicoding.dev. Silakan lihat dokumentasinya pada halaman tersebut.
   - Wajib menampilkan nama, gambar, dan minimal salah satu di antara kota, rating, dan/atau deskripsi pada restoran.
   - Ada tautan/CTA yang mengarah ke detail restoran pada setiap item-nya.
   - Hero elemen tetap dipertahankan.
2. Halaman Detail Restoran
   - Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.
   - Ada tombol favorite untuk memasukkan atau menghapus restoran favorit dari database. Penyimpanan ini menggunakan IndexedDB.
3. Halaman Daftar Restoran Favorit
   - Halaman daftar restoran dapat diakses melalui menu navigasi favorit.
   - Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari indexedDB).
   - Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
   - Ada tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
4. Native Capability
   - Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apa pun, bahkan menggunakan workbox.
   - Aplikasi harus menampilkan icon Add to Home Screen.
   - Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.
5. Code Quality
6. Integration Test
   - Menerapkan integration test untuk fungsi menyukai dan batal menyukai restoran.
7. End to End Test
   Menerapkan End to End Test dengan skenario:
   - Menyukai salah satu restoran.
   - Batal menyukai restoran tersebut.
8. Image Optimization
   - Melakukan kompresi terhadap gambar hero yang digunakan. Ukuran gambar harus di bawah 200kb.
   - Menerapkan teknik image responsive pada gambar hero. Resolusi gambar pada layar seluler dan desktop harus berbeda.
   - Menerapkan teknik lazy loading pada gambar daftar restoran yang ditampilkan.
9. Bundle Optimization
