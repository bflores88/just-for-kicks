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

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
