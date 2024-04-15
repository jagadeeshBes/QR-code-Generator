let qrcontantInput = document.querySelector(".qr-contant");
let contantForm = document.querySelector("#qr-form");
let qrcode;

function generateQRcode(){
    return new QRcode('qr-code',{
        text : qrContant,
        width: 250, 
        height :250,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRcode.correctLevel.H,
    })
}

contantForm.addEventListener('submit',function (event){
    event.preventDefault();
    let qrContent = qrcontantInput.value;
    if(qrcode == null){
        qrcode = generateQRcode(qrContent);
    }
    else{
        qrcode.makeCode(qrContent);
    }
})