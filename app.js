`use strict`
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'usb', 'water-can', 'wine-glass'];
var img1 = document.querySelector(`#img1`);
var img2 = document.querySelector(`#img2`);
var img3 = document.querySelector(`#img3`);
var imagesSection = document.querySelector('#imagesSection');

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
}
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
    
    if (totalClicks < 25) {
        if (event.target.id !== 'imagesSection') {
            if (event.target.id == 'img1') {
                img1Stuffs.click++;
                
            } if (event.target.id == 'img2') {
                img2Stuffs.click++;
                
            } else if (event.target.id == 'img3') {
                img3Stuffs.click++;
            }
            totalClicks++;
            img1Stuffs.views++;
            img2Stuffs.views++;
            img3Stuffs.views++;
            render();
        } }
    else {
        console.log('more than 25 clicks');
        console.log(totalClicks);
        imagesSection.removeEventListener('click', handleClickOnStuffs);
        render2();
        renderChartArray();
        
    }

} 

function render2(){
    var ulE1 =document.getElementById('views');
    for (var i=0 ;i<Stuffs.all.length ;i++){
        var liE1 =document.createElement('li');
        ulE1.appendChild(liE1);
        liE1.textContent =`${Stuffs.all[i].name} has ${Stuffs.all[i].click} clicks and ${Stuffs.all[i].views} view`;
    }
}
function renderChartArray(){
    var ctx = document.getElementById('myChart').getContext('2d');

    var itemsName =[];
    var itemsClick =[];
    var itemsView =[];

    for (var i=0 ;i<Stuffs.all.length ;i++){
    
    var testing = Stuffs.all[i].name;   
    var itemsClick1 = Stuffs.all[i].click;
    var itemsView1 = Stuffs.all[i].views;
    // console.log(Stuffs.all[i]);
    itemsName.push(testing)
    //itemsName.push(itemsName1);
     itemsClick.push(itemsClick1);
    itemsView.push(itemsView1);
    console.log(itemsView1);
    }
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: itemsName,
        datasets: [{
            label: '# of Votes',
            data: itemsClick,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '# of Views',
            data: itemsView,
            backgroundColor: [
                'rgba(210, 99, 132, 0.2)',
                'rgba(154, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(121, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(210, 99, 132, 1)',
                'rgba(154, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(121, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}
console.log(myChart);
// renderChartArray();