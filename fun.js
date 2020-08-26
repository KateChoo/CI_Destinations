const nytruth = document.querySelectorAll('.truthButton')[0];
const latruth = document.querySelectorAll('.truthButton')[1];
const sftruth = document.querySelectorAll('.truthButton')[2];
const hnltruth = document.querySelectorAll('.truthButton')[3];
const onttruth = document.querySelectorAll('.truthButton')[4];
const yvrtruth = document.querySelectorAll('.truthButton')[5];
const rometruth = document.querySelectorAll('.truthButton')[6];
const vietruth = document.querySelectorAll('.truthButton')[7];
const londontruth = document.querySelectorAll('.truthButton')[8];
const amstruth = document.querySelectorAll('.truthButton')[9];
const fratruth = document.querySelectorAll('.truthButton')[10];
const sydtruth = document.querySelectorAll('.truthButton')[11];
const bnetruth = document.querySelectorAll('.truthButton')[12];
const meltruth = document.querySelectorAll('.truthButton')[13];
const deltruth = document.querySelectorAll('.truthButton')[14];

// const nyflip = document.querySelectorAll('.flipButton')[0];
// const laflip = document.querySelectorAll('.flipButton')[1];
// const sfflip = document.querySelectorAll('.flipButton')[2];
// const hnlflip = document.querySelectorAll('.flipButton')[3];
// const ontflip = document.querySelectorAll('.flipButton')[4];
// const yvrflip = document.querySelectorAll('.flipButton')[5];
// const romeflip = document.querySelectorAll('.flipButton')[6];
// const vieflip = document.querySelectorAll('.flipButton')[7];
// const londonflip = document.querySelectorAll('.flipButton')[8];
// const amsflip = document.querySelectorAll('.flipButton')[9];
// const fraflip = document.querySelectorAll('.flipButton')[10];
// const sydflip = document.querySelectorAll('.flipButton')[11];
// const bneflip = document.querySelectorAll('.flipButton')[12];
// const melflip = document.querySelectorAll('.flipButton')[13];
// const delflip = document.querySelectorAll('.flipButton')[14];

const nypop = document.querySelectorAll('div .pop')[0];
// const nytext = document.querySelectorAll('div p')[0].appendChild(nypop); 
// nypop.appendChild(nytext); 
const lapop = document.querySelectorAll('div .pop')[1];
const sfpop = document.querySelectorAll('div .pop')[2];
const hnlpop = document.querySelectorAll('div .pop')[3];
const ontpop = document.querySelectorAll('div .pop')[4];
const yvrpop = document.querySelectorAll('div .pop')[5];
const romepop = document.querySelectorAll('div .pop')[6];
const viepop = document.querySelectorAll('div .pop')[7];
const londonpop = document.querySelectorAll('div .pop')[8];
const amspop = document.querySelectorAll('div .pop')[9];
const frapop = document.querySelectorAll('div .pop')[10];
const sydpop = document.querySelectorAll('div .pop')[11];
const bnepop = document.querySelectorAll('div .pop')[12];
const melpop = document.querySelectorAll('div .pop')[13];
const delpop = document.querySelectorAll('div .pop')[14];


nytruth.addEventListener ('click', () => {
   nypop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/08/01/14/14/white-2565766__480.jpg')";
//    nytext.innerHTML="夏天只待24小時,馬上又要13小時飛回去台北";
});
latruth.addEventListener ('click', () => {
    lapop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/12/05/08/24/night-1077855__480.jpg')";
 });
 sftruth.addEventListener ('click', () => {
    sfpop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/18/18/32/bed-1836316__480.jpg')";
 });
 hnltruth.addEventListener ('click', () => {
    hnlpop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/08/17/20/49/acai-bowl-3613793__480.jpg')";
 });
 onttruth.addEventListener ('click', () => {
    ontpop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/11/25/10/37/multi-storey-car-park-1061656_1280.jpg')";
 });
 yvrtruth.addEventListener ('click', () => {
    yvrpop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/02/07/14/22/dream-4827288__480.jpg')";
 });
 rometruth.addEventListener ('click', () => {
    romepop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/09/05/23/54/ice-cream-926426_1280.jpg')";
    // romepop.innerHTML = "有出門的話";
 });
 vietruth.addEventListener ('click', () => {
    viepop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/12/08/10/36/angel-1891440__480.jpg')";
 });
 londontruth.addEventListener ('click', () => {
    londonpop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/10/12/02/56/girl-1733352__480.jpg')";
 });
 amstruth.addEventListener ('click', () => {
    amspop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/09/21/14/23/supermarket-949912_1280.jpg')";
 });
 fratruth.addEventListener ('click', () => {
    frapop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/04/03/10/42/woman-2197947__480.jpg')";
 });
 sydtruth.addEventListener ('click', () => {
    sydpop.style.backgroundImage = "url('https://media.istockphoto.com/photos/scene-of-woolworth-metro-grocery-store-in-winter-in-melbourne-picture-id1220507639?b=1&k=6&m=1220507639&s=170667a&w=0&h=7cJu6kFVsrdAnJeBtVsljI7ijYcN5166Nuo5HMW5ZTk=')";
 });
 bnetruth.addEventListener ('click', () => {
    bnepop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/02/25/13/35/beach-1222080__480.jpg')";
 });
 meltruth.addEventListener ('click', () => {
    melpop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2019/01/02/13/13/korean-food-3908819__480.jpg')";
 });
 deltruth.addEventListener ('click', () => {
    delpop.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/08/28/16/06/everyday-912097__480.jpg')";
 });


// nyflip.addEventListener ('click', () => {
//     nypop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
// });

// laflip.addEventListener ('click', () => {
//      lapop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });

//  sfflip.addEventListener ('click', () => {
//      sfpop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });

//  hnlflip.addEventListener ('click', () => {
//      hnlpop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });

//  ontflip.addEventListener ('click', () => {
//      ontpop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });

//  yvrflip.addEventListener ('click', () => {
//      yvrpop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });

//  romeflip.addEventListener ('click', () => {
//      romepop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });

//  vieflip.addEventListener ('click', () => {
//      viepop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });

//  londonflip.addEventListener ('click', () => {
//      londonpop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });
//  amsflip.addEventListener ('click', () => {
//      amspop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });
//  fraflip.addEventListener ('click', () => {
//      frapop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });
//  sydflip.addEventListener ('click', () => {
//      sydpop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });

//  bneflip.addEventListener ('click', () => {
//      bnepop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });
//  melflip.addEventListener ('click', () => {
//      melpop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });
//  delflip.addEventListener ('click', () => {
//      delpop.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986__480.jpg";
//  });


 // const lapop = c
// const nypopup = document.querySelectorAll('.popup')[0];
// nyb.addEventListener ('onmouseover', () => {
//     nypop.innerHTML = 'block';
//  });

//  showface.addEventListener('onmouseout', () => {
//     nyturn.style.transform = "rotateY(180deg)";
//     laturn.style.transform = "rotateY(180deg)";
//  });


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

 
