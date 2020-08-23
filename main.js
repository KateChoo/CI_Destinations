// const info = document.querySelectorsAll('.back');

// info.addEventListener ('click', () => {
//   var message = randomTarot(output);
//   btn.style.color = randomColor();
//   print(message)
// });

var e = document.querySelector('.mel');
e.onmouseover = function() {
  document.getElementById('popup').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup').style.display = 'none';
}

// var e = document.querySelector('.mel');
// e.onmouseover = function() {
//   document.getElementById('popup').style.display = 'block';
// }
// e.onmouseout = function() {
//   document.getElementById('popup').style.display = 'none';
// }