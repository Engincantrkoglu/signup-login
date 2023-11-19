const switchButton = document.querySelector(".inp");
const loginForm = document.querySelector(".giris");
const signupForm = document.querySelector(".kayit");
const gbtn = document.querySelector(".giris-button");
const kbtn = document.querySelector(".kayit-button");
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    switchButton.addEventListener("change", function () {
        if (switchButton.checked) {
            loginForm.style.display = "block";
            signupForm.style.display = "none";
        } else {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
        }
    });
    let girisSayisi = 0;
    gbtn.addEventListener("click", function () {
        if (!localStorage.getItem('kullaniciAdi')) {
            alert('Kayıt olmanız gerekiyor!');
        } else {
            girisSayisi++;
            localStorage.setItem('girisSayisi', girisSayisi);
            console.log("Giriş formu gönderildi!");
        }
    });

    kbtn.addEventListener("click", function () {
        let kullaniciAdi = document.getElementById('kullaniciAdi').value;
        let kmail = document.getElementById('kmail').value;
        let ksifre = document.getElementById('ksifre').value;

        localStorage.setItem('kullaniciAdi', kullaniciAdi);
        localStorage.setItem('kmail', kmail);
        localStorage.setItem('ksifre', ksifre);

        alert('Kayıt başarıyla yapıldı!');
    });

    document.addEventListener('DOMContentLoaded', function () {
        let savedGirisSayisi = localStorage.getItem('girisSayisi');
        if (savedGirisSayisi) {
            console.log('Daha önce ' + savedGirisSayisi + ' kere giriş yaptınız.');
        }
    });