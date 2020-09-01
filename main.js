const showface = document.getElementById('title');

const showall = document.getElementById('showall');

const nyturn = document.querySelectorAll('.inner')[0];
const laturn = document.querySelectorAll('.inner')[1];
const sfturn = document.querySelectorAll('.inner')[2];
const hnlturn = document.querySelectorAll('.inner')[3];
const ontturn = document.querySelectorAll('.inner')[4];
const yvrturn = document.querySelectorAll('.inner')[5];
const rometurn = document.querySelectorAll('.inner')[6];
const vieturn = document.querySelectorAll('.inner')[7];
const londonturn = document.querySelectorAll('.inner')[8];
const amsturn = document.querySelectorAll('.inner')[9];
const fraturn = document.querySelectorAll('.inner')[10];
const sydturn = document.querySelectorAll('.inner')[11];
const bneturn = document.querySelectorAll('.inner')[12];
const melturn = document.querySelectorAll('.inner')[13];
const delturn = document.querySelectorAll('.inner')[14];
showall.addEventListener('click', () => {
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

 const msg = [
    document.querySelectorAll('.flipButton')[0],
    document.querySelectorAll('.flipButton')[1],
    document.querySelectorAll('.flipButton')[2],
    document.querySelectorAll('.flipButton')[3],
    document.querySelectorAll('.flipButton')[4],
    document.querySelectorAll('.flipButton')[5],
    document.querySelectorAll('.flipButton')[6],
    document.querySelectorAll('.flipButton')[7],
    document.querySelectorAll('.flipButton')[8],
    
    document.querySelectorAll('.flipButton')[10],
    document.querySelectorAll('.flipButton')[11],
    document.querySelectorAll('.flipButton')[12],
    document.querySelectorAll('.flipButton')[13],
    document.querySelectorAll('.flipButton')[14]
 ]
 
 msg.forEach(item => {
  item.addEventListener('click', event => {
    alert('Thank you for visiting! I am working on them. Fancy the Netherlands instead?');
  })
})

 
