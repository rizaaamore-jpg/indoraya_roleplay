let siswa = [];

function login(){
  let nama = document.getElementById("nama").value;
  let kelas = document.getElementById("kelas").value;

  if(nama==="" || kelas===""){
    alert("Lengkapi nama dan kelas!");
    return;
  }

  document.getElementById("loginBox").style.display="none";
  document.getElementById("dashboard").style.display="flex";

  document.getElementById("infoLogin").innerText =
    `Login sebagai ${nama} | Kelas ${kelas} | ${new Date().toLocaleString()}`;
}

function showSection(id){
  document.querySelectorAll(".section")
    .forEach(sec=>sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function tambahSiswa(){
  let nama = document.getElementById("namaSiswa").value;
  if(nama==="") return;

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
