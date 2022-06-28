// width 325
// height 620


/* konsep game dot:
---> yaitu dot akan ditekan dan akan membuat dot berhenti apa bila dot berhenti kedua nya maka akan lanjut ke level selanjutnya dan pergerkan dot akan semakin cepat, jika tidak nywa pemain akan berkuran apabila dia tidak mengenai dot tsb dengan bats 4 nyawa atau empat kali percobaan.
*/

/* intro */
setTimeout(function() {
  const outro = document.getElementsByClassName('intro')[0];
  outro.classList.add('outro');
  setTimeout(function() {
    outro.style.display = 'none';
  }, 900);
}, 5600);




const plyBtn = document.getElementsByClassName('start-btn')[0];
const cntrStr = document.getElementsByClassName('container-start')[0];
const dot = document.getElementsByClassName('dot')[0];
const dot1 = document.getElementsByClassName('dot')[1];

setTimeout(() => {
  let i = 0;
  while(i <= 2){
    document.getElementsByClassName('bola')[i].classList.add('bola' + (i+1));
    i++;
  };
}, 6000);


plyBtn.addEventListener('click', function(){
  cntrStr.style.opacity = '0';
  cntrStr.style.transition = '1s';
  setTimeout(function(){
      cntrStr.style.display = 'none';
  }, 1000);
  
  const dotClear = setInterval(() => {
    dot.style.top = rdmTop() + 'px';
    dot.style.left = rdmLeft() + 'px';
  }, 1000);
  
  const dotClear1 = setInterval(() => {
    dot1.style.top = rdmTop() + 'px';
    dot1.style.left = rdmLeft() + 'px';
  }, 1000);
  
  
  let count = 0;
  dot.addEventListener('click', () => {
    console.log('ok');
    clearInterval(dotClear);
  });
  
  dot1.addEventListener('click', () => {
    console.log('ok');
    clearInterval(dotClear1);
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function rdmTop() {
    const nRandom = Math.floor(Math.random() * (window.innerHeight - 50) + 0);
    return nRandom;
  };
  
  function rdmLeft() {
    const nRandom = Math.floor(Math.random() * (window.innerWidth - 50) + 0);
    return nRandom;
  };
});



