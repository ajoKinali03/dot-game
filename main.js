// width 325
// height 620


/* konsep game dot:
---> yaitu dot akan ditekan dan akan membuat dot berhenti apa bila dot berhenti kedua nya maka akan lanjut ke level selanjutnya dan pergerkan dot akan semakin cepat, jika tidak nywa pemain akan berkuran apabila dia tidak mengenai dot tsb dengan bats 4 nyawa atau empat kali percobaan.
*/


const dot = document.getElementsByClassName('dot')[0];
const dot1 = document.getElementsByClassName('dot')[1];
setInterval(function(){
  dot.style.top = rdmTop()+'px';
  dot.style.left = rdmLeft()+'px';
  dot1.style.top = rdmTop()+'px';
  dot1.style.left = rdmLeft()+'px';
  dot1.innerHTML = 'you';
  dot1.style.fontWeight = 'bold';
}, 500);

function rdmTop(){
  const nRandom = Math.floor(Math.random() * 620 + 0);
  return nRandom;
};

function rdmLeft() {
  const nRandom = Math.floor(Math.random() * 325 + 0);
  return nRandom;
};
