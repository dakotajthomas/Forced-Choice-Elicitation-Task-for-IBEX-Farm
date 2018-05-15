var shuffleSequence = seq("intro", sepWith("sep", seq("practice", "begin", rshuffle(anyOf(startsWith("ms"), startsWith("mo"), startsWith("c"), startsWith("f"))), "sr", "end")));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(not natural at all)", rightComment: "(very natural)",
        hideProgressBar: false
    },
    "Question", {
        hasCorrect: false,
        hideProgressBar: false
    },
    "Message", {
        hideProgressBar: false
    },
    "Form", {
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var practiceItemMessage = true;

var items = [


    ["sep", "Separator", { }],

//INTRODUCTION//
    ["intro", "Form", {
        html: { include: "FCET_Introduction.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["sep", "Separator", { }],

//BEGIN EXPERIMENT//
    ["begin", "Message", {html: "The experiment will now begin.", transfer: 3000} ],
   
    ["sep", "Separator", { }],

//END EXPERIMENT//
    ["end", "Form", {html: {include: "FCET_TheEnd.html" }} ],
   
    ["sep", "Separator", { }], 
    
//SEND RESULTS//
    ["sr", "__SendResults__", { }],
    
    ["sep", "Separator", { }], 
    
//PRACTICE//
    ["practice", "Form", {html: 'A: Welcome to the study. <p>B: This is <select name="practice1.1",class = "obligatory">,<option value="zero">---</option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="practice1.2",class = "obligatory">,<option value="zero">---</option>, <option value="first">first</option>,<option value="second">second</option>,<option value="third">third</option>,</select> practice item.'}],
    ["practice", "Form", {html: 'A: What does Joe like to do? <p>B: Jo likes <select name="practice2",class = "obligatory">,<option value="zero">---</option>,<option value="to go">to go</option>,<option value="going">going</option>,<option value="went">went</option>,<option value="had gone">had gone</option>,</select> to school.'}], 
    ["practice", "Form", {html: 'A: What does he think? <p>B: He <select name="practice3",class = "obligatory">,<option value="zero">---</option>,<option value="did think">did think</option>,<option value="thought">thought</option>,<option value="thinks">thinks</option>,<option value="is thinking">is thinking</option>,</select> she has pretty hair.'}], 
    ["practice", "Form", {html: 'A: I have Mrs. Kruse! <p>B: Do you like <select name="practice4",class = "obligatory">,<option value="zero">---</option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> teacher?'}], 
    ["practice", "Form", {html: 'A: Do you like Mr. Fink? <p>B: I cannot stand <select name="practice5",class = "obligatory">,<option value="zero">---</option>,<option value="your">your</option>,<option value="my">my</option>,<option value="his">his</option>,</select> math class.'}],     
    
    ["sep", "Separator", { }],
    
//Experimental Items//
  //Countable//
    //boy//
    ["c1-dp","Form", {html: 'A: What did the neighbor say about them? <p>B: He said that <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="boy">boy</option>,<option value="boys">boys</option>,</select> were playing in the park next door.'}], 
    ["c1-ds","Form", {html: 'A: Which of the two broke the swing? <p>B: I think it was <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="boy">boy</option>,<option value="boys">boys</option>,</select> with the blue hair.'}], 
    ["c1-i", "Form", {html: 'A: I was not alone in the park. <p>B: I saw <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="boy">boy</option>,<option value="boys">boys</option>,</select> playing on the swing at the park.'}], 
    ["c1-zp","Form", {html: 'A: Some people cannot stay out of trouble! <p>B: Why do <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="boy">boy</option>,<option value="boys">boys</option>,</select> always cause so much trouble?'}], 
    ["c1-ART", "Form", {html: 'A: Have you seen them yet today? <p>B: Oh, I forgot that <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> boys were going to come over today.'}],
    ["c1-NOUN","Form", {html: 'A: He said his mom was in the hospital. <p>B: I was wondering why the <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="boy">boy</option>,<option value="boys">boys</option>,</select> was talking to you for so long.'}],
    //door//
    ["c2-dp","Form", {html: 'A: Which ones do you like? <p>B: Personally, I think <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="door">door</option>,<option value="doors">doors</option>,</select> on the left look better.'}], 
    ["c2-ds","Form", {html: 'A: I need to paint it! <p>B: Would you like <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="door">door</option>,<option value="doors">doors</option>,</select> To be blue or red?'}], 
    ["c2-i", "Form", {html: 'A: What should we buy for the back of the house? <p>B: I think we need to buy <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="door">door</option>,<option value="doors">doors</option>,</select> fro the back of the house.'}], 
    ["c2-zp","Form", {html: 'A: Were you able to get what you were looking for? <p>B: Yes, the store had <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="door">door</option>,<option value="doors">doors</option>,</select> of all different shapes and sizes.'}], 
    ["c2-ART", "Form", {html: 'A: Did she have any requests <p>B: She would like <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> door for her bedroom.'}],
    ["c2-NOUN","Form", {html: 'A: Did you get lost in the maze/laberinth? <p>B: There were so many <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="door">door</option>,<option value="doors">doors</option>,</select> throughout the entire thing.'}],
    //book//
    ["c3-dp","Form", {html: 'A: Did you buy your materials for the class? <p>B: I cannot remember <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="book">book</option>,<option value="books">books</option>,</select> the teacher told us to buy for the class.'}], 
    ["c3-ds","Form", {html: 'A: I told you how much I liked that one! <p>B: Where did you put <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="book">book</option>,<option value="books">books</option>,</select> that you were telling me about?'}], 
    ["c3-i", "Form", {html: 'A: I have been reading a lot lately. <p>B: Do you have <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="book">book</option>,<option value="books">books</option>,</select> that you would recommend to a young child?'}], 
    ["c3-zp","Form", {html: 'A: How should we make a donation to the orphanage? <p>B: We should buy and donate <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="book">book</option>,<option value="books">books</option>,</select> to the children in need.'}], 
    ["c3-ART", "Form", {html: 'A: How did you like the library? <p>B: There were <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> books that I had never seen before.'}],
    ["c3-NOUN","Form", {html: 'A: The lady at the bookstore gave me this one. <p>B: Oh, this must be the <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="book">book</option>,<option value="books">books</option>,</select> for our chemistry class.'}],
  //Flexible//
    //chocolate//
    ["f1-dp", "Form", {html: 'A: Where did you put them? <p>B: I put <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="chocolate">chocolate</option>,<option value="chocolates">chocolates</option>,</select> in the fridge so that they would not melt.'}], 
    ["f1-ds", "Form", {html: 'A: Do you have everything for the recipe? <p>B: She wonders if <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="chocolate">chocolate</option>,<option value="chocolates">chocolates</option>,</select> that we have will be enough for the recipe.'}], 
    ["f1-i",  "Form", {html: 'A: Did you talk to Steven? <p>B: Yes, he recommended <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="chocolate">chocolate</option>,<option value="chocolates">chocolates</option>,</select> that was made in France. Yummy!'}], 
    ["f1-zp", "Form", {html: 'A: What does John do? <p>B: He sells <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="chocolate">chocolate</option>,<option value="chocolates">chocolates</option>,</select> at the store down the street.'}], 
    ["f1-zs", "Form", {html: 'A: Did you read the recipe <p>B: The recipe requires that we use <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="chocolate">chocolate</option>,<option value="chocolates">chocolates</option>,</select> for the desserts.'}], 
    ["f1-ART", "Form", {html: 'A: Should I get anything at the store? <p>B: I would like <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> chocolates for the party tonight.'}],
    ["f1-NOUN","Form", {html: 'A: Which one did she like? <p>B: She really liked the <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="chocolate">chocolate</option>,<option value="chocolates">chocolates</option>,</select> from Switzerland.'}],
    //stone//
    ["f2-dp", "Form", {html: 'A: They completed their landscaping this weekend. <p>B: Some of the neighbors wondered if <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="stone">stone</option>,<option value="stones">stones</option>,</select> were too much for the design.'}], 
    ["f2-ds", "Form", {html: 'A: Jane gave the gnomes a gift. <p>B: The gnomes thought that <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="stone">stone</option>,<option value="stones">stones</option>,</select> that was given to them looked very nice by their house.'}], 
    ["f2-i",  "Form", {html: 'A: Skye finished her gnome garden. <p>B: Chad said that <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="stone">stone</option>,<option value="stones">stones</option>,</select> would be a nice addition to the gnome garden.'}], 
    ["f2-zp", "Form", {html: 'A: They said that Skye wanted to use more materials. <p>B: Skye forgot that she could use <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="stone">stone</option>,<option value="stones">stones</option>,</select> for her art project.'}], 
    ["f2-zs", "Form", {html: 'A: The city wanted to make the park look very nice. <p>B: They spent a lot of money on <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="stone">stone</option>,<option value="stones">stones</option>,</select> for the new park.'}], 
    ["f2-ART", "Form", {html: 'A: What did Dorothea say about it? <p>B: She said she put <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> stone on the back porch.'}],
    ["f2-NOUN","Form", {html: 'A: Do you think we need more building materials? <p>B: I think we should buy <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="stone">stone</option>,<option value="stones">stones</option>,</select>.'}],
    //string//
    ["f3-dp", "Form", {html: 'A: Where did they go? <p>B: Tanner said that he took <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="string">string</option>,<option value="strings">strings</option>,</select> that we cut for our own project. Argh!'}], 
    ["f3-ds", "Form", {html: 'A: Did you see where he put it? <p>B: <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">A</option>,<option value="an">An</option>,<option value="the">The</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="string">string</option>,<option value="strings">strings</option>,</select> that I bought yesterday seems to have disappeared.'}], 
    ["f3-i",  "Form", {html: 'A: We need to do something to make this look better. <p>B: Would it be better if we added <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="string">string</option>,<option value="strings">strings</option>,</select> to the end of this?'}], 
    ["f3-zp", "Form", {html: 'A: The house looks so clean! <p>B: There were <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="string">string</option>,<option value="strings">strings</option>,</select> on the floor before I cleaned the house.'}], 
    ["f3-zs", "Form", {html: 'A: Did he say he needed more material? <p>B: He had said that he needed <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="string">string</option>,<option value="strings">strings</option>,</select> to finish the blanket he was making.'}], 
    ["f3-ART", "Form", {html: 'A: What is Tanner looking for? <p>B: He wants <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> string to pull his tooth with.'}],
    ["f3-NOUN","Form", {html: 'A: Do you like what we have done with this piece of art? <p>B: I would like the <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="string">string</option>,<option value="strings">strings</option>,</select> better if they were all the same color.'}],
  //Uncountable Object//
    //furniture//
    ["mo1-ds", "Form", {html: 'A: What were you looking for earlier today? <p>B: I was at the storage unit looking for <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="furniture">furniture</option>,<option value="furnitures">furnitures</option>,</select> I need for the spare bedroom.'}], 
    ["mo1-zs", "Form", {html: 'A: What do you think of the room? <p>B: This room is just full of beautiful <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="furniture">furniture</option>,<option value="furnitures">furnitures</option>,</select>.'}], 
    ["mo1-ART", "Form", {html: 'A: This room looks very nice! <p>B: Do you like <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> furniture that I bought for this room?'}],
    ["mo1-NOUN","Form", {html: 'A: Did Joanne go shopping today? <p>B: She is looking for <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="furniture">furniture</option>,<option value="furnitures">furnitures</option>,</select> furniture to put in the spare bedroom.'}],
    //mail//
    ["mo2-ds", "Form", {html: 'A: Did you call the Post Office about our trip? <p>B: We should have the Post Office hold <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="mail">mail</option>,<option value="mails">mails</option>,</select> while we are gone for a week.'}], 
    ["mo2-zs", "Form", {html: 'A: Did they deliver anything today? <p>B: Since today is a holiday, we will probably not get <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="mail">mail</option>,<option value="mails">mails</option>,</select>.'}], 
    ["mo2-ART", "Form", {html: 'A: Did you go to the Post Office? <p>B: Yes, we did not get <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> mail while we were gone..'}],
    ["mo2-NOUN","Form", {html: 'A: Do you need me to run any errands? <p>B: Please got to the Post Office and get the <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="mail">mail</option>,<option value="mails">mails</option>,</select> that they have.'}],
    //traffic//
    ["mo3-ds", "Form", {html: 'A: Why were you late today? <p>B: <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">A</option>,<option value="an">An</option>,<option value="the">The</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="traffic">traffic</option>,<option value="traffics">traffics</option>,</select> on Liberty Street always causes congestion for over 10 blocks.'}], 
    ["mo3-zs", "Form", {html: 'A: They really need to make the lanes on Main Street bigger! <p>B: I cannot believe <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="traffic">traffic</option>,<option value="traffics">traffics</option>,</select> on Main Street always blocks the intersection.'}], 
    ["mo3-ART", "Form", {html: 'A: Why was Felicia late today? <p>B: She said <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> traffic on Main Street was awful today.'}],
    ["mo3-NOUN","Form", {html: 'A: What is your least favorite thing about this city? <p>B: I wish there was not <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="traffic">traffic</option>,<option value="traffics">traffics</option>,</select> in the morning. I would leave later!'}],
  //Uncountable Substance//
    //salt//    
    ["ms1-ds", "Form", {html: 'A: Are you looking for something? <p>B: Where did you put <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="salt">salt</option>,<option value="salts">salts</option>,</select>? I cannot find it.'}], 
    ["ms1-zs", "Form", {html: 'A: Jeffrey does not like french fires that taste plain. <p>B: Jeffery often orders <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="salt">salt</option>,<option value="salts">salts</option>,</select> on his fries when he is at restaurants.'}], 
    ["ms1-ART", "Form", {html: 'A: Have you talked to Sissy? <p>B: She told me that she likes <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> salt on her chicken.'}],
    ["ms1-NOUN","Form", {html: 'A: Jenny, did you ask something? <p>B: Could you please pass me the <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value=salt">salt</option>,<option value="salts">salts</option>,</select>?'}],
    //toothpaste//
    ["ms2-ds", "Form", {html: 'A: Where did you put it after you finished brushing your teeth? <p>B: I thought I put <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="toothpaste">toothpaste</option>,<option value="toothpastes">toothpastes</option>,</select> on the counter when I was finished.'}], 
    ["ms2-zs", "Form", {html: 'A: I already brushed my teeth. <p>B: Did you put <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="toothpaste">toothpaste</option>,<option value="toothpastes">toothpastes</option>,</select> on your toothbrush before brushing your teeth?'}], 
    ["ms2-ART", "Form", {html: 'A: Why do you have to be so specific? <p>B: I want to make sure you buy <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> toothpaste that I like to use.'}],
    ["ms2-NOUN","Form", {html: 'A: Mom, I finished brushing my teeth! <p>B: Are you sure you used <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="toothpaste">toothpaste</option>,<option value="toothpastes">toothpastes</option>,</select> when you brushed your teeth?'}],
    //mustard//
    ["ms3-ds", "Form", {html: 'A: Where is it? <p>B: John said that <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="mustard">mustard</option>,<option value="mustards">mustards</option>,</select> was in the refrigerator.'}], 
    ["ms3-zs", "Form", {html: 'A: Does she need anything? <p>B: Chelsea would like <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="mustard">mustard</option>,<option value="mustards">mustards</option>,</select> for her sandwich, please.'}], 
    ["ms3-ART", "Form", {html: 'A: Do you like to add things to your hot dogs? <p>B: One of my favorite things to put on a hot dog is <select name="article",class = "obligatory">,<option value="zero"> </option>,<option value="a">a</option>,<option value="an">an</option>,<option value="the">the</option>,</select> mustard.'}],
    ["ms3-NOUN","Form", {html: 'A: Hey, I put away all of the groceries earlier. <p>B: Where did you put the <select name="noun",class = "obligatory">,<option value="none"> </option>,<option value="mustard">mustard</option>,<option value="mustards">mustards</option>,</select> that we bought at the store?'}],
];