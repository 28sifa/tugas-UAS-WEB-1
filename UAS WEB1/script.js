let data = [
  "Avanza",
  "Toyota",
  "Ayla",
  "Terios",
  "Lamborghini",
  "Mini cooper",
  "Nissan",
  "BMW",
  "Strada",
  "Jazz",
];

function tampil() {
  let tabel = document.getElementById("tabel");
  tabel.innerHTML = "<tr><th> Model/Merk</th><th>Action</th></tr>";
  for (let i = 0; i < data.length; i++) {
    let btnEdit =
      "<button class='btn-edit' href='#' onclick='edit()'>Edit</button>";
    let btnHapus =
      "<button class='btn-hapus' href='#' onclick='hapus()'>Hapus</button>";
    j = i + 1;
    tabel.innerHTML += "</td><td>" +  data[i] + "</td><td>" + btnEdit +" " + btnHapus + "</tr>";
  }
  let tes = document.getElementById("tes");
  tes.innerHTML = `<h3>Terdapat ${j} Merk dan Model Mobil </h3>`;
}

function search() {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("ades");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabel");
  tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function tambah() {
  let input = document.querySelector("input[name=merk]");
  data.push(input.value);
  tampil();
  input.value = "";
}

function edit(id) {
  let baru = prompt("Edit", data[id]);
  data[id] = baru;
  tampil();
}

function hapus(id) {
  let hapus = alert("Yakin ingin menghapus?");
  data.splice(id, 1);
  tampil();
}

function logout(){
  alert("Ingin Logout");
  window.location.href = "index.html"
}
tampil();
