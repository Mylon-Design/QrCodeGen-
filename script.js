const input = document.querySelector("input"); // selected class input
const qrcode = document.getElementById("qrcode"); // selected id qrcode

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { //key ENTER will generate a qr code
        genQRCode();
    }
});

function genQRCode() {
    if (!input.value) return;

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
};