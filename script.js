// SET PASSWORD DEFAULT JIKA BELUM ADA
if(!localStorage.getItem("adminPassword")){
  localStorage.setItem("adminPassword", "rizaa123");
}

// LOGIN
function cekRole(){
  const role = document.getElementById("role").value;
  document.getElementById("password").style.display =
    role === "admin" ? "block" : "none";
}

function login(){
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const role = document.getElementById("role").value;
  const pass = document.getElementById("password").value;

  if(!nama || !kelas || !role){
    alert("Lengkapi data!");
    return;
  }

  if(role === "admin"){
    const adminPass = localStorage.getItem("adminPassword");
    if(pass !== adminPass){
      alert("Password admin salah!");
      return;
    }
  }

  localStorage.setItem("user", JSON.stringify({nama,kelas,role}));
  location.href = "home.html";
}

// DASHBOARD
function cekLogin(){
  const user = JSON.parse(localStorage.getItem("user"));
  if(!user){
    location.href = "index.html";
    return;
  }

  document.getElementById("infoUser").innerText =
    `Login sebagai ${user.nama} | ${user.kelas} | ${user.role.toUpperCase()}`;

  if(user.role !== "admin"){
    document.getElementById("adminPanel").style.display = "none";
  }
}

function ubahPassword(){
  const oldPass = document.getElementById("oldPass").value;
  const newPass = document.getElementById("newPass").value;
  const currentPass = localStorage.getItem("adminPassword");

  if(oldPass !== currentPass){
    alert("Password lama salah!");
    return;
  }

  if(newPass.length < 5){
    alert("Password minimal 5 karakter!");
    return;
  }

  localStorage.setItem("adminPassword", newPass);
  alert("Password admin berhasil diubah!");
  document.getElementById("oldPass").value="";
  document.getElementById("newPass").value="";
}

// LOGOUT
function logout(){
  localStorage.removeItem("user");
  location.href="index.html";
}

if(location.pathname.includes("home")){
  cekLogin();
}
