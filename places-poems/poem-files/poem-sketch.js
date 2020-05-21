var dropdownDay;
var dropdownMonth;
var dropdownYear;

var dayWordsTime = ["yesterday,", "at last,", "nevertheless,", "finally,", "with a slight sense of doubt,", "as per usual,", "like a wilting rose,", "as the sun set,", "at dawn,", "like milky tea,", "on a monday,", "after 11 seconds,", "every now and again,", "upon waking,", "at the very beginning,", "before you even saw me,", "with delicate strings of hesitation,", "for reasons i do not know,", "in the infinity,", "from the origin,", "even before you knew,", "even after the rain had passed,", "before the storm settled over the city,", "as if nothing ever made me cry,", "from the balcony on the 5th floor,", "on a rooftop,", "overlooking the city,", "under my pillow,", "during breakfast,", "in an 8th floor flat,", "on the edge of the pavement,", "10:34 pm,", "after a long walk,", "it's been a long winter,", "after dusk settles around your curls", "through the shimmer of a muted moon", "intentionally so,","it was gentle and deliberate,", "with a gentle ripple across space", "all of time & all of space,", "looking at the space between you and who you were,", "when thinking about days in between the days,", "when the turbulance runs from your chest to mine,", "the crystal glove seeks", "while seeking out the feeling of being needed", "your soft face turns away from", "your waist curves around the possibility,", "suddenly i see it,", "after a while i feel it,", "the morning brings", "i pulled this from a set of memories,", "it was unbearable but it was kind,", "it was quiet, i thought about last year", "enough,", " after the record stops playing,", "i should but i don't,", "the sky turns pink,", "i miss my home,","i miss the softness of", "i didn't understand","as you told me: it was the longing,", "it's of no matter now, i see","after the party,"];

var monthWordsVerb = [" I sensed", " I had", " I marvelled at", " I thought about", " you saw", " you felt", " you tumbled and discovered", " I reached out and my finger tips brushed", " I felt the breeze like", " you took my hand", " I let go of", " you offered me"];

var yearWordsNoun = ["a thunderous desire.", "a drop of water falling from a branch.", "the light that fades away.", "the notebook.", "a traveler's idea of time and space.", "the outer cosmos of a train track.", "the fashionable frames.", "a knife through soft butter.", "the sparkle and the glamour.", "the dreams we encounter on a hot summer night.", "burnt toast and a vase of wild flowers.", "a picture of the sea.", "the sun that never sets.", "bars and safety nets.", "late nights while the fan hums gently in the corner of your room.", "the soft sound of the tv in the other room.", "pasta sauce on the stovetop, so I'm not the only one that's awake.", "the burden of knowing better.", "the understated.", "the things that go on and on.", "the neverending cup of tea.", "the idea of letting go.", "the idea of holding on.", "the relentless drum inside your legs.", "the sky and the land.", "the mistakes that were in a box of treasures.", "a habit that's hard to reach.", "an element of desire.", "the fatal kiss of a pear too soft.", "a winking eye, a waving hand.", "a heightened sense of urgency.", "clocks that never made the boat.", "a bridge between two mountains.", "the likeliness of us meeting again.", "the thought of you looking out of the window.", "the eyes that hurt from digging into corners.", "you.", "a gentle tremble.", "a bird flying longer than it thought possible.", "the eventualities.", "the clock on the wall opposite from your hand.", "the older version of a bouquet just picked at dawn.", "a silence that holds the truth.", "a vase without water.", "a statement without cause.", "the impact of my words.", "the journals from that yea.r", "a page from a book that you never read.", "the glow of a lamp from the apartment across the street.", "people offering lamps for rooms that are too dark.", "a heavy duvet over a flighty heart.", "a quiet street.", "the silence at 4 am.", "the fire but not the flame.", "a deep longing.", "a mind able to rest.", "the unlikelyhood of making a mess.", "the cars gently floating away into the night.", "the window with a light on, five blocks away.", "a bruised knee.", "everybody that feels a bit lonely.", "an undressed vase.", "an empty vase.", "a delicate flower, drying on the edge of the fire escape.", "the keys to a mansion i've never seen.", "an ugly trinket that you loved.", "the thought that maybe it's all for nothing.", "the feeling that time is not wasted.", "the fleeting feeling of knowing.", "an unknowing of sorts.", "a collection of trinkets that guard my home.", "the moon."];

var dayPhrases = ["how can time be so liquid?", "it passed like a train going on to other places", "count to ten if you're feeling lonely", "I read the same book twice", "we saw movies, we ate breakfast", "it's the sound of the highway, not the atmosphere", "who's to say that we are not in love?", "your skin is soft and it holds no temples", "there was no way we'd make it, i walked you home", "it was ok in the end", "where have all the fire escapes been moved to?", "i didn't know about the trends", "your arm across my waist, a frame in my mind", "you unwrap my heart, slowly we tumble", "however you felt back then, however you feel now", "not long enough for it to break me", "on every road side, a lonely song", "somewhere for belonging", "i wish i knew", "reading books at ungodly hours", "lemon tea and cute porcelain", "nothing to write home about", "but it was enough", "i move along with the crowd", "but sometimes i look back and I see you, staring at the sun", "it was all over the newspapers", "it's sad but it also makes sense", "somehow there was a plan, i saw it on the map", "mischief and a jars of butter biscuits", "how many ways can a leaf fall to the ground", "behind the television set, obviously"];

// create a function to load 12 images, thank you PoYo on SO for asking your question 3 yrs ago, it helped me figure this out!

var images = [];

function preload() {
    for (var i = 0; i < 12; i++) {
        
    images[i] = loadImage("back" + i + ".jpg");
    
} // end for loop
    
} // end preload function
    

    
function setup() { 
    
    // Create a canvas 
    var canvas = createCanvas(500, 350); 
        canvas.parent('canvasp');
    
    // create a line of text with instructions
    p = createP('enter a date to view corresponding poem');
        p.parent('instructions');
    
    
    // Create dropdown menu objects  
    dropdownDay = createSelect();
        dropdownDay.parent('dropdownday');
    
    dropdownMonth = createSelect(); 
        dropdownMonth.parent('dropdownmonth');
    
    dropdownYear = createSelect(); 
        dropdownYear.parent('dropdownyear');
    
    button = createButton('submit');
        button.mousePressed(displayPoem);
    
    // Set options for day
    for (var i = 0; i < 31; i++) {
        dropdownDay.option(1+i); 
    }
    
    // Set options for month
    for (var i = 0; i < 12; i++) {
        dropdownMonth.option(1+i); 
    }
    
    // Set options for year
    for (var i = 1949; i < 2021; i++) {
        dropdownYear.option(1+i); 
    }
    
    // style DOM objects
    p.style('font-family:monospace');
    
    button.style('font-family:monospace');
  

    dropdownDay.style('font-family:monospace');
    dropdownDay.style('background-color:pink');
    dropdownMonth.style('font-family:monospace');
    dropdownMonth.style('background-color:pink');
    dropdownYear.style('font-family:monospace');
    dropdownYear.style('background-color:pink');

    background(100, 50); 
    
    // load images ready for when submit is clicked
    preload();
} 



function displayPoem() {
  
// set background image according to month value
  image(images[parseInt(dropdownMonth.value()) - 1], 0, 0);
      
// start of poem setup
   fill(0);
    
// FIRST LINE    
    let firstLine = dayWordsTime[parseInt(dropdownDay.value()) - 1] + monthWordsVerb[parseInt(dropdownMonth.value()) - 1];

    let firstLineW = textWidth(firstLine);
    
    fill(255);
    noStroke();
    beginShape();
    vertex(70, 85);
    vertex(90 + firstLineW, 85);
    vertex(91 + firstLineW, 102);
    vertex(69, 101);
    
    endShape();
    
    
    fill(0);
    text(firstLine, 75, 98);
    
// SECOND LINE
    
    let secondLine = yearWordsNoun[parseInt(dropdownYear.value()) - 1950];
    
    let secondLineW = textWidth(secondLine);
    
    fill(255, 200);
    noStroke();
    beginShape();
    vertex(70, 105);
    vertex(90 + secondLineW, 105);
    vertex(91 + secondLineW, 122);
    vertex(69, 121);
    endShape();
    
    fill(0);
    text(secondLine, 75, 118);
    
// THIRD LINE
    
    let thirdLine = dayPhrases[parseInt(dropdownDay.value()) - 1];
    
    let thirdLineW = textWidth(thirdLine);
    
    fill(255,200);
    noStroke();
    beginShape();
    vertex(70, 125);
    vertex(90 + thirdLineW, 125);
    vertex(91 + thirdLineW, 142);
    vertex(69, 141);
    endShape();
    
    fill(0);
    text(thirdLine, 75, 138);

    
// FOURTH LINE
    let fourthLine = dayWordsTime[floor((parseInt(dropdownDay.value()) / 3) * (parseInt(dropdownMonth.value()) / 2))];
    
    let fourthLineW = textWidth(fourthLine);
    
    fill(255, 200);
    noStroke();
    beginShape();
    vertex(70, 165);
    vertex(90 + fourthLineW, 165);
    vertex(91 + fourthLineW, 182);
    vertex(69, 181);
    endShape();
    
    fill(0);
    text(fourthLine, 75, 178);
  
    
    
// FIFTH LINE
    let fifthLine = yearWordsNoun[parseInt(dropdownDay.value()) * 2];
    
    let fifthLineW = textWidth(fifthLine);
    
    fill(255, 200);
    noStroke();
    beginShape();
    vertex(70, 185);
    vertex(90 + fifthLineW, 185);
    vertex(91 + fifthLineW, 202);
    vertex(69, 201);
    endShape();
    
    fill(0);
    text(fifthLine, 75, 198);
    
}
