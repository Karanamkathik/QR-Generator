let imgbox = document.getElementById('imgbox');
let img = document.getElementById('img');
let input = document.getElementById('QRinput');
let button = document.getElementById('QRbutton');

function generateQR() {
    if(input.value.length>0){
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  imgbox.classList.add('show-img');
    }
    else{
        input.classList.add('error');

        setTimeout(()=>{
            input.classList.remove('error');
        },1000);
    }

}
 
button.addEventListener('click', generateQR); 
