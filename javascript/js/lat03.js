let isi = document.querySelector("#isi");
isi.innerHTML="<h1>soto</h1>" + "<p>deskripsi soto</p>" + '<img src="eskrimstroberi.jpg" alt="">';
isi.innerHTML = "<h1>rawon</h1>";
isi.innerHTML += "<p>deskripsi rawon</p>";
isi.innerHTML += '<img src="burger.jpg" alt="">';

for (let i = 0; i < 10; i++) {
    document.querySelector("#konten").innerHTML+="<h1>" + i + "<h1>";
}

let tabel = document.querySelector("#tabel");
// tabel.innerHTML = "<table>" 
//                 +"<thead><tr><th>Nomor</tr></tr></thead>" 
//                 +"<tbody>"
//                 +"<tr><td>1</td></tr>"
//                 +"<tr><td>2</td></tr>"
//                 +"<tr><td>3</td></tr>"
//                 +"<tr><td>4</td></tr>"
//                 +"<tr><td>5</td></tr>"
//                 +"</tbody>"
//                 +"</table>";

tabel.innerHTML = "<table>";
tabel.innerHTML += "<thead><tr><th>Nomor</tr></tr></thead>";
// tabel.innerHTML += "<tbody>";
// tabel.innerHTML += "<tr><td>1</td></tr>";
// tabel.innerHTML += "<tr><td>2</td></tr>";
// tabel.innerHTML += "<tr><td>3</td></tr>";
// tabel.innerHTML += "</tbody>";

for (let index = 1; index <= 8; index++) {
    tabel.innerHTML += "<tr><td>" + index + "</tr></td>";
    
}

tabel.innerHTML += "</table";
