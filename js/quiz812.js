function checkAnswer() {
    var myQuiz=document.getElementById("myQuiz");
    if (myQuiz.elements[1].checked)
        alert("Congratulations, your answer is correct");
        else
            alert("Your answer is incorrect. Please try again.");
}

