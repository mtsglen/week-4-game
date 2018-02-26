// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.
$(document).ready(function(){
    var goal = Math.floor(Math.random() * (19 - 120)) + 120;
    var pup1 = Math.floor(Math.random() * (1 - 12) + 12);
    var pup2 = Math.floor(Math.random() * (1 - 12) + 12);
    var pup3 = Math.floor(Math.random() * (1 - 12) + 12);
    var pup4 = Math.floor(Math.random() * (1 - 12) + 12);
    var total = 0;
    var win = 0;
    var losses = 0;

    $('#goal').text('Your Goal Number Is: ' + goal);
    $('#score').text('Your Current Total Is: ' + total);
    $('#wins').text("Wins: "+ win);
    $('#losses').text('Losses: ' + losses);

    $('#pic1').on('click', function() {
        console.log(pup1);
        total = total + pup1
        $('#score').text('Your Current Total Is: ' + total);
        checkWinLoss();
    });
        
    $('#pic2').on('click', function() {
        console.log(pup2);
        total = total + pup2
        $('#score').text('Your Current Total Is: ' + total);
        checkWinLoss();
    });

    $('#pic3').on('click', function() {
        console.log(pup3);
        total = total + pup3
        $('#score').text('Your Current Total Is: ' + total);
        checkWinLoss();
    });

    $('#pic4').on('click', function() {
        console.log(pup4);
        total = total + pup4
        $('#score').text('Your Current Total Is: ' + total);
        checkWinLoss();
    });

    function checkWinLoss() {
        if (goal === total) {
            win++;
            $('#wins').text("Wins: "+ win);
            alert ("You win!");
            reset();
        } else if (total > goal) {
            losses++;
            $('#losses').text('Losses: ' + losses);
            alert ("Sorry You Lose!")
            reset();
        }
    }

    function reset(){
        goal = Math.floor(Math.random() * (19 - 120)) + 120;
        pup1 = Math.floor(Math.random() * (1 - 12) + 12);
        pup2 = Math.floor(Math.random() * (1 - 12) + 12);
        pup3 = Math.floor(Math.random() * (1 - 12) + 12);
        pup4 = Math.floor(Math.random() * (1 - 12) + 12);
        total = 0;
        $('#goal').text('Your Goal Number Is: ' + goal);
        $('#score').text('Your Current Total Is: ' + total);
    }
});




