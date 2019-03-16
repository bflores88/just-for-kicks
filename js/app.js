// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

var notHi = document.getElementById('details');
notHi.addEventListener('click', notHawaii);

function notHawaii(){
    console.log('test');
    alert('Not Available in Hawaii.');
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

var hideD1 = document.getElementById('name1');
hideD1.addEventListener('mouseover', hideDesc1);


function hideDesc1(){
    var hide1 = document.getElementById('descrip1');
    if(hide1.style.display === 'block'){
        hide1.style.display = 'none';
    } else {
        hide1.style.display = 'block';
    }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

var getName2 = document.getElementById('name2');
getName2.addEventListener('click', showDes2);

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2'

var newD2 = document.createElement('div');
newD2.id = 'descrip2';
newD2.style.display = 'none'
newD2.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.";
name2.appendChild(newD2);

function showDes2(){
    if(descrip2.style.display !== 'block'){
        descrip2.style.display = 'block';
    } else {descrip2.style.display = 'none'}
} 

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

var allThumbs = document.getElementsByClassName('far fa-thumbs-up');
for(var i=0; i<allThumbs.length; i++){
    var createThumbCounter = document.createElement('div');
    createThumbCounter.className = 'thumbCounter';
    createThumbCounter.style.display = 'inline';
    createThumbCounter.style.marginLeft = '5px'
    createThumbCounter.innerHTML = '0';
    allThumbs[i].appendChild(createThumbCounter);
    allThumbs[i].addEventListener('click', thumbItUp);
}

function thumbItUp(){
    var countUp = this.querySelector('.thumbCounter');
    countUp.innerHTML ++;

}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

var getPlus = document.getElementsByClassName('far fa-plus-square');

getPlus[0].addEventListener('click', incrementPriceV);

var changeAirJordanV = document.getElementById('price4');
var airJordanVChildren = changeAirJordanV.childNodes;
var airJordanVPriceChange = airJordanVChildren[0];

var airJorVPriceIncr = 58000;

function incrementPriceV(){
    airJorVPriceIncr = airJorVPriceIncr + 58000;
    airJordanVPriceChange.nodeValue = airJorVPriceIncr.toLocaleString('ja-JP');
}

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

var getMinus = document.getElementsByClassName('far fa-minus-square');

getMinus[0].addEventListener('click', decrementPriceVI);

var changeAirJordanVI = document.getElementById('price5');
var airJordanVIChildren = changeAirJordanVI.childNodes;
var airJordanVIPriceChange = airJordanVIChildren[0];

var airJorVIPriceDecr = 2500;

function decrementPriceVI(){
    airJorVIPriceDecr = airJorVIPriceDecr - 2500;
    airJordanVIPriceChange.nodeValue = airJorVIPriceDecr;
}

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image.

var getImgs = document.getElementsByTagName('img');
console.log(getImgs);
var changeImg = getImgs[6];

changeImg.addEventListener('mouseover', changeColor);

function changeColor(){
    if(this.src === 'https://bit.ly/2UHbMRc'){this.src = "https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg"} else {this.src = 'https://bit.ly/2UHbMRc';}
}

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

var increaseImg = getImgs[7];

increaseImg.addEventListener('click', growBy50);

function growBy50(){
    if(this.style.transform === ''){
        this.style.transform = 'scale(1.5)';
    } else {
        this.style.transform = '';
    }
}

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

getPlus[1].addEventListener('click', increasePrice);

getMinus[1].addEventListener('click', decreasePrice);

var changeStuff = document.getElementById('price8');
var theChildren = changeStuff.childNodes;
var thePriceBox = theChildren[0];

var plusMinus = 7000;

function increasePrice(){
    plusMinus = plusMinus + 7000;
    thePriceBox.nodeValue = plusMinus;
}

function decreasePrice(){
    plusMinus = plusMinus - 7000;
    thePriceBox.nodeValue = plusMinus;
}

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.

getImgs[9].addEventListener('click', changeImg2);

function changeImg2(){
    if(this.src === 'https://bit.ly/2qAJ1tk'){
        this.src = 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-28-photo-blue-white-black-011977_1.jpg';
    } else {
        this.src = 'https://bit.ly/2qAJ1tk';
    }
}