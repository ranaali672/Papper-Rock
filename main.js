var yourScore=0;
var you;
var randomScore=0;
var random;

var choices = ["paper","rock","scissors"];
window.onload=function (){
    for(let i=0;i<3;i++){
        let choice = document.createElement('img');
        //  <img src="paper" alt="" id="">
        choice.id = choices[i];
        choice.src= choices[i] +".png" //paper + ".png" =paper.png;
        choice.addEventListener("click",selectChoice)
        document.getElementById("choices").append(choice)
    }
}
function selectChoice(){
    you = this.id;  //rock
    document.getElementById("your-choice").src = you +".png";

    //Random images
    random = choices[Math.floor(Math.random()*3)];
    document.getElementById("random-choice").src =random +".png";

    //check for winners

    if(you == random){
        yourScore +=1;
        randomScore +=1;
    }
    else{
        if(you =="rock"){
            if(random =="scissors"){
                yourScore +=1;
            }else if(random =="paper"){
                random +=1;
            }
        }
        if(you =="scissors"){
            if(random =="paper"){
                yourScore +=1;
            }else if(random =="rock"){
                random +=1;
            }
        }
        if(you =="paper"){
            if(random =="rock"){
                yourScore +=1;
            }else if(random =="scissors"){
                random +=1;
            }
        }
    }

    document.getElementById("your-score").innerText= yourScore;
    document.getElementById("random-score").innerText=randomScore;



}



