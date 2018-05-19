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
var words=["hi", "hello", "mom", "dad"];
var displayedWord=["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"];
var setComputerGuess=function() {
        var i=Math.floor((Math.random() * 4));
        var self=this;
        self.displayedWord.length=self.words[i].length;
        document.getElementById("word").innerHTML=self.displayedWord.toString();
        console.log(self.displayedWord.length);
        console.log(self.words[i]);
        answer=(self.words[i]);
        self.guessCounter=0;
        return(self.words[i].split(""));
    };
    function winCheck(){
        if(correctGuesses==answer.length){win++;
        alert("You Won!!");
        reset()};
        if(guessCounter>9){lose++;
            alert("You Lost!!");
            reset()};
        document.getElementById("wins").innerHTML=win;
        document.getElementById("losses").innerHTML=lose;
    };

    function reset(){
        computerGuess= [];
        userGuess="";
        guess=[];
        guessCounter=0;
        correctGuesses=0;
        wrongGuesses="";
        document.getElementById("guesses").innerHTML=wrongGuesses;
        answer=null;
        displayedWord=["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"];
        computerGuess=setComputerGuess();
        console.log("reset " +computerGuess+" " +displayedWord);
        };

//start game by choosing computer guess and indicating length with lines

computerGuess=setComputerGuess();
//document.getElementById("word").innerHTML=displayedWord.toString();
console.log(computerGuess, displayedWord);


//check guess and update page as needed
document.onkeyup=function(){
    //if((correctGuesses<displayedWord.length)&&(guessCounter>10)){
        userGuess=event.key;
        
        var index=computerGuess.indexOf(userGuess);
        console.log(userGuess);
        
        
        if(index>-1&&index<displayedWord.length){
            displayedWord[index]=userGuess; 
            computerGuess[index]="_";
            correctGuesses++;            
            console.log("win: "+win+"displayed word: "+ displayedWord+" "+" correct" +correctGuesses+"total number: "+answer.length )
            document.getElementById("word").innerHTML=displayedWord.toString();
            
        }
        else{
            guessCounter++
            userGuess=userGuess.toUpperCase();
            wrongGuesses+=(userGuess+' ');
            document.getElementById("guesses").innerHTML=wrongGuesses;
            
        };
        winCheck();
       


};



