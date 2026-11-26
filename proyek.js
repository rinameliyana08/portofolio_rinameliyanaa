// =====================================================
//  DATA PROYEK
//  Untuk menambah proyek: salin satu blok { ... },
//  tempel di bawahnya (jangan lupa koma di antara blok),
//  lalu ganti isinya.
//
//  judul     : nama proyek
//  tag       : teknologi yang dipakai (boleh lebih dari satu)
//  deskripsi : ringkasan singkat di kartu
//  gambar    : file gambar di folder images/
//  link      : link Figma / GitHub / demo (isi "#" kalau tidak ada)
//  detail    : penjelasan lengkap yang muncul di pop-up
// =====================================================

const proyek = [
  {
    judul: "Mandarin Spoon - Desain Aplikasi Menu Restoran",
    tag: ["Figma", "UI/UX", "Mobile App"],
    deskripsi: "Rancangan antarmuka aplikasi menu restoran bertema masakan Tionghoa, dibuat di Figma.",
    gambar: "images/mandarin-spoon.jpg",
    link: "https://www.figma.com/design/VnhmqLCDkKEKtyTV2T3Qdg/Untitled?node-id=11-4",
    detail: "Mandarin Spoon adalah rancangan antarmuka (UI) aplikasi mobile untuk restoran bertema masakan Tionghoa dengan tagline \"Authentic Chinese Flavors in Every Bite\". Desainnya dibuat di Figma dalam ukuran layar iPhone SE, dengan beberapa layar. Fitur yang dirancang antara lain kolom pencarian, ikon notifikasi, kategori menu (makanan, minuman, snack, dessert), bagian Menu Favorit Kami dan Menu Lainnya, serta kartu menu yang menampilkan foto, nama, harga, dan deskripsi singkat hidangan."
  },
  {
    judul: "Website Program Studi Fisika UIN SMH Banten",
    tag: ["WordPress", "Website", "Responsif"],
    deskripsi: "Situs resmi Program Studi Fisika UIN Sultan Maulana Hasanuddin Banten yang memuat informasi akademik, berita, dan kegiatan prodi.",
    gambar: "images/fisika-uin.jpg",
    link: "https://fisika.fsainsuinbanten.my.id/",
    detail: "Situs resmi Program Studi Fisika UIN Sultan Maulana Hasanuddin Banten yang dibangun dengan WordPress dan responsif di perangkat seluler. Memuat profil prodi (sejarah, visi-misi, dosen, sarana prasarana, akreditasi), informasi pendidikan (kurikulum, kalender akademik, RPS dan silabus, magang), penelitian, pengabdian, dokumen, serta layanan mahasiswa dan alumni. Situs juga menampilkan slider gambar, pengumuman, berita terbaru, empat kelompok studi (Fisika Instrumentasi, Geofisika, Fisika Material, dan Fisika Teori), galeri kampus, kontak, dan peta lokasi."
  },
  {
    judul: "SIM Skripsi - Sistem Informasi Monitoring Skripsi",
    tag: ["Web App", "Sistem Informasi", "Skripsi"],
    deskripsi: "Platform monitoring skripsi di UIN SMH Banten: pengajuan judul, bimbingan, dokumen, seminar, dan sidang.",
    gambar: "images/sim-skripsi.jpg",
    link: "#",
    detail: "SIM Skripsi adalah sistem informasi berbasis web untuk memonitor proses skripsi di Universitas Islam Negeri Sultan Maulana Hasanuddin Banten. Halaman login menyediakan tiga peran: Mahasiswa, Dosen, dan Admin/Prodi. Fitur yang tampil di sistem meliputi pengajuan judul (Turnitin dan ACC), bimbingan (jadwal dan riwayat), dokumen proposal (review dan revisi), serta seminar/sidang (SK dan jadwal)."
  },
  {
    judul: "Smart Health and Care",
    tag: ["IoT", "Arduino", "ESP32", "Sensor MAX30100"],
    deskripsi: "Prototipe alat pemantau detak jantung (heart rate) dan kadar oksigen darah (SpO2) berbasis IoT, dengan tampilan layar OLED.",
    gambar: "images/smart-health.jpg",
    link: "kode/smart-health-and-care.ino",
    detail: "Smart Health and Care adalah prototipe alat pemantau kesehatan sederhana. Sensor MAX30100 membaca detak jantung (bpm) dan kadar oksigen darah (SpO2), lalu hasilnya ditampilkan setiap satu detik pada layar OLED SSD1306 128x64 dengan judul \"Smart Health Monitor\" dan dikirim juga ke Serial Monitor. Rangkaian dibuat di breadboard dengan mikrokontroler ESP32 yang terhubung ke sensor dan layar lewat jalur I2C (pin 21 dan 22). Program ditulis dalam bahasa Arduino (C++) memakai pustaka Adafruit GFX, Adafruit SSD1306, dan MAX30100 PulseOximeter. Tombol link membuka kode programnya."
  },
  {
    judul: "Jurnal Ilmiah - Sistem Peminjaman Barang Berbasis Web",
    tag: ["Jurnal Ilmiah", "Sistem Informasi", "Berbasis Web"],
    deskripsi: "Artikel ilmiah tentang sistem peminjaman barang berbasis web di Fakultas Sains dan Teknologi UIN SMH Banten, diterbitkan di jurnal JACODI.",
    gambar: "images/jurnal-peminjaman.jpg",
    link: "https://jurnal.algoria.biz.id/index.php/jacodi",
    detail: "Artikel berjudul \"Sistem Peminjaman Barang Berbasis Web Dengan Prasarana di Fakultas Sains dan Teknologi UIN Sultan Maulana Hasanudin Banten\", diterbitkan di Journal of Applied Computing and Digital Information (JACODI), Vol. 2, Issue 01, hlm. 10-27, Juni 2026. Ditulis bersama tim delapan penulis dari Program Studi Informatika UIN SMH Banten (Rina Meliyana sebagai penulis keempat). Penelitian ini membahas pengembangan dan penerapan sistem peminjaman barang berbasis web untuk kebutuhan operasional fakultas, yang dilatarbelakangi pengelolaan peminjaman barang yang sebelumnya masih manual. Tombol link membuka halaman jurnal JACODI."
  }
];