var colors=generateRandomColors(6);
var pickedcolor=pickColor();
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message")
var h1=document.querySelector("h1");
var resetButton= document.getElementById("reset");
colorDisplay.textContent=pickedcolor;
var easyBtn=document.querySelector("#easybtn");
var hardBtn=document.querySelector("#hardbtn");
var numberOfSquares=6;
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors=generateRandomColors(3);
    pickedcolor=pickColor();
    colorDisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
})
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors=generateRandomColors(6);
    pickedcolor=pickColor();
    colorDisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        }
    }
})

resetButton.addEventListener("click",function(){
    //generate all new colors
    colors=generateRandomColors(6);
    resetButton.textContent="New colors";
    pickedcolor=pickColor();
    //change color display to match pickedcolor
    colorDisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="#232323"
    
})
for(var i=0;i<squares.length;i++){
    //add initial colors
    squares[i].style.backgroundColor=colors[i];

    //add event listener
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedcolor){
            messageDisplay.textContent="Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor=pickedcolor;
            resetButton.textContent="Play again"
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try again";
        }
    })
}

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var Random=Math.floor(Math.random()*colors.length)
    return colors[Random];
}
function generateRandomColors(number){
    var arr=[];
    for(var i=0;i<number;i++){
        //get random color and push into array
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
   var r= Math.floor(Math.random()*256);
   var g= Math.floor(Math.random()*256);
   var b= Math.floor(Math.random()*256);
   return "rgb("+r+", "+ g+", " + b+")"
}