let no = 1;

// template button
let btncart = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
<path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`;

// Cari semua produk
$(".all").click(function (e) {
    e.preventDefault();
    let url = "https://dummyjson.com/products";
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            console.log(response.products);
            let out = '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Nama Barang</th><th scope="col">Deskripsi</th><th scope="col">Ubah</th><th scope="col">Beli</th></tr></thead><tbody>';
            $.each(response.products, function (key, val) {
                out += `<tr>
                <th scope="row">${val.id}</th>
                <td>${val.title}</td>
                <td>${val.description}</td>
                <td><button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="ubah(${val.id})">Ubah</button></td>
                <td><button class="btn btn-info" onclick="cart(${val.id})">${btncart}</button></td>
                </tr>`
            });
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});


//Cari 1 kategori
$(".cate").click(function (e) {
    e.preventDefault();
    let link = "";
    let kategori = document.getElementById("select").value;
    if (kategori === "smartphones") {
        link = "smartphones";
    }
    if (kategori === "laptops") {
        link = "laptops";
    }
    if (kategori === "fragrances") {
        link = "fragrances";
    }
    if (kategori === "skincare") {
        link = "skincare";
    }
    if (kategori === "groceries") {
        link = "groceries";
    }
    if (kategori === "home-decoration") {
        link = "home-decoration";
    }
    let url = "https://dummyjson.com/products/category/" + link;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            console.log(response.products);
            let out = '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Ttile</th><th scope="col">Descripsion</th><th scope="col">Category</th></tr></thead><tbody>';
            $.each(response.products, function (key, val) {
                out += `<tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td>${val.category}</td>
                  </tr>`
            });
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});

// Cari berdasarkan id
$(".one").click(function (e) {
    e.preventDefault();
    let id = document.getElementById("id").value;
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            console.log(response);
            let out = '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Ttile</th><th scope="col">Descripsion</th><th scope="col">Category</th></tr></thead><tbody>';
            out += `<tr>
                    <th scope="row">${response.id}</th>
                    <td>${response.title}</td>
                    <td>${response.description}</td>
                    <td>${response.category}</td>
                  </tr>`;
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});

//Menambahkan
$(".add").click(function (e) {
    e.preventDefault();
    let url = "https://dummyjson.com/products/add";
    let produk = $("#produk").val();
    let deskripsi = $("#deskripsi").val();
    let kategori = $("#selected").val();

    let data = {
        title: produk,
        description: deskripsi,
        category: kategori
    };

    $.ajax({
        type: "POST",
        url: url,
        body: data,
        success: function (response) {
            console.log(data);
        }
    });
});

// Mengupdate
$(".update").click(function (e) {
    e.preventDefault();
    let id = $("#ide").val();
    let data = {
        id: $("#ide").val(),
        produk: $("#produki").val(),
        deskripsi: $("#deskripsie").val()
    };
    let link = "https://dummyjson.com/products/" + id;

    $.ajax({
        type: "patch",
        url: link,
        body: data,
        success: function (response) {
            console.log(data);
        }
    });
});

// Tampil Update
function ubah(idubah) {
    let url = "https://dummyjson.com/products/" + idubah;
    $.ajax({
        type: "get",
        url: url,
        data: "json",
        success: function (response) {
            $(".ha").val(response.title);
            $(".hi").val(response.description);
            $(".ho").val(response.id);
        }
    });
}

// Menghapus
$(".del").click(function (e) {
    e.preventDefault();
    let id = document.getElementById("ie").value;
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "delete",
        url: url,
        data: id,
        success: function (response) {
            console.log("id nomor " + id + " sudah dihapus");
        }
    });
});

// Cari data pelanggan
$(".plgn").click(function (e) {
    e.preventDefault();
    $.ajax({
        type: "get",
        url: "http://localhost:8080/dummyjson-v2/php/select.php",
        dataType: "json",
        cahce: false,
        success: function (response) {
            console.log(response);
            let out = '<table class="table mt-4"><thead><tr><th scope="col">No</th><th scope="col">Pelanggan</th><th scope="col">Alamat</th><th scope="col">Nomor Telepon</th><th scope="col">Ubah</th><th scope="col">Hapus</th><th scope="col">Beli</th></tr></thead><tbody>';
            $.each(response, function (key, val) {
                out += `<tr>
                    <th scope="row">${no++}</th>
                    <td>${val.pelanggan}</td>
                    <td>${val.alamat}</td>
                    <td>${val.telp}</td>
                    <td><button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal7" onclick="update(${val.idpelanggan})">UBAH</button></td>
                    <td><button class="btn btn-info" onclick="hapus(${val.idpelanggan})">HAPUS</button></td>
                    <td><button class="btn btn-info" onclick="cartP(${val.idpelanggan})">BELI</button></td>
                </tr>`
            });
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});

// Tambah Pelanggan
$(".addplgn").click(function (e) {
    e.preventDefault();
    let data = {
        pelanggan: $("#pelanggan").val(),
        alamat: $("#alamat").val(),
        telp: $("#telp").val()
    };
    $.ajax({
        type: "post",
        url: "http://localhost:8080/dummyjson-v2/php/insert.php",
        data: JSON.stringify(data),
        cahce: false,
        success: function (response) {
            window.location.href = "http://127.0.0.1:5500/";
            alert(response);
        }
    });
});

// Hapus Pelanggan
function hapus(idpelanggan) {
    let data = {
        idpelanggan: idpelanggan
    };
    $.ajax({
        type: "post",
        url: "http://localhost:8080/dummyjson-v2/php/delete.php",
        data: JSON.stringify(data),
        cahce: false,
        success: function (response) {
            window.location.href = "http://127.0.0.1:5500/";
            alert(response);
        }
    });
}

// Tampil Update
function update(idpelanggan) {
    let data = {
        idpelanggan: idpelanggan
    };
    $.ajax({
        type: "post",
        url: "http://localhost:8080/dummyjson-v2/php/selectupdate.php",
        data: JSON.stringify(data),
        cahce: false,
        success: function (response) {
            let data = JSON.parse(response);
            $(".ba").val(data.pelanggan);
            $(".bi").val(data.alamat);
            $(".bo").val(data.telp);
            $(".be").val(data.idpelanggan);
        }
    });
}

// Mengupdate
$(".updateplgn").click(function (e) {
    e.preventDefault();
    let dataPelanggan = {
        idpelanggan: $("#idey").val(),
        pelanggan: $("#pelanggani").val(),
        alamat: $("#alamate").val(),
        telp: $("#telpe").val()
    };
    $.ajax({
        type: "post",
        url: "http://localhost:8080/dummyjson-v2/php/update.php",
        data: JSON.stringify(dataPelanggan),
        cahce: false,
        success: function (response) {
            window.location.href = "http://127.0.0.1:5500/";
            alert(response);
        }
    });
});

// Cart
function cart(id) {
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (responsen) {
            let out = "<h2 class='mt-2'>Invoice</h2>"
            out += '<table class="table"><thead><tr><th scope="col">ID</th><th scope="col">Nama Pemesan</th><th scope="col">Nama Barang</th><th scope="col">Harga</th><th scope="col">Jumlah</th><th scope="col">Checkout</th></tr></thead><tbody>';
            out += `<tr>
                    <th scope="row">${responsen.id}</th>
                    <td id="orderby"></td>
                    <td>${responsen.title}</td>
                    <td>$ ${responsen.price}</td>
                    <td><input type="number" class="small" id="jumlah"></td>
                    <td><button class="btn btn-success" onclick="checkout('${responsen.id}','${responsen.price}','${responsen.title}')">Checkout</button></td>
                </tr>`;
            out += '</tbody></table>';
            $("#order").html(out);
        }
    });

}
// order by
var idplgn = "";
var nama = "";
var alamat = "";
function cartP(idpelanggan) {
    let url = "http://localhost:8080/dummyjson-v2/php/order/selectwhere.php/?id=" + idpelanggan;
    $.ajax({
        type: "get",
        url: url,
        dataType: "JSON",
        success: function (response) {
            let out = response.pelanggan;
            $("#orderby").html(out);
            idplgn = response.idpelanggan;
            nama = response.pelanggan;
            alamat = response.alamat;
        }
    });
}

// checkout
function checkout(idbarang, harga, barang) {
    let order = 0;
    let idorder = order++;
    let jumlah = $("#jumlah").val();
    let data = {
        idorder: idorder,
        idbarang: idbarang,
        jumlah: jumlah,
        harga: harga,
        barang: barang,
        idpelanggan: idplgn,
        pelanggan: nama,
        alamat: alamat
    };

    $.ajax({
        type: "post",
        url: "http://localhost:8080/dummyjson-v2/php/order/addtocart.php",
        data: JSON.stringify(data),
        success: function (response) {
            window.location.href = "http://127.0.0.1:5500/";
            alert(response);
        }
    });
}