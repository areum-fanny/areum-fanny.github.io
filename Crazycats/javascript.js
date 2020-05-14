$(document).ready(()=>{
    var name = "";
    var audio = document.getElementById('audio');
    var text = document.getElementById('text');
    var text2 = document.getElementById('text2');
    var text3 = document.getElementById('text3');
    var text4 = document.getElementById('text4');
    var text5 = document.getElementById('text5');
    var checkagain = document.getElementById('checkagain');
    $("h2").on('hover',(event)=>{
        event.currentTarget.animate
    });
    $(".donttouch").on('click',()=>{
        audio.play();
        $('.watchalooking').hide();
        $('.dont').show();

    });
    $('#submit').on('click',()=>{
        name = document.getElementById('name').value;
        audio.play();
        $('#intro').hide();
        var welcometext = "Welcome to the land of Cats " + name + "!";
        text.innerHTML = welcometext;
        $('#welcome').css('display','flex');
    });

    $('#submit2').on('click',()=>{
        var isright = document.getElementById('yes').value;
        audio.play();
        document.getElementById('myform').reset();
        if(isright == "Yes") {
            $('#welcome').hide();
            var x = "I knew it! Cute people like cute things :)";
            var y = "Would you like to see a list of things cats like to do?";
            text3.innerHTML = x;
            text4.innerHTML = y;
            $('#catfacts').css('display','flex');
            $('#text3').fadeIn(450);
            $('#text4').fadeIn(450);
            $('#text5').hide();
        }
        else if (isright == "No"){
            $('#welcome').hide();
            var y = "I see... That is unfortunate";
            var z = "I thought cute people liked cute things too... I guess I was wrong :("
            var x = "Well, all is well. Would you like to look at some cat facts?"
            text3.innerHTML = y;
            text4.innerHTML = z;
            text5.innerHTML = x;
            $('#catfacts').css('display','flex');
            $('#text3').fadeIn(450);
            $('#text4').fadeIn(450);
            $('#text5').fadeIn(450);

        }
        else {
            var x = "It seems like you have a typo in your answer! Try again " + name +"!";
            checkagain.innerHTML = x;
            $('#text').hide();
            $('#text2').hide();
            $('#checkagain').fadeIn(450);
        }
    });

    $('#no').on('click',()=>{
        $('#catfacts').hide();
        $('#bye').show();
    });
    $('#cat1').mouseenter(()=>{
        var x = document.getElementById('audio1')
        x.play();
    });
    $('#cat2').mouseenter(()=>{
        var x = document.getElementById('audio2')
        x.play();
    });
});