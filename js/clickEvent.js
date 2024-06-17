let section1 = document.querySelector(".about_btn");
let section2 = document.querySelector(".stack_btn");
let section3 = document.querySelector(".project_btn");
let section4 = document.querySelector(".home_btn");

section1.addEventListener('click', function(){
  window.scrollTo({
    top: 900,
    behavior: 'smooth'
  });
})

section2.addEventListener('click', function(){
  window.scrollTo({
    top: 2100,
    behavior: "smooth"
  });
})

section3.addEventListener('click', function(){
  window.scrollTo({
    top: 3100,
    behavior: "smooth"
  });
})


//a1 클릭하면 모달창 나타남
const modal_1 = document.querySelector('#a1');
const btnOpenModal_1 = document.querySelector('#fix1');
const modal_off = document.querySelector('#off1');

modal_1.addEventListener('click', function() {
  btnOpenModal_1.style.display = "flex";
});

modal_off.addEventListener('click', function() {
  btnOpenModal_1.style.display = "none";
});


//a2 클릭하면 모달창 나타남
const modal_2 = document.querySelector('#a2');
const btnOpenModal_2 = document.querySelector('#fix2');
const modal_off_2 = document.querySelector('#off2');

modal_2.addEventListener('click', function() {
  btnOpenModal_2.style.display = "flex";
});

modal_off_2.addEventListener('click', function() {
  btnOpenModal_2.style.display = "none";
});

//a3
const modal_3 = document.querySelector('#a3');
const btnOpenModal_3 = document.querySelector('#fix3');
const modal_off_3 = document.querySelector('#off3');

modal_3.addEventListener('click', function() {
  btnOpenModal_3.style.display = "flex";
});

modal_off_3.addEventListener('click', function() {
  btnOpenModal_3.style.display = "none";
});


//a4
const modal_4 = document.querySelector('#a4');
const btnOpenModal_4 = document.querySelector('#fix4');
const modal_off_4 = document.querySelector('#off4');

modal_4.addEventListener('click', function() {
  btnOpenModal_4.style.display = "flex";
});

modal_off_4.addEventListener('click', function() {
  btnOpenModal_4.style.display = "none";
});

//a5
const modal_5 = document.querySelector('#a5');
const btnOpenModal_5 = document.querySelector('#fix5');
const modal_off_5 = document.querySelector('#off5');

modal_5.addEventListener('click', function() {
  btnOpenModal_5.style.display = "flex";
})

modal_off_5.addEventListener('click', function() {
  btnOpenModal_5.style.display = "none";
});


//a6
const modal_6 = document.querySelector('#a6');
const btnOpenModal_6 = document.querySelector('#fix6');
const modal_off_6 = document.querySelector('#off6');
modal_6.addEventListener('click', function() {
  btnOpenModal_6.style.display = "flex";
})

modal_off_6.addEventListener('click', function() {
  btnOpenModal_6.style.display = "none";
});



const show_more = document.querySelector('#show_more');

show_more.addEventListener('click', () => {
  alert("시간 부족으로 더 이상 없습니다 ㅜㅜ");
})

// 스크롤 y값 출력
// window.addEventListener('scroll', function(){
//   console.log( window.scrollY )
// });
