function switchOff() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
    document.getElementById("bulbImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
}

let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let previousElementValue = counterElement.textContent;
    let updatedElementValue = parseInt(previousElementValue) + 1;
    counterElement.textContent = updatedElementValue;
    if (updatedElementValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedElementValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
}

function onDecrement() {
    let previousElementValue = counterElement.textContent;
    let updatedElementValue = parseInt(previousElementValue) - 1;
    counterElement.textContent = updatedElementValue;
    if (updatedElementValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedElementValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
}

function onReset() {
    let updatedElementValue = 0;
    counterElement.textContent = updatedElementValue;
    counterElement.style.color = "black";
}




function buttonValue1() {
    let toChangeColor = document.getElementById("selectedColorHexCode");
    toChangeColor.textContent = "#e0e0e0";
    let toChangeBackground = document.getElementById("colorPickerContainer").style.backgroundColor = "#e0e0e0";
}

function buttonValue2() {
    let toChangeColor = document.getElementById("selectedColorHexCode");
    toChangeColor.textContent = "#6fcf97";
    let toChangeBackground = document.getElementById("colorPickerContainer").style.backgroundColor = "#6fcf97";
}

function buttonValue3() {
    let toChangeColor = document.getElementById("selectedColorHexCode");
    toChangeColor.textContent = "#56ccf2";
    let toChangeBackground = document.getElementById("colorPickerContainer").style.backgroundColor = "#56ccf2";
}

function buttonValue4() {
    let toChangeColor = document.getElementById("selectedColorHexCode");
    toChangeColor.textContent = "#bb6bd9";
    let toChangeBackground = document.getElementById("colorPickerContainer").style.backgroundColor = "#bb6bd9";
}


function Stop() {
    let stopbutton = document.getElementById("stopButton").style.backgroundColor = "#cf1124";
    let stoplight = document.getElementById("stopLight").style.backgroundColor = "#cf1124";
    let readybutton = document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
    let readylight = document.getElementById("readyLight").style.backgroundColor = "#4b5069";
    let gobutton = document.getElementById("goButton").style.backgroundColor = "#1f1d41";
    let golight = document.getElementById("goLight").style.backgroundColor = "#4b5069";
}

function Ready() {
    let readybutton = document.getElementById("readyButton").style.backgroundColor = "#f7c948";
    let readylight = document.getElementById("readyLight").style.backgroundColor = "#f7c948";
    let stopbutton = document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
    let stoplight = document.getElementById("stopLight").style.backgroundColor = "#4b5069";
    let gobutton = document.getElementById("goButton").style.backgroundColor = "#1f1d41";
    let golight = document.getElementById("goLight").style.backgroundColor = "#4b5069";
}

function Go() {
    let gobutton = document.getElementById("goButton").style.backgroundColor = "#199473";
    let golight = document.getElementById("goLight").style.backgroundColor = "#199473";
    let readybutton = document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
    let readylight = document.getElementById("readyLight").style.backgroundColor = "#4b5069";
    let stopbutton = document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
    let stoplight = document.getElementById("stopLight").style.backgroundColor = "#4b5069";
}



function button1() {
    let image1 = document.getElementById("seasonSmallImage").src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png';
    let image2 = document.getElementById("seasonMediumImage").src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png';
}

function button2() {
    let image1 = document.getElementById("seasonSmallImage").src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png';
    let image2 = document.getElementById("seasonMediumImage").src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png';
}

function button3() {
    let image1 = document.getElementById("seasonSmallImage").src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png';
    let image2 = document.getElementById("seasonMediumImage").src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png';
}

function button4() {
    let image1 = document.getElementById("seasonSmallImage").src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png';
    let image2 = document.getElementById("seasonMediumImage").src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png';
}


let likedButton = false;

function onClickLikeButton() {
    if (likedButton === false) {
        let image = document.getElementById("puppyImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        let icon = document.getElementById("likeIcon").style.color = "#0967d2";
        let button = document.getElementById("likeButton").style.backgroundColor = "#0967d2";
        let buttoncolor = document.getElementById("likeButton").style.color = "#ffffff";
        likedButton = true;
    } else {
        let image = document.getElementById("puppyImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        let icon = document.getElementById("likeIcon").style.color = "#9aa5b1";
        let button = document.getElementById("likeButton").style.backgroundColor = "#9aa5b1";
        let buttoncolor = document.getElementById("likeButton").style.color = "#cbd2d9";
        likedButton = false;
    }


}





function calculateButton() {
    let billamount = document.getElementById("billAmount");
    let percentagetip = document.getElementById("percentageTip");
    let tipamount = document.getElementById("tipAmount");
    let totalamount = document.getElementById("totalAmount");
    let error = document.getElementById("errorMessage");
    if (billamount.value === "") {
        error.textContent = "Please Enter a Valid Input.";
        tipamount.value = "";
        totalamount.value = "";
    } else if (percentagetip.value === "") {
        error.textContent = "Please Enter a Valid Input.";
        tipamount.value = "";
        totalamount.value = "";
    } else {
        error.textContent = "";
        let calculatetip = parseInt(billamount.value) * parseInt(percentagetip.value) / 100;
        tipamount.value = calculatetip;
        totalamount.value = parseInt(billamount.value) + parseInt(calculatetip);
    }
}





let imageElement = document.getElementById("image");
let imagewidth = document.getElementById("imageWidth");
let defaultImageWidth = 200;
let maximumWidth = 300;
let minimumWidth = 100;
imageElement.style.width = defaultImageWidth + "px";
let message = document.getElementById("warningMessage");

function decrementButton() {
    if (defaultImageWidth <= minimumWidth) {
        message.textContent = "Can't Visible. Increase the size of the image ";
    } else {
        message.textContent = "";
        defaultImageWidth = defaultImageWidth - 5;
        let updatedimageWidth = defaultImageWidth;
        imagewidth.textContent = defaultImageWidth + "px";
        imageElement.style.width = updatedimageWidth + "px";
        defaultImageWidth = updatedimageWidth;
    }
}

function incrementButton() {
    if (defaultImageWidth >= maximumWidth) {
        message.textContent = "Too big. Decrease the size of the image ";
    } else {
        message.textContent = "";
        defaultImageWidth = defaultImageWidth + 5;
        let updatedimageWidth = defaultImageWidth;
        imagewidth.textContent = defaultImageWidth + "px";
        imageElement.style.width = updatedimageWidth + "px";
        defaultImageWidth = updatedimageWidth;
    }
}






let firstnumber = document.getElementById("firstNumber");
let secondnumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameresult = document.getElementById("gameResult");

function restartButton() {
    let firstrandomnumber = Math.random() * 100;
    let secondrandonumber = Math.random() * 100;
    firstnumber.textContent = Math.ceil(firstrandomnumber);
    secondnumber.textContent = Math.ceil(secondrandonumber);
    userInput.value = "";
    gameresult.textContent = "";
}
restartButton();

function checkButton() {
    let usernumber = parseInt(userInput.value);
    let total = parseInt(firstnumber.textContent) + parseInt(secondnumber.textContent);
    if (total === usernumber) {
        gameresult.textContent = "Congratulations! You got it right.";
        gameresult.style.backgroundColor = "#028a0f";
    } else {
        gameresult.textContent = "Please Try Again!";
        gameresult.style.backgroundColor = "#1e217c";
    }
}




let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgcontainer = document.getElementById("bgContainerrandom");
let lengthOfArray = bgColorsArray.length - 1;

function ClickBottonrandom() {
    let randomNumber = Math.ceil(Math.random() * lengthOfArray);
    bgcontainer.style.backgroundColor = bgColorsArray[randomNumber];
}



let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let noOfChat = chatbotMsgList.length;
let chatContainer = document.getElementById("chatContainer");

let userInputbot = document.getElementById("userInputbot");
let sendMsgBtn = document.getElementById("sendMsgBtn");


function userChat() {
    let userChatText = userInputbot.value;
    let newContainer = document.createElement("div");
    newContainer.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(newContainer);

    let message = document.createElement("span");
    message.classList.add("msg-to-chatbot");
    message.textContent = userChatText;
    newContainer.appendChild(message);
    userInputbot.value = "";
}

function chatBot() {
    let botChat = chatbotMsgList[Math.ceil(Math.random() * noOfChat) - 1];
    let newContainer = document.createElement("div");
    newContainer.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(newContainer);

    let message = document.createElement("span");
    message.classList.add("msg-from-chatbot");
    message.textContent = botChat;
    newContainer.appendChild(message);
}
sendMsgBtn.onclick = function() {
    userChat();
    chatBot();
}