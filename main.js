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
function propertiFunc(spd, level, cnt){
  this.speed= spd;
  this.level= level;
  this.count= cnt;
};


setTimeout(() => {
  let i = 0;
  while(i <= 2){
    document.getElementsByClassName('bola')[i].classList.add('bola' + (i+2));
    i++;
  };
}, 6000);

let spd = 1500;
plyBtn.addEventListener('click', function(){
  const properti = new propertiFunc(100, 12, 0);
  
  cntrStr.style.opacity = '0';
  cntrStr.style.transition = '1s';
  setTimeout(function(){
      cntrStr.style.display = 'none';
  }, 1000);
  
  function test (){ return properti.speed1};
  
  setInterval(() => {
    if (properti.count <= 1) {
      dot.style.top = rdmTop() + 'px';
      dot.style.left = rdmLeft() + 'px';
    };
  },500 );
  
  
  
  setInterval(() => {
    if(properti.count == 0){
      dot1.style.left = rdmLeft() + 'px';
      dot1.style.top = rdmTop() + 'px';
    };
    if(properti.count == 1){
      setTimeout(() => {
        properti.count *= 0;
      }, 1000);
    }
  }, properti.speed);
  
  dot.addEventListener('click', () => {
     if(properti.count == 1){
       properti.speed -= 200;
       properti.level -= 1;
    };
    console.log(properti.count, 'dot', properti.speed);
    properti.count++;
  });
  
  dot1.addEventListener('click', () => {
    properti.count1++;
     if (properti.count == 1) {
       spd -= 1000;
       dot1.style.transition = properti.speed1+'ms';
       properti.level -= 1;
     };
    console.log(properti.count, 'dot1')
    
  });
  //ketika level sama dengan modulus dua maka tampilkan halaman naik level dan kecepatan interval dan transition di tambah dan juga count di reset
  
  
  
  
  
  
  
  
  
  
  
  
  function rdmTop() {
    const nRandom = Math.floor(Math.random() * (window.innerHeight - 50) + 0);
    return nRandom;
  };
  
  function rdmLeft() {
    const nRandom = Math.floor(Math.random() * (window.innerWidth - 50) + 0);
    return nRandom;
  };
});



