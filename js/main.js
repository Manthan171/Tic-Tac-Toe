let isPlayer = 1;

function start(id){
    if(document.getElementById(id).innerHTML === "" ){
        if(isPlayer == 1){
            document.getElementById(id).innerHTML = "X";
            isPlayer = 0;
        }else{
            document.getElementById(id).innerHTML = "0";
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
        document.getElementById("winning-msg-text").innerHTML = "X is winner.....";
        for(let j = 0; j<10; j++){
            input[j].style.pointerEvents = "none";
        }
    }else if(((input1=='0') && (input2=='0') && (input3=='0')) || ((input4=='0') && (input5=='0') && (input6=='0')) || ((input7=='0') && (input8=='0') && (input9=='0')) || ((input1=='0') && (input4=='0') && (input7=='0')) || ((input2=='0') && (input5=='0') && (input8=='0')) || ((input3=='0') && (input6=='0') && (input9=='0')) || ((input3=='0') && (input5=='0') && (input7=='0')) || ((input1=='0') && (input5=='0') && (input9=='0'))){
        document.getElementById("winning-msg-text").innerHTML = "O is winner.....";
        for(let j = 0; j<10; j++){
            input[j].style.pointerEvents = "none";
        }
    }else if ((input1=='X' || input1=='0') && (input2=='X' || input2=='0') && (input3=='X' || input3=='0') && (input4=='X' || input4=='0') && (input5=='X' || input5=='0') && (input6=='X' || input6=='0') && (input7=='X' || input7=='0') && (input8=='X' || input8=='0') && (input9=='X' || input9=='0')){
        document.getElementById("winning-msg-text").innerHTML = "match is tied..";
    }
}

function reset(){
    let input = document.getElementsByClassName("div");
    for(let i = 1;i<10;i++){
        document.getElementById("input"+i).innerHTML = "";
    }
    document.getElementById("winning-msg-text").innerHTML = "";
    for(let j = 0; j<10; j++){
        input[j].style.pointerEvents = "auto";
    }
}