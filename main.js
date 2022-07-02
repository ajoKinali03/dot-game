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
const htpBtnLink = document.getElementsByClassName('htp-btn-link')[0];
const missBtn = document.getElementsByClassName('container-content')[0];
const cntrStr = document.getElementsByClassName('container-start')[0];
const dot = document.getElementsByClassName('dot')[0];
const dot1 = document.getElementsByClassName('dot')[1];

function propertiFunc(spd, level, cnt){
  this.speed= spd;
  this.level= level;
  this.count= cnt;
};

function socoreFunc(miss, hit, time){
  this.miss = miss;
  this.hit = hit;
  this.time = time;
};

setTimeout(() => {
  let i = 0;
  while(i <= 2){
    document.getElementsByClassName('bola')[i].classList.add('bola' + (i+2));
    i++;
  };
}, 6000);
const score = new socoreFunc(0, 0, 0);
const properti = new propertiFunc(1500, 0, 0);
const properti1 = new propertiFunc(1500, 0, 0);


plyBtn.addEventListener('click', function(){
  htpBtnLink.removeAttribute('href');
  properti.level *= 0;
  properti.count *= 0;
  properti1.level *= 0;
  properti1.count *= 0;
  cntrStr.style.opacity = '0';
  cntrStr.style.transition = '1s';
  setTimeout(function(){
      cntrStr.style.visibility = 'hidden';
  }, 1000);
  
  
  //fungsi untuk perpindahan dot
  setInterval(() => {
    if (properti.count == 0) {
      dot.style.top = rdmTop() + 'px';
      dot.style.left = rdmLeft() + 'px';
    };
  },properti.speed);

  //fungsi untuk perpindahan dot1 
  setInterval(() => {
    if(properti1.count == 0){
      dot1.style.left = rdmLeft() + 'px';
      dot1.style.top = rdmTop() + 'px';
    };
  }, properti1.speed);
  

  //perhitungan untuk dot1
  dot.addEventListener('click', () => {
    properti.level *= 0;
    properti.count++; 
    properti.level++;
    if(properti.count == 1){
      score.hit++;
      properti.speed -= 100;
      dot1.style.transition = properti.speed+'ms';
    };
    const hsl = properti.level + properti1.level;
    if(hsl == 2){
      setTimeout(() => {
        htpBtnLink.innerHTML = 'surender';
        plyBtn.innerHTML = 'next level';
        cntrStr.style.visibility = 'visible';
        cntrStr.style.opacity = '1';  
      }, 1300);
    };
    
  });
  

  //perhitungan untuk dot1 
  dot1.addEventListener('click', () => {
    properti1.level *= 0;
    properti1.count++;
    properti1.level++;
     if (properti1.count == 1) {
      score.hit++;
      properti1.speed -= 100;
      dot1.style.transition = properti1.speed+'ms';
     };
     const hsl = properti.level + properti1.level;
     if(hsl == 2){
      setTimeout(() => {
        htpBtnLink.innerHTML = 'surender';
        plyBtn.innerHTML = 'next level';
        cntrStr.style.visibility = 'visible';
        cntrStr.style.opacity = '1';
      }, 1300);
     };
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

//fungsi untuk menghitung waktu berjalan nya permainan
setInterval(() => {
  if((properti.level + properti1.level) != 2){
    score.time++;
  };
}, 1000);

//container content unutk menghitung miss player
missBtn.addEventListener('click', () => {
  score.miss++;
});


// restart game || reload web
const restart = document.getElementsByClassName('btn-reset')[0];
restart.addEventListener('click', () => {
    location.reload();
});

const halamanScore = document.getElementsByClassName('container-score')[0];
htpBtnLink.addEventListener('click', () => {
  const hit = document.getElementsByClassName('hit')[0];
  const miss = document.getElementsByClassName('miss')[0];
  const time = document.getElementsByClassName('time')[0];

  hit.innerHTML = score.hit;
  miss.innerHTML = score.miss;
  time.innerHTML = score.time;

  halamanScore.style.visibility = 'visible';
  cntrStr.style.visibility = 'hidden';
});