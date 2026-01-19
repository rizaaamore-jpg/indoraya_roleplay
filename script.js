let siswa = [];
let roleUser = "";

function login(){
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const role = document.getElementById("role").value;

  if(!nama || !kelas || !role){
    alert("Lengkapi semua data!");
    return;
  }

  roleUser = role;

  document.getElementById("loginBox").style.display="none";
  document.getElementById("dashboard").style.display="flex";

  document.getElementById("infoLogin").innerText =
    `Login sebagai ${nama} | Kelas ${kelas} | Role: ${role.toUpperCase()}`;

  if(role === "siswa"){
    document.getElementById("menuSiswa").style.display="none";
  }
}

function showSection(id){
  document.querySelectorAll(".section")
    .forEach(sec=>sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function tambahSiswa(){
  if(roleUser !== "admin") return;

  const nama = document.getElementById("namaSiswa").value;
  if(nama === "") return;

  siswa.push(nama);
  document.getElementById("namaSiswa").value="";
  renderSiswa();
}

function renderSiswa(){
  let html="";
  siswa.forEach((s,i)=>{
    html += `<tr><td>${i+1}</td><td>${s}</td></tr>`;
  });

  document.getElementById("listSiswa").innerHTML = html;
  document.getElementById("totalSiswa").innerText = siswa.length;
}

function logout(){
  location.reload();
}
