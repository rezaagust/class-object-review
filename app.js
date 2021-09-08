// Tulis kode di bawah ini
// Membuat object literal
let hewan = {
    nama: "Anjing",
    warna: "putih",
    mata: 2,
    kaki: 4,
    tipe: "pitbull",
    bagus: true,
};

console.log(hewan);
console.log(hewan.warna);
console.log(hewan.nama);

// Constructor
class Anjing {
    constructor(tipeAnjing, modelAnjing) {
        this.tipeAnjing = tipeAnjing;
        this.modelAnjing = modelAnjing;
    }
}

class Hewan {
    constructor(nama, warna, beratGram, harga) {
        this.nama = nama;
        this.warna = warna;
        this.beratGram = beratGram;
        this.harga = harga;
        this.kondisiBagus = false;
    }

    cekKondisiBagus(kondisi = false) {
        return this.kondisiBagus = kondisi;
    }
}

// Cara membuat object instance

let hewanAnjing = new Hewan("Anjing", "Putih", 37, 100000);
hewanAnjing.cekKondisiBagus(true);
console.log(hewanAnjing);