`use strict`
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'usb', 'water-can', 'wine-glass'];
var img1 = document.querySelector(`#img1`);
var img2 = document.querySelector(`#img2`);
var img3 = document.querySelector(`#img3`);
var imagesSection = document.querySelector('#imagesSection');
// img1.src = `images/${name[0]}.jpg`;
// img1.alt = names[0];
// img1.title = names[0];

// img2.src = `images/${name[0]}.jpg`;
// img2.alt = names[0];
// img2.title = names[0];

// img3.src = `images/${name[0]}.jpg`;
// img3.alt = names[0];
// img3.title = names[0];

var click = 0;
var views = 0;
function Stuffs(name) {
    this.name = name;
    this.click = 0;
    this.views = 0;
    this.imagePath = `images/${this.name}.jpg`;
    Stuffs.all.push(this);
    
}
Stuffs.all = [];
for (var i = 0; i < names.length; i++) {
    new Stuffs(names[i]);
    console.log(names[i])
}
// var ibrahim=new Stuffs('ibrahim',1,2)
var min = 0;
var max = 15;
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var img1Stuffs,img2Stuffs,img3Stuffs;
function render() {
     img1Stuffs = Stuffs.all[randomNumber(0, Stuffs.all.length - 1)];
    Stuffs.views++;
     img2Stuffs = Stuffs.all[randomNumber(0, Stuffs.all.length - 1)];
    Stuffs.views++;
     img3Stuffs = Stuffs.all[randomNumber(0, Stuffs.all.length - 1)];
    Stuffs.views++;

    while (img1Stuffs.imagePath === img2Stuffs.imagePath || img2Stuffs.imagePath === img3Stuffs.imagePath || img1Stuffs.imagePath === img3Stuffs.imagePath) {
        
         img1Stuffs = Stuffs.all[randomNumber(0, Stuffs.all.length - 1)];
        
         img2Stuffs = Stuffs.all[randomNumber(0, Stuffs.all.length - 1)];
         img3Stuffs = Stuffs.all[randomNumber(0, Stuffs.all.length - 1)];
        console.log(img3Stuffs)
    }

    img1.setAttribute('src', img1Stuffs.imagePath);
    img1.setAttribute('alt', img1Stuffs.name);
    img1.setAttribute('title', img1Stuffs.name);

    img2.setAttribute('src', img2Stuffs.imagePath);
    img2.setAttribute('alt', img2Stuffs.name);
    img2.setAttribute('title', img2Stuffs.name);

    img3.setAttribute('src', img3Stuffs.imagePath);
    img3.setAttribute('alt', img3Stuffs.name);
    img3.setAttribute('title', img3Stuffs.name);
}
render();
imagesSection.addEventListener('click', handleClickOnStuffs);
var totalClicks = 0;
function handleClickOnStuffs(event) {
    
// for(var i=0;i<Stuffs.all.length;i++){
    if (totalClicks < 25) {
        if (event.target.id !== 'imagesSection') {
            if (event.target.id == 'img1') {
                img1Stuffs.click++;
                img1Stuffs.views++;
               
            } if (event.target.id == 'img2') {
                img2Stuffs.click++;
                img2Stuffs.views++;
       
            } else if (event.target.id == 'img3') {
                img3Stuffs.click++;
                img3Stuffs.views++;
                // console.log('third',Stuffs.all[i].click)

            }
            totalClicks++;
            render();
        } }
    else {
        console.log('more than 25 clicks');
        console.log(totalClicks);
        console.log('views is :', views);
        imagesSection.removeEventListener('click', handleClickOnStuffs);
        render2();
    }

} console.log(click);
function render2(){
    var ulE1 =document.getElementById('views');
    for (var i=0 ;i<Stuffs.all.length ;i++){
        var liE1 =document.createElement('li');
        ulE1.appendChild(liE1);
        console.log('loop',Stuffs.all[i].click)
        liE1.textContent =`${Stuffs.all[i].name} has ${Stuffs.all[i].click} clicks and ${Stuffs.all[i].views} view`;
    }
}
console.log(Stuffs.all)