var answers = ['will smith', 'will ferrell', 'tupac'];
var answers1 = ['vince vaughn', 'aj holsinger', 'will ferrell', 'nipsey hustle',];
var answers2 = ['will smith', 'will ferrel', 'austin koeppel', 'dave chapelle',];
var answers3 = ['kevin hart', 'jack black', 'snoop dogg', 'bruce willis',];

var questions = ['Who played Mike in Bad Boys 2', 'Who played in Old School', 'Who used the Cow bell on Saturday Night Live', 'Who played in Die Hard'];







var total = 4;





function submitAnswers() {
    

    // Get user input
    var q1 = document.forms["quizForm"]['q1'].value;
    var q2 = document.forms["quizForm"]['q2'].value;
    var q3 = document.forms["quizForm"]['q3'].value;
    var q4 = document.forms["quizForm"]['q4'].value;

    // Validation
    
    

    for (i = 1; i <= total; i++) {
        if (eval('q'+i) == null || eval('q'+i) == ''){
            alert('You missed question ' + i);
            return false;
            
            
        }
    }
    // Set answers
    var answers = ['a', 'b', 'b', 'd'];
    // Set score
    var score = 0;

    // Check answers

    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]){
            score++
    
        }
    }
    // Display results
    
    alert('You scored ' +score+' out of ' +total);
    window.location.reload();

}




setInterval(changeFerrel,"3000");
var arr = ["url('http://www.lyhyxx.com/data/out/46/4156953-bruce-willis-wallpapers.jpg')", "url('https://wallpaper4rest.com/actors/wallpaper/will-smith-best-pix-wallpaper_1-800x600.jpg')",
"url('https://www.theplace2.ru/archive/will_ferrell/img/Will_Ferrell_Casa_de.jpg')",
"url('http://getwallpapers.com/wallpaper/full/8/d/a/132524.jpg')",
"url('https://images6.alphacoders.com/649/thumb-1920-649500.jpg')"];


function changeFerrel() {
    var image= arr[Math.floor(Math.random()*arr.length)];
    
    document.getElementById("body").style.backgroundImage=image;
    var q = "question" + 1;
}



window.onload = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = 0;
                alert('Times Up! Try Again!');
                
                window.location.reload();
            }
        }, 1000);
    }
    
};