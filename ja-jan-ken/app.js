let heroScore = 0;
let oppsScore = 0;

// the below text signifies that it's in a span tag
const heroScore_span = document.getElementById('hero-score');
const oppsScore_span = document.getElementById("opps-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const goku_div = document.getElementById("goku")
const naruto_div = document.getElementById("naruto")
const luffy_div = document.getElementById("luffy")

// Button Listeners

function getOppsChoice() {
    const options = ['Goku', 'Naruto', 'Luffy'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return options[randomNumber];
}

function winStatement(hero, opps) {
    if (hero === 'Goku' && opps === 'Naruto') 
    return `KaaameehaameHAAA! Goku has beaten Naruto and saved the planet. Goku wins!`;

    if (hero === 'Naruto' && opps === 'Luffy') 
    return `RAASENGAN! Naruto beat Goku and saved the village. Naruto wins!`;

    if (hero === 'Luffy' && opps === 'Goku') 
    return `Gum Gum BAZOOKAAA! Goku tripped on Luffy's leg and fell out of the ring. Luffy Wins!`;
    
}

function loseStatement(hero, opps) {
    if (hero === 'Naruto' && opps === 'Goku') 
    return `Even with Baryon Mode, Naruto couldn't withstand the power of the Saiyan. Naruto Loses.`;

    if (hero === 'Goku' && opps === 'Luffy') 
    return `No fair! Goku tripped over Luffy's Leg. Better luck next time.`;

    if (hero === 'Luffy' && opps === 'Naruto') 
    return `Naruto's Rasengan overwelms the Strawhat Pirate! He must go and recover with a feast.`;
}

function drawStatement(hero, opps) {
    if (hero === 'Goku' && opps === 'Goku')
    return `Wait a minute!? Is that Goku Black? I better go get Vegeta! Goku postpones the match.`;
    if (hero === 'Naruto' && opps === 'Naruto')
    return `Naruto summons a shadow clone and challenges him to a ramen eating contest! It doesn't end well. The next match will be a race to the toilet.`;
    if (hero === 'Luffy' && opps === 'Luffy')
    return `The Luffy's end up in an.. Entanglement. This match will be postponed until we can untangle them...`;
}

function win(hero, opps) {
    heroScore++;
    heroScore_span.innerHTML = heroScore;
    result_div.innerHTML = winStatement(hero, opps);
//     setTimeout(function() { document.getElementById(hero).classList.add('green-glow')}, 300);
// 
}

function lose(hero, opps) {
    oppsScore++;
    oppsScore_span.innerHTML = oppsScore;
    result_div.innerHTML = loseStatement(hero, opps);
    // document.getElementById(hero).classList.add('red-glow');
}

function draw(hero, opps) {
    heroScore_span.innerHTML = heroScore;
    oppsScore_span.innerHTML = oppsScore;
    result_div.innerHTML = drawStatement(hero, opps);
    // document.getElementById(hero).classList.add('gray-glow');
}



function game(heroChoice) {
    const oppsChoice = getOppsChoice();
    switch (heroChoice + ' ' + oppsChoice) {
        case 'Goku Naruto':
        case 'Naruto Luffy':
        case 'Luffy Goku':
            win(heroChoice, oppsChoice);
            break;
        case 'Naruto Goku':
        case 'Luffy Naruto':
        case 'Goku Luffy':
            lose(heroChoice, oppsChoice);
            break;
        case 'Goku Goku':
        case 'Naruto Naruto':
        case 'Luffy Luffy':
            draw(heroChoice, oppsChoice);
            break;
    }
}


function main() {
    goku_div.addEventListener('click', function() {
        game('Goku');
        console.log(`You've chosen Goku as your hero!`);   
    })
    
    naruto_div.addEventListener('click', function() {
        game('Naruto');
        console.log(`You've chosen Naruto as your hero!`);
    })
    
    luffy_div.addEventListener('click', function() {
        game('Luffy');
        console.log(`You've chosen Luffy as your hero!`);
    })
}

main();
