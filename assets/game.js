//declare global variables as an object

var computerGuess= [];
var userGuess="";
var win=0;
var lose=0;
var guess=[];
var answer;
var guessCounter=0;
var correctGuesses=0;
var wrongGuesses="";
var x = document.getElementById("myAudio");
var words=["HI", "HELLO", "MOM", "DAD","NICE",'MELLOW', 'DOG', "CAT",'MOUSE',"HORSE","YELLOW","COOL","WEIRD","JAMES"];
var displayedWord=" _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";

var setComputerGuess=function() {
        var i=Math.floor((Math.random() * 4));
        displayedWord=displayedWord.slice(0,((words[i].length)*2));
        document.getElementById("word").innerHTML=displayedWord;
        console.log(displayedWord.length/2);
        console.log(words[i]);
        answer=(words[i]);
        guessCounter=0;
        return(words[i].split(""));
    };

function winCheck(){
    if((correctGuesses==answer.length)){win++;      
        x.play(); 
        setTimeout(alert("You Won!!"),4000);
        ;
        reset()};
    if(guessCounter>9){lose++;
        setTimeout(alert("You Lost!!"),4000);
        reset()};
    document.getElementById("wins").innerHTML=win;
    document.getElementById("losses").innerHTML=lose;
};
    

function reset(){
    //x.pause();
    computerGuess= [];
    userGuess="";
    guess=[];
    guessCounter=0;
    correctGuesses=0;
    wrongGuesses="...";
    document.getElementById("guesses").innerHTML=wrongGuesses;
    answer=null;
    displayedWord=" _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";
    computerGuess=setComputerGuess();
    console.log("reset " +computerGuess+" " +displayedWord);
    };

//start game by choosing computer guess and indicating length with lines

computerGuess=setComputerGuess();
console.log(computerGuess, displayedWord);


//check guess and update page as needed
document.onkeyup=function(){
    
    userGuess=event.key;
    userGuess=userGuess.toUpperCase();
    var index=computerGuess.indexOf(userGuess);
    console.log(userGuess);
    
    
    if(index>-1&&index<(displayedWord.length/2)){
        console.log("correct");
        var i=(index*2)+1;
        displayedWord=displayedWord.substr(0, i) + userGuess+ displayedWord.substr(i + 1);
        computerGuess[index]="_";       
        console.log("win: "+win+"displayed word: "+ displayedWord+" "+" correct" +correctGuesses+"total number: "+answer.length )
        document.getElementById("word").innerHTML=displayedWord;
        correctGuesses++;
        winCheck();
    }
    else if(wrongGuesses.indexOf(userGuess) > -1){
        winCheck()}

    else{
        console.log("incorrect");
        userGuess=userGuess.toUpperCase();
        wrongGuesses+=(userGuess+' ');
        document.getElementById("guesses").innerHTML=wrongGuesses;
        guessCounter++;
        document.getElementById("remaining").innerHTML=10-guessCounter;
        winCheck();
    };
    
    


};



