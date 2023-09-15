
let qrtext = document.querySelector('#qrtext');
let imgbox = document.querySelector('#imgbox');
let qrlimg = document.querySelector('#qrlimg');

function generateQR() {
    if (qrtext.value.length > 0) {
        qrlimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        imgbox.classList.add("show-img");
    }
    
    else {
        qrtext.classList.add("error");
        setTimeout(() => {
            qrtext.classList.remove("error");
        }, 1000);
    }
}


// Code By - DATTA KALE