"use strict";

var showface = document.getElementById('title');
var showall = document.getElementById('showall');
var nyturn = document.querySelectorAll('.inner')[0];
var laturn = document.querySelectorAll('.inner')[1];
var sfturn = document.querySelectorAll('.inner')[2];
var hnlturn = document.querySelectorAll('.inner')[3];
var ontturn = document.querySelectorAll('.inner')[4];
var yvrturn = document.querySelectorAll('.inner')[5];
var rometurn = document.querySelectorAll('.inner')[6];
var vieturn = document.querySelectorAll('.inner')[7];
var londonturn = document.querySelectorAll('.inner')[8];
var amsturn = document.querySelectorAll('.inner')[9];
var fraturn = document.querySelectorAll('.inner')[10];
var sydturn = document.querySelectorAll('.inner')[11];
var bneturn = document.querySelectorAll('.inner')[12];
var melturn = document.querySelectorAll('.inner')[13];
var delturn = document.querySelectorAll('.inner')[14];
showall.addEventListener('click', function () {
  nyturn.style.transform = "rotateY(180deg)";
  laturn.style.transform = "rotateY(180deg)";
  sfturn.style.transform = "rotateY(180deg)";
  hnlturn.style.transform = "rotateY(180deg)";
  ontturn.style.transform = "rotateY(180deg)";
  yvrturn.style.transform = "rotateY(180deg)";
  rometurn.style.transform = "rotateY(180deg)";
  vieturn.style.transform = "rotateY(180deg)";
  londonturn.style.transform = "rotateY(180deg)";
  amsturn.style.transform = "rotateY(180deg)";
  fraturn.style.transform = "rotateY(180deg)";
  sydturn.style.transform = "rotateY(180deg)";
  bneturn.style.transform = "rotateY(180deg)";
  melturn.style.transform = "rotateY(180deg)";
  delturn.style.transform = "rotateY(180deg)";
});
var msg = [document.querySelectorAll('.flipButton')[0], document.querySelectorAll('.flipButton')[1], document.querySelectorAll('.flipButton')[2], document.querySelectorAll('.flipButton')[3], document.querySelectorAll('.flipButton')[4], document.querySelectorAll('.flipButton')[5], document.querySelectorAll('.flipButton')[6], document.querySelectorAll('.flipButton')[7], document.querySelectorAll('.flipButton')[8], document.querySelectorAll('.flipButton')[10], document.querySelectorAll('.flipButton')[11], document.querySelectorAll('.flipButton')[12], document.querySelectorAll('.flipButton')[13], document.querySelectorAll('.flipButton')[14]];
msg.forEach(function (item) {
  item.addEventListener('click', function (event) {
    alert('Thank you for visiting! I am working on them. Fancy the Netherlands instead?');
  });
});