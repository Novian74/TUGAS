// document.querySelector("#paragraf").innerHTML="saya belajar javascript";

// document.querySelector("#konten").innerHTML="<h1>ganti isi</h1>";

let tanggal=5;
let bulan=2;
let hasil = "salah";

if (tanggal > 0 && tanggal < 32 && bulan > 0 && bulan < 13) {
    hasil = "zodiak blom dibuat";
    if (bulan == 1) {
        if (tanggal >= 0 && tanggal <= 19) {
            hasil = 'Capricorn';
        }
        if (tanggal >= 20 && tanggal <= 31) {
            hasil = 'Aquarius';
        }
    }
    if (bulan == 2) {
        if (tanggal >= 0 && tanggal <= 18) {
            hasil = 'Aquarius';
        }
        if (tanggal >= 19 && tanggal <= 29) {
            hasil = 'Pisces';
        }
    }
    if(bulan == 3) {
        if (tanggal >= 0 && tanggal <= 20) {
            hasil = 'Pisces';
        }
        if(tanggal >= 21 && tanggal <= 31) {
            hasil = 'Aries';
        }
    }
    if (bulan == 4) {
        if(tanggal >= 0 && tanggal <= 19) {
            hasil = 'Aries';
        }
        if (tanggal >= 20 && tanggal <= 30) {
            hasil = 'Taurus';
        }
    }
    if (bulan == 5) {
        if(tanggal >= 21 && tanggal <= 31) {
            hasil = 'Gemini';
        }
        if (tanggal >= 0 && tanggal <= 20) {
            hasil = 'Libra';
        }
    }
    if (bulan == 6) {
        if(tanggal >= 0 && tanggal <= 21) {
            hasil = 'Gemini';
        }
        if (tanggal >= 22 && tanggal <= 30) {
            hasil = 'Cancer';
        }
    }
    if (bulan == 7) {
        if(tanggal >= 23 && tanggal <= 31) {
            hasil = 'Leo';
        }
        if (tanggal >= 0 && tanggal <= 20) {
            hasil = 'Cancer';
        }
    }
    if (bulan == 8) {
        if(tanggal >= 0 && tanggal <= 22) {
            hasil = 'Leo';
        }
        if (tanggal >= 23 && tanggal <= 31) {
            hasil = 'Virgo';
        }
    }
    if (bulan == 9) {
        if(tanggal >= 0 && tanggal <= 23) {
            hasil = 'Virgo';
        }
        if (tanggal >= 23 && tanggal <= 30) {
            hasil = 'Libra';
        }
    }
    if (bulan == 10) {
        if(tanggal >= 0 && tanggal <= 22) {
            hasil = 'Libra';
        }
        if (tanggal >= 23 && tanggal <= 31) {
            hasil = 'Scorpio';
        }
    }
    if (bulan == 11) {
        if(tanggal >= 0 && tanggal <= 21) {
            hasil = 'Scorpio';
        }
        if (tanggal >= 22 && tanggal <= 30) {
            hasil = 'Sagitarius';
        }
    }
    if (bulan == 12) {
        if(tanggal >= 0 && tanggal <= 21) {
            hasil = 'Sagitarius';
        }
        if (tanggal >= 22 && tanggal <= 31) {
            hasil = 'Capricorn';
        }
    }
}
// console.log(hasil);
document.querySelector("#konten").innerHTML='<h1>'+ hasil + '</h1>';