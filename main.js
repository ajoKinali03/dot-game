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

const properti = new propertiFunc(1500, 0, 0);
const properti1 = new propertiFunc(1500, 0, 0);

plyBtn.addEventListener('click', function(){
  console.log('ply btn di tekan');
  properti.level *= 0;
  properti.count *= 0;
  properti1.level *= 0;
  properti1.count *= 0;
  cntrStr.style.opacity = '0';
  cntrStr.style.transition = '1s';
  setTimeout(function(){
      cntrStr.style.visibility = 'hidden';
  }, 1000);
  
  
  
  setInterval(() => {
    if (properti.count == 0) {
      dot.style.top = rdmTop() + 'px';
      dot.style.left = rdmLeft() + 'px';
    };
  },properti.speed);
  
  
  
  setInterval(() => {
    if(properti1.count == 0){
      dot1.style.left = rdmLeft() + 'px';
      dot1.style.top = rdmTop() + 'px';
    };
  }, properti1.speed);
  
  dot.addEventListener('click', () => {
    properti.level *= 0;
    properti.count++; 
    properti.level++;
    // setInterval(() => {console.log(properti1.level,properti1.count)}, 1000); 
    if(properti.count == 1){
       properti.speed -= 100;
       dot1.style.transition = properti.speed+'ms';
       console.log(properti.count, 'dot', properti.speed);
    };
    const hsl = (properti.level + properti1.level) % 2;
    console.log(hsl);
    if(hsl == 2){
      setTimeout(() => {
        //properti.count *= 0;
        cntrStr.style.visibility = 'visible';
        cntrStr.style.opacity = '1';  
      }, 1300);
    };
    
  });
  
  dot1.addEventListener('click', () => {
    properti1.level *= 0;
    
    properti1.count++;
    properti1.level++;
     if (properti1.count == 1) {
       properti1.speed -= 100;
       dot1.style.transition = properti1.speed+'ms';
       console.log(properti1.count, 'dot', properti1.speed);
     };
     const hsl = properti.level + properti1.level;
     if(hsl == 2){
      setTimeout(() => {
        
        cntrStr.style.visibility = 'visible';
        cntrStr.style.opacity = '1';
      }, 1300);
      
      console.log('berhasil');
     };
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



