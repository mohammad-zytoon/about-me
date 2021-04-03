'use strict'
let score = 0;
let userName = prompt('Please enter your Name?');

alert(' hi ' + userName + ' you are welcome in our page please answer the next questions');
function questionOne() {
    let client = prompt('Did you think am a horses lover?');

    client = client.toUpperCase();

    if (client == 'YES' || client == 'Y') {

        console.log('horse lover');
        score++;
        alert('yes i am you will be very happy in my page');

    } else if (client == 'NO' || client == 'N') {

        console.log('client status: ' + client);
        alert('wrong i love it you have to take a looke and you will change your mind');
    }
}

function questionTwo() {
    let horseType = prompt('are you think that i thouht arabian horse is the pretiest type?');

    horseType = horseType.toUpperCase();

    if (horseType == 'YES' || horseType == 'Y') {

        console.log('the answer:' + horseType);
        score++;
        alert('we are in the same opp');

    } else if (horseType == 'NO' || horseType == 'N') {

        console.log('the answer:' + horseType);
        alert('we are in the different in opp');
    }
}

function questionThree() {
    let horseRasident = prompt('did you think i have ever raised horses?');

    horseRasident = horseRasident.toUpperCase();

    if (horseRasident == 'YES' || horseRasident == 'Y') {


        score++;
        alert('you are right i am a lucky person');

    } else if (horseRasident == 'NO' || horseRasident == 'N') {


        alert('no i did you have to buy one');
    }
}

function questionFour() {
    let raider = prompt('do you think i have ever ride a horse?');

    raider = raider.toUpperCase();

    if (raider == 'YES' || raider == 'Y') {


        score++;
        alert('i am sure its a nice experiment');

    } else if (raider == 'NO' || raider == 'N') {


        alert('you have to try it');
    }
}

function questionFive() {
    let feedback = prompt('is our web nice?');

    feedback = feedback.toUpperCase();

    if (feedback == 'YES' || feedback == 'Y') {


        score++;
        alert('We are glad you shared this answer');

    } else if (feedback == 'NO' || feedback == 'N') {

        alert('If you have any comment, please provide it to us');

        alert(' Than you  ' + userName + 'for visiting our page');
    }
}



function questionSix() {
    let i = 0;
    do {
        let numberGess = prompt('please guess the right number between (1-7)?');

        if (numberGess == 4) {
            score++;
            alert('you are good in guessing you choose the rghit number');

            break;

        } else if (numberGess > 4) {
            alert('Too High');

        } else if (numberGess < 4) {
            alert('Too Low');
        }

        if (i == 3) {
            alert('Sorry you exhausted all attempts the true vlue is: 4');
        }
        i++;
    } while (i < 4);

}


function questionSeven() {
    let horsesColor = ['black', 'brown', 'white'];

    for (let i = 0; i < 6; i++) {


        let clientChoice = prompt('please guess one of the best three colors for horses from this colors\n(red, green, white, black, brown, yellow, grey)?');
        clientChoice = clientChoice.toLowerCase();


        for (let j = 0; j < horsesColor.length; j++) {
            //console.log(j);

            if (horsesColor[j] === clientChoice) {
                score++;
                alert('good answer one of the best');
                i = 7;
                break;
            }
        }



        if (i == 5) {

            alert('Sorry you finish your attempt, the color choices are:\n Black, brown and White');

        }

    }
}
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
alert('well done You have a (' + score + ') correct answer please visit our web always thx');









