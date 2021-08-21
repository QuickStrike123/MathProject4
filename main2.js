
    document.getElementById("Player1Name").innerHTML = localStorage.getItem("Player1") + " : ";

    document.getElementById("Player2Name").innerHTML = localStorage.getItem("Player2") + " : ";

    document.getElementById("PlayerQuestion").innerHTML = "Question Turn : " + Player1;

    document.getElementById("PlayerAnswer").innerHTML = "Answer Turn : " + Player2;

function Send() {

    Number1 = document.getElementById("Number1").value;

    Number2 = document.getElementById("Number2").value;

    RealAnswer = parseInt(Number1)*parseInt(Number2);

    questionNumber = "<h4>" + Number1 + " X " + Number2 + " </h4>"

    inputBox = " <br> Answer : <input type='text' id='InputBox' > "

    CheckButton = " <br> <br> <button class ='btn btn-info' onclick='Check()'> Check </button>"

    row = questionNumber + inputBox + CheckButton;

    document.getElementById("Input").innerHTML = row;

    document.getElementById("Number1").value = "";

    document.getElementById("Number2").value = "";
    
}