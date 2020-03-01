`use strict`
var names =['bag' ,'banana' ,'bathroom' ,'boots' ,'breakfast' ,'bubblegum' ,'dog-duck' ,'dragon' ,'pen' ,'pet-sweep' ,'scissors' ,'usb' ,'water-can' ,'wine-glass'];
var img1 = document.querySelector(`#img1`);
var img2 = document.querySelector(`#img2`);
var img3 = document.querySelector(`#img3`);
var imagesSection =document.querySelector('#imagesSection');
img1.src = `images/${name[0]}.jpg`;
img1.alt = names[0];
img1.title = names[0];

img2.src = `images/${name[0]}.jpg`;
img2.alt = names[0];
img2.title = names[0];

img3.src = `images/${name[0]}.jpg`;
img3.alt = names[0];
img3.title = names[0];
stuffs.all=[];
var click = 0;
var vots =0 ;
function stuffs(name){
    this.name =name ;
   
    this.imagePath=`images/${this.name}.jpg`;
    stuffs.all.push(this);

}
for(var i=0 ;i<names.length ;i++){
    new stuffs(names[i]);
}
var min =0;
var max =15;
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1) ) + min;
  }
function render(){
    var img1Stuffs =stuffs.all[randomNumber(0,stuffs.all.length-1)];
    var img2Stuffs =stuffs.all[randomNumber(0,stuffs.all.length-1)];
    var img3Stuffs =stuffs.all[randomNumber(0,stuffs.all.length-1)];
    while(img1Stuffs.imagePath === img2Stuffs.imagePath || img2Stuffs.imagePath === img3Stuffs.imagePath || img1Stuffs
        .imagePath === img3Stuffs.imagePath){

    var img1Stuffs =stuffs.all[randomNumber(0,stuffs.all.length-1)];
    var img2Stuffs =stuffs.all[randomNumber(0,stuffs.all.length-1)];
    var img3Stuffs =stuffs.all[randomNumber(0,stuffs.all.length-1)];
        }
      
    img1.setAttribute('src',img1Stuffs.imagePath);
    img1.setAttribute('alt',img1Stuffs.name);
    img1.setAttribute('title',img1Stuffs.name);
   
    img2.setAttribute('src',img2Stuffs.imagePath);
    img2.setAttribute('alt',img2Stuffs.name);
    img2.setAttribute('title',img2Stuffs.name);  
    
    img3.setAttribute('src',img3Stuffs.imagePath);
    img3.setAttribute('alt',img3Stuffs.name);
    img3.setAttribute('title',img3Stuffs.name);
}
render();
// addEventListener('click',handleClickOnStufs);
// imagesSection.addEventlistener;
imagesSection.addEventListener('click',handleClickOnStufs);
var totalClicks =0;
// var click =0;
// console.log(img1);
function handleClickOnStufs(event){
  if(totalClicks<25){
    if(event.target.id !== 'imagesSection' ){
     if(event.target.id == 'img1'){
        click++;
        console.log(click);
        
       }if(event.target.id == 'img2'){
           click++;
       }else if(event.target.id == 'img3'){
           click++;
           
       }
        totalClicks++;
        img1.vots++;    
        img2.vots++;
        img3.vots++;
        render();
    }
    render2();

    }
    else{
        console.log('more than 25 clicks');
  }
  
}console.log(click);
 function render2(){
     var ulE1 =document.getElementById('views');
     for (var i=0 ;i<stuffs.all.length ;i++){
        
         var liE1 =document.createElement('li');
         liE1.textContent =`${stuffs.all[i].name} has ${stuffs.all[i].click} clicks and ${stuffs.all[i].vots} view`;
         ulE1.appendChild(liE1);
         render();
     }
 }