// function say () {
//   console.log(foo)
//   const foo = 1;
// }
//
// say();

// const a = [];
//
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[9]();
//
// const b = [];
// for (const i = 0; i < 10; i++) {
//   b[i] = function () {
//     console.log(i);
//   };
// }
//
// b[3]();


const ele = document.querySelectorAll('.list li');
for(let i = 0; i < ele.length; i++) {
  ele[i].onclick = function () {
    console.log(i);
  };
}