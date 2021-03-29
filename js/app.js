'use strict'

let userName= prompt('Please enter your Name?');

alert(' hi ' + userName + ' you are welcome in our page please answer the next questions');

let client= prompt('are you one of horses lover?');

client = client.toUpperCase();

if (client == 'YES' || client == 'Y') {
    
    console.log('horse lover');

    alert('you will be very happy in my page');

 }else if (client == 'NO' || client == 'N') {

    console.log('client status: '+client );
    alert('you have to take a looke and you will change your mind');
}


let horseType= prompt('are you think arabian horse is the pretiest type?');

horseType = horseType.toUpperCase();

if (horseType == 'YES' || horseType == 'Y') {
    
    console.log('the answer:' + horseType);

    alert('we are in the same opp');

 }else if (horseType == 'NO' || horseType == 'N') {

    console.log('the answer:' + horseType);
    alert('we are in the different in opp');
}

let horseRasident= prompt('Have you ever raised horses?');

horseRasident = horseRasident.toUpperCase();

if (horseRasident == 'YES' || horseRasident == 'Y') {
    
    //console.log('the answer:' + horseRasident);

    alert('you are a lucky person');

 }else if (horseRasident == 'NO' || horseRasident == 'N') {

    //console.log('the answer:' + horseRasident);
    alert('you have to buy one');
}


let raider= prompt('Have you ever ride a horse?');

raider = raider.toUpperCase();

if (raider == 'YES' || raider == 'Y') {
    
    //console.log('the answer:' + raider);

    alert('i am sure its a nice experiment');

 }else if (raider == 'NO' || raider == 'N') {

   // console.log('the answer:' + raider);
    alert('you have to try it');
}


let feedback= prompt('is our web nice?');

feedback = feedback.toUpperCase();

if (feedback == 'YES' || feedback == 'Y') {
    
    //console.log('the answer:' + feedback);

    alert('We are glad you shared this answer');

 }else if (feedback == 'NO' || feedback == 'N') {

   // console.log('the answer:' + raider);
    alert('If you have any comment, please provide it to us');

    alert(' Than you  ' + userName +'for visiting our page' );
}




    




    