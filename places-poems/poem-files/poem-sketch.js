var dropdownDay;
var dropdownMonth;
var dropdownYear;

var dayWordsTime = ["yesterday,", "at last,", "nevertheless,", "finally,", "with a slight sense of doubt,", "as per usual,", "like a wilting rose,", "as the sun set,", "at dawn,", "like milky tea,", "on a monday,", "after 11 seconds,", "every now and again,", "upon waking,", "at the very beginning,", "before you even saw me,", "with delicate strings of hesitation,", "for reasons i do not know,", "in the infinity,", "from the origin,", "even before you knew,", "even after the rain had passed,", "before the storm settled over the city,", "as if nothing ever made me cry,", "from the balcony on the 5th floor,", "on a rooftop,", "overlooking the city,", "under my pillow,", "during breakfast,", "in an 8th floor flat,", "on the edge of the pavement,"];

var monthWordsVerb = [" I sensed", " I had", " I marvelled at", " I thought about", " you saw", " you felt", " you tumbled and discovered", " I reached out and my finger tips brushed", " I felt the breeze", " you took my hand", " I let go of", " you offered me"];

var yearWordsNoun = ["a thunderous desire", "a drop of water falling from a branch", "the light that fades away", "the notebook", "a traveler's idea of time and space", "the outer cosmos of a train track", "the fashionable frames", "a knife through soft butter", "the sparkle and the glamour", "the dreams we encounter on a hot summer night", "burnt toast and a vase of wild flowers", "a picture of the sea", "a bicycle not made for two", "bars and safety nets", "late nights while the fan hums gently in the corner of your room", "the soft sound of the tv in the other room", "pasta sauce on the stovetop, so I'm not the only one that's awake", "the burden of knowing better", "the understated", "the things that go on and on", "the neverending cup of tea", "the idea of letting go", "the idea of holding on", "the relentless drum inside your legs", "the sky and the land", "the mistakes that were in a box of treasures", "a habit that's hard to reach", "an element of desire", "the fatal kiss of a pear too soft", "a winking eye, a waving hand", "a heightened sense of urgency", "clocks that never made the boat", "a bridge between two mountains", "the likeliness of us meeting again", "the thought of you looking out of the window", "the eyes that hurt from digging into corners", "you", "them", "a bird flying for longer than it can imagine", "the eventualities", "the clock on the wall opposite from your hand", "the older version of a bouquet just picked at dawn", "a silence that holds the truth", "a vase without water", "a statement without cause", "the impact of my words", "the journals from that year", "a page from a book that you never read", "the glow of a lamp from the apartment across the street", "people offering lamps for rooms that are too dark", "a heavy duvet over a flighty heart", "a quiet street", "the silence at 4 am", "the fire but not the flame", "a deep longing", "a mind able to rest", "the unlikelyhood of making a mess", "the cars gently floating away into the night", "the window with a light on, five blocks away", "a bruised knee", "everybody that feels a bit lonely", "an undressed vase", "an empty vase", "a delicate flower, drying on the edge of the fire escape", "the keys to a mansion i've never seen", "an ugly trinket that you loved", "the thought that maybe it's all for nothing", "the feeling that time is not wasted", "the fleeting feeling of knowing", "an unknowing of sorts", "a collection of trinkets that guard my home", "the moon"];

var dayPhrases = ["how can time be so liquid?", "it passed like a train going on to other places", "count to ten if you're feeling lonely", "I read the same book twice", "we saw movies, we ate breakfast", "i truly believe it is sufficient", "who's to say that we are not in love", "your skin is soft and it holds no temples", "there was no way we'd make it, i walked you home", "it was ok in the end", "where have all the fire escapes been moved to?", "i didn't know about the trends", "your arm across my waist, a frame in my mind", "you respected me", "however you felt back then, however you feel now", "not long enough for it to break me", "on every road side, a lonely song", "somewhere for belonging", "i wish i knew", "reading books at ungodly hours", "lemon tea and cute porcelain", "nothing to write home about", "but it was enough", "i move along with the crowd", "but sometimes i look back and I see you, staring at the sun", "it was all over the newspapers", "it's sad but it also makes sense", "somehow there was a plan, i saw it on the map", "mischief and a jars of butter biscuits", "how many ways can a leaf fall to the ground", "behind the television set, obviously"];

var dayMonthPhrases = [];



    
function setup() { 
    // Create a canvas 
    createCanvas(450,300); 
    createP('');
    // Create a dropdown menu object  
    dropdownDay = createSelect(); 
    
    dropdownMonth = createSelect(); 
    
    dropdownYear = createSelect(); 
    
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
    
   
  

       dropdownDay.style('font-family:monospace');
    dropdownDay.style('background-color:pink');
    
    dropdownMonth.style('font-family:monospace');
    dropdownMonth.style('background-color:pink');
    
     dropdownYear.style('font-family:monospace');
    dropdownYear.style('background-color:pink');

    
    
} 

function displayPoem() {
    
 background(230);
    fill(0);
   text(dayWordsTime[parseInt(dropdownDay.value()) - 1] + monthWordsVerb[ parseInt(dropdownMonth.value()) - 1], 75, 100);
    
    text(yearWordsNoun[ parseInt(dropdownYear.value()) - 1950], 75, 120);
    
    text(dayPhrases[parseInt(dropdownDay.value()) - 1], 75, 140);
    
   
    text(dayWordsTime[floor((parseInt(dropdownDay.value()) / 3) * (parseInt(dropdownMonth.value()) / 2))], 75, 180);
     text(yearWordsNoun[parseInt(dropdownDay.value()) * 2], 75, 200);
    
    
     
}


function draw() { 

   
 
} 
