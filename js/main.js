let playerXScore = 0;
let playerOScore = 0;
let draw = 0;
let isPlayer = 1;

function start(id){
    if(document.getElementById(id).innerHTML === "" ){
        if(isPlayer == 1){
            document.getElementById(id).innerHTML = "X";
            document.getElementById(id).style = "box-shadow: none;";
            document.getElementById(id).classList.add("fade-in");
            document.getElementById(id).style.background = "transparent";
            isPlayer = 0;
        }else{
            document.getElementById(id).innerHTML = "0";
            document.getElementById(id).style = "box-shadow: none;";
            document.getElementById(id).classList.add("fade-in");
            document.getElementById(id).style.background = "transparent";
            isPlayer = 1;
        }
        conditional();
    }
}

function conditional(){
    const input1 = document.getElementById("input1").innerHTML;
    const input2 = document.getElementById("input2").innerHTML;
    const input3 = document.getElementById("input3").innerHTML;
    const input4 = document.getElementById("input4").innerHTML;
    const input5 = document.getElementById("input5").innerHTML;
    const input6 = document.getElementById("input6").innerHTML;
    const input7 = document.getElementById("input7").innerHTML;
    const input8 = document.getElementById("input8").innerHTML;
    const input9 = document.getElementById("input9").innerHTML;
    let input = document.getElementsByClassName("div");

    
    if(((input1=='X') && (input2=='X') && (input3=='X')) || ((input4=='X') && (input5=='X') && (input6=='X')) || ((input7=='X') && (input8=='X') && (input9=='X')) || ((input1=='X') && (input4=='X') && (input7=='X')) || ((input2=='X') && (input5=='X') && (input8=='X')) || ((input3=='X') && (input6=='X') && (input9=='X')) || ((input3=='X') && (input5=='X') && (input7=='X')) || ((input1=='X') && (input5=='X') && (input9=='X'))){
        document.getElementById("main-wrapper").style = "display: block;";
        // console.log("x won");
        let finalScore = playerOScore + playerXScore + draw;
        if(finalScore === 4){
            if(draw === 4 || playerXScore === playerOScore){
                document.getElementById("game-over").style = "display: block;";
                document.getElementById("main-wrapper").style = "display: none;";
                document.getElementById("winner").innerHTML = "Match tied.......&#127881;!";
            }
            else if(playerXScore > playerOScore && playerXScore > draw){
                document.getElementById("game-over").style = "display: block;";
                document.getElementById("main-wrapper").style = "display: none;";
                document.getElementById("winner").innerHTML = "X is winner.......&#128542;!";
            }else{
                document.getElementById("game-over").style = "display: block;";
                document.getElementById("main-wrapper").style = "display: none;";
                let winnerMessage = document.getElementById("winner");
                console.log(winnerMessage);
                winnerMessage.innerHTML = "0 is winner.......&#128542;!";
            }
        }else{
            playerXScore += 1;
            document.getElementById("playerX-score").innerHTML = playerXScore;
            document.getElementById("winning-popup").classList.remove("hide");
            document.getElementById("winning-msg").innerHTML = "X is winner.......&#127881;!";
        }
        isPlayer = 1;
    }else if(((input1=='0') && (input2=='0') && (input3=='0')) || ((input4=='0') && (input5=='0') && (input6=='0')) || ((input7=='0') && (input8=='0') && (input9=='0')) || ((input1=='0') && (input4=='0') && (input7=='0')) || ((input2=='0') && (input5=='0') && (input8=='0')) || ((input3=='0') && (input6=='0') && (input9=='0')) || ((input3=='0') && (input5=='0') && (input7=='0')) || ((input1=='0') && (input5=='0') && (input9=='0'))){
        document.getElementById("main-wrapper").style = "display: block;";
        let finalScore = playerOScore + playerXScore + draw;
        if(finalScore === 4){
            console.log(playerOScore , playerXScore , draw);
            if(draw === 4 || playerXScore === playerOScore){
                document.getElementById("game-over").style = "display: block;";
                document.getElementById("main-wrapper").style = "display: none;";
                document.getElementById("winner").innerHTML = "Match tied.......&#127881;!";
            }
            else if(playerOScore > playerXScore && playerOScore > draw){
                console.log("sdkhjhd");
                document.getElementById("game-over").style = "display: block;";
                document.getElementById("main-wrapper").style = "display: none;";
                let winnerMessage = document.getElementById("winner");
                console.log(winnerMessage);
                winnerMessage.innerHTML = "0 is winner.......&#128542;!";
            }else{
                document.getElementById("game-over").style = "display: block;";
                document.getElementById("main-wrapper").style = "display: none;";
                document.getElementById("winner").innerHTML = "X is winner.......&#128542;!";
            }
        }else{
            console.log("in else");
            playerOScore += 1;
            document.getElementById("playerO-score").innerHTML = playerOScore;
            document.getElementById("winning-popup").classList.remove("hide");
            document.getElementById("winning-msg").innerHTML = "0 is winner.......&#127881;!";
        }
        isPlayer = 0;
        // for(let j = 0; j<9; j++){
        //     input[j].style.pointerEvents = "none";
        // }
    }else if ((input1=='X' || input1=='0') && (input2=='X' || input2=='0') && (input3=='X' || input3=='0') && (input4=='X' || input4=='0') && (input5=='X' || input5=='0') && (input6=='X' || input6=='0') && (input7=='X' || input7=='0') && (input8=='X' || input8=='0') && (input9=='X' || input9=='0')){
        document.getElementById("main-wrapper").style = "display: block;";
        console.log("inelse if for match tie");
        let finalScore = playerOScore + playerXScore + draw;
        if(finalScore === 4){
            console.log(draw);
            console.log("in finaL score for match tie");
            if(draw === 4 || playerXScore === playerOScore){
                console.log("match tied....");
                document.getElementById("game-over").style = "display: block;";
                document.getElementById("main-wrapper").style = "display: none;";
                document.getElementById("winner").innerHTML = "Match tied.......&#127881;!";
            }else if(playerOScore > playerXScore && playerOScore > draw){
                document.getElementById("game-over").style = "display: block;";
                document.getElementById("main-wrapper").style = "display: none;";
                let winnerMessage = document.getElementById("winner");
                console.log(winnerMessage);
                winnerMessage.innerHTML = "0 is winner.......&#128542;!";
            }else{
                document.getElementById("game-over").style = "display: block;";
                document.getElementById("main-wrapper").style = "display: none;";
                document.getElementById("winner").innerHTML = "X is winner.......&#128542;!";
            }
        }else{
            document.getElementById("winning-popup").classList.remove("hide");
            draw += 1;
            document.getElementById("draw-score").innerHTML = draw;
            document.getElementById("winning-msg").innerHTML = "Match tied.......&#128542;!";
        }
        isPlayer = 1;
    }
}

function reset(){
    let input = document.getElementsByClassName("div");
    for(let i = 1;i<10;i++){
        document.getElementById("input"+i).style.background = "#fff";
        document.getElementById("input"+i).innerHTML = "";
        document.getElementById("input"+i).classList.remove("fade-in");
    }
    document.getElementById("winning-popup").classList.add("hide");

    document.getElementById("winning-msg-text").innerHTML = "";
    for(let j = 0; j<9; j++){
        input[j].style.pointerEvents = "auto";
    }
}

function gameDisplay(){
    let main_wrapper = document.getElementById("main-wrapper");
    main_wrapper.style = "display: block;";
    let start = document.getElementById("start-game");
    start.style = "display: none;";
    let game_over = document.getElementById("game-over");
    game_over.style = "display: none;";
}