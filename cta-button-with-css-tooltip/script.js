function copyClipboard() {
    document.getElementById("freeMail").select(), document.execCommand("copy"), document.getElementById("tooltip").innerHTML = "Mail đã được sao chép!"
}

function outFunc() {
    document.getElementById("tooltip").innerHTML = "Sao chép mail vào clipboard?"
}