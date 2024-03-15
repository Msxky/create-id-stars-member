const created = document.getElementById("created");
created.textContent = "32 Created..";

const inNama = document.getElementById("inNama");
const inNamaAkun = document.getElementById("inNamaAkun");
const inUsername = document.getElementById("inUsername");
const inKategori = document.getElementById("inKategori");
const btn = document.getElementById("down");

const imgDisplay = document.getElementById("imgDisplay");
const fileInput = document.getElementById("file");

fileInput.addEventListener("click", () => {
  var qrc = new QRCode(document.getElementById("qrcode"), {
    text: `tiktok.com/@${inUsername.value}`,
    colorDark: "#222222",
    colorLight: "#ffffff",
    // QRCode.CorrectLevel.L | QRCode.CorrectLevel.M | QRCode.CorrectLevel.H
    correctLevel: QRCode.CorrectLevel.H,
  });
});
// const API = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

function getName() {
  const inNama = document.getElementById("inNama");
  const nama = document.getElementById("nama");
  nama.textContent = inNama.value;
}

function getNameAkun() {
  const inNamaAkun = document.getElementById("inNamaAkun");
  const namaAkun = document.getElementById("namaAkun");
  namaAkun.textContent = inNamaAkun.value;
}

function getUsername() {
  const inUsername = document.getElementById("inUsername");
  const username = document.getElementById("username");
  username.textContent = inUsername.value;
  // imgQr.src = `${API}tiktok.com/@${inUsername.value}`;
}

function getKategori() {
  const inKategori = document.getElementById("inKategori");
  const kategori = document.getElementById("kategori");
  kategori.textContent = inKategori.value;
}

fileInput.onchange = function () {
  imgDisplay.src = URL.createObjectURL(fileInput.files[0]);
};

// alert(
//   "⚠Perhatikan Contoh!, Pastikas semua sesuai Contoh/Example yang ada. ⚠rules: (username) tidak menggunakan kapital dan @ Sedangkan (ketegori) Wajib huruf kapital di kalimat utama dan Profil Picture wajib sama dengan akun TikTok. OK Let's Create🔥"
// );
function download() {
  const inPrompt = prompt(
    `halo ${inNama.value}! Isi nomor WA yg sama di group starsmusic untuk konfirmasi id ke Database`
  );
  if (inNama.value == 0 || inUsername.value == 0 || inKategori.value == 0) {
    btn.value = "Diisi Semuanya!";
  } else if (inPrompt == false) {
    alert("🚫 Jika nomor WhatsApp kosong ID tidak dapat di konfirmasi.");
  } else {
    alert(
      "Done✅, data akan di cek terlebih dahulu. silahkan cek data kamu di ('starsmember.vercel.app') 24 jam setelah create ID :)"
    );
    const pesan = `Konfirmasi ID-Stars: ${inNama.value}
    %0A WhatsApp: ${inPrompt}
    %0A Nama Akun: ${inNamaAkun.value}
    %0A Username: ${inUsername.value}
    %0A Kategori: ${inKategori.value}`;

    const token = "6629142888:AAGwrjziBHjKRkXyMy0i_ag3tuN4D-qgd7I";
    const user = "1689070194";

    $.ajax({
      url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${user}&text=${pesan}&parse_mode=html`,
      method: `POST`,
    });

    let id = document.getElementById("card");
    id.style.transform = "scale(3)";
    id.style.background = "var(--secondary-color)";
    html2canvas(id).then((canvas) => {
      id.style.background = "transparent";
      id.style.transform = "scale(1)";
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      a.download = `ID-Stars ${inUsername.value}.png`;
      a.click();
      document.body.removeChild(a);
    });
  }
}

document.oncontextmenu = () => {};

document.onkeydown = (e) => {
  if (e.key == "F12") {
    return false;
  }
  if (e.ctrlKey && e.key == "u") {
    return false;
  }
  if (e.ctrlKey && e.key == "c") {
    return false;
  }
  if (e.ctrlKey && e.key == "v") {
    return false;
  }
};
