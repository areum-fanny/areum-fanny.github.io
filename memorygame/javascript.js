$(document).ready(() => {
    let characterlist = ["bee.png","happytoseeyou.png","cheekyporo.png","dabbing.png","heythere.png","jinx.png","nicetry.png",
    "snowdown.png","soraka.png","surrender.png","taric.png","yuumi.png",
    "bee.png","happytoseeyou.png","cheekyporo.png","dabbing.png","heythere.png","jinx.png",
"nicetry.png","snowdown.png","soraka.png","surrender.png","taric.png","yuumi.png"]; 

    let charname = ["bee","happytoseeyou","cheekyporo","dabbing","heythere","jinx","nicetry","snowdown",
    "soraka","surrender","taric","yuumi","bee","happytoseeyou","cheekyporo","dabbing","heythere",
"jinx","nicetry","snowdown","soraka","surrender","taric","yuumi"];

    let cellname = ["#cell0","#cell1","#cell2","#cell3","#cell4","#cell5","#cell6","#cell7","#cell8","#cell9","#cell10","#cell11",
    "#cell12","#cell13","#cell14","#cell15","#cell16","#cell17","#cell18","#cell19","#cell20","#cell21",
"#cell22","#cell23"];
    let pairsfound = [];
    let pairsremaining = 12;
    let firstclick = "";
    let cellclicked = "";
    let numofclicks = 0;
    $("#startgame").on('mouseenter',()=>{
        $('#play').fadeOut('slow');
    }).on('mouseleave',()=>{
        $('#play').fadeIn('fast');
    });

    $("#startgame").click(()=>{
        $('#startgame').hide();
        $('body').css('font-size','10px');
        $(".gridcontainer").css('display','grid'); 
        $('.time').css('display','flex');
        $('#pairs').html(pairsremaining);
        for(var i=23; i >= 0; i--){
            let j = Math.random();
            j *= 23;
            j = Math.round(j);
            let x = characterlist[j];
            characterlist[j] = characterlist[i];
            characterlist[i] = x;
            x = charname[j];
            charname[j] = charname[i];
            charname[i] = x;
        }
        for(var i = 0; i < 24; i++){
            $(cellname[i]).children().html(charname[i]);
            $(cellname[i]).append('<img src="'+characterlist[i]+'">');
        }

        $(cellname[0]).on('click',()=>{
            if(pairsfound.includes("#cell0") == false && cellclicked != cellname[0]){
                $(cellname[0]).children('img').show();
                $(cellname[0]).css('background-image','none');
                if(numofclicks==0){
                    numofclicks += 1;
                    cellclicked = "#cell0";
                    firstclick = $(cellname[0]).children('p').text();
                }
                else 
                {
                    checkpair("#cell0")
                }
            }
        });
        $(cellname[1]).on('click',()=>{
            if(pairsfound.includes("#cell1") == false){
                $(cellname[1]).children('img').show();
                $(cellname[1]).css('background-image','none');
                if(numofclicks==0){
                    numofclicks += 1;
                    cellclicked = "#cell1";
                    firstclick = $(cellname[1]).children('p').text();
                }
                else {
                    setTimeout(checkpair("#cell1"),400);
                }
            }
        });
        $(cellname[2]).on('click',()=>{
            if(pairsfound.includes("#cell2") == false){
                $(cellname[2]).children('img').show();
                $(cellname[2]).css('background-image','none');
                if(numofclicks==0){
                numofclicks += 1;
                cellclicked = "#cell2";
                firstclick = $(cellname[2]).children('p').text();
                }
                else {
                    
                    checkpair("#cell2");
                }
            }
        });
        $(cellname[3]).on('click',()=>{
            if(pairsfound.includes("#cell3") == false){
                $(cellname[3]).children('img').show();
                $(cellname[3]).css('background-image','none');
                if(numofclicks==0){
                    numofclicks += 1;
                    cellclicked = "#cell3";
                    firstclick = $(cellname[3]).children('p').text();
                }
                else 
                {
                    
                    checkpair("#cell3");
                }
            }
        });
        $(cellname[4]).on('click',()=>{
            if(pairsfound.includes("#cell4") == false){
                $(cellname[4]).children('img').show();
                $(cellname[4]).css('background-image','none');
                if(numofclicks==0){
                    numofclicks += 1;
                    cellclicked = "#cell4";
                    firstclick = $(cellname[4]).children('p').text();
                }
                else 
                {
                    
                    checkpair("#cell4");
                }
            }
        });
        $(cellname[5]).on('click',()=>{
            if(pairsfound.includes("#cell5") == false){
                $(cellname[5]).children('img').show();
                $(cellname[5]).css('background-image','none');
                if(numofclicks==0){
                    numofclicks += 1;
                    cellclicked = "#cell5";
                    firstclick = $(cellname[5]).children('p').text();
                }
                else 
                {
                    
                    checkpair("#cell5");
                }
            }
        });
        
        
            $(cellname[6]).on('click',()=>{
                if(pairsfound.includes("#cell6") == 'false'){
                    $(cellname[6]).children('img').show();
                    $(cellname[6]).css('background-image','none');
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell6";
                        firstclick = $(cellname[6]).children('p').text();
                    }
                    else {
                        checkpair('#cell6');
                    }
                }
            });
            $(cellname[7]).on('click',()=>{
                if(pairsfound.includes("#cell7") == 'false'){
                    $(cellname[7]).css('background-image','none');
                    $(cellname[7]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell7";
                        firstclick = $(cellname[7]).children('p').text();
                    }
                    else {
                        checkpair('#cell7');
                    }
                }
            });
            $(cellname[8]).on('click',()=>{
                if(pairsfound.includes("#cell8") == 'false'){
                    $(cellname[8]).css('background-image','none');
                    $(cellname[8]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell8";
                        firstclick = $(cellname[8]).children('p').text();
                    }
                    else {
                        checkpair('#cell8');
                    }
                }
            });
            $(cellname[9]).on('click',()=>{
                if(pairsfound.includes("#cell9") == 'false'){
                    $(cellname[9]).children('img').show();
                    $(cellname[9]).css('background-image','none');
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell9";
                        firstclick = $(cellname[9]).children('p').text();
                    }
                    else {
                        checkpair('#cell9');
                    }
                }
            });
            $(cellname[10]).on('click',()=>{
                if(pairsfound.includes("#cell10") == 'false'){
                    $(cellname[10]).css('background-image','none');
                    $(cellname[10]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell10";
                        firstclick = $(cellname[10]).children('p').text();
                    }
                    else {
                        checkpair('#cell10');
                    }
                }
            });
            $(cellname[11]).on('click',()=>{
                if(pairsfound.includes("#cell11") == 'false'){
                    $(cellname[11]).css('background-image','none');
                    $(cellname[11]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell11";
                        firstclick = $(cellname[11]).children('p').text();
                    }
                    else {
                        checkpair('#cell11');
                    }
                }
            });
            $(cellname[12]).on('click',()=>{
                if(pairsfound.includes("#cell12") == 'false'){
                    $(cellname[12]).css('background-image','none');
                    $(cellname[12]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell12";
                        firstclick = $(cellname[12]).children('p').text();
                    }
                    else {
                        checkpair('#cell12');
                    }
                }
            });
            $(cellname[13]).on('click',()=>{
                if(pairsfound.includes("#cell13") == 'false'){
                    $(cellname[13]).css('background-image','none');
                    $(cellname[13]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell13";
                        firstclick = $(cellname[13]).children('p').text();
                    }
                    else {
                        checkpair('#cell13');
                    }
                }
            });
            $(cellname[14]).on('click',()=>{
                if(pairsfound.includes("#cell14") == 'false'){
                    $(cellname[14]).css('background-image','none');
                    $(cellname[14]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell14";
                        firstclick = $(cellname[14]).children('p').text();
                    }
                    else {
                        checkpair('#cell14');
                    }
                }
            });
            $(cellname[15]).on('click',()=>{
                if(pairsfound.includes("#cell15") == 'false'){
                    $(cellname[15]).css('background-image','none');
                    $(cellname[15]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell15";
                        firstclick = $(cellname[15]).children('p').text();
                    }
                    else {
                        checkpair('#cell15');
                    }
                }
            });
            $(cellname[16]).on('click',()=>{
                if(pairsfound.includes("#cell16") == 'false'){
                    $(cellname[16]).css('background-image','none');
                    $(cellname[16]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell16";
                        firstclick = $(cellname[16]).children('p').text();
                    }
                    else {
                        checkpair('#cell16');
                    }
                }
            });
            $(cellname[17]).on('click',()=>{
                if(pairsfound.includes("#cell17") == 'false'){
                    $(cellname[17]).css('background-image','none');
                    $(cellname[17]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell17";
                        firstclick = $(cellname[17]).children('p').text();
                    }
                    else {
                        checkpair('#cell17');
                    }
                }
            });
            $(cellname[18]).on('click',()=>{
                if(pairsfound.includes("#cell18") == 'false'){
                    $(cellname[18]).css('background-image','none');
                    $(cellname[18]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell18";
                        firstclick = $(cellname[18]).children('p').text();
                    }
                    else {
                        checkpair('#cell18');
                    }
                }
            });
            $(cellname[19]).on('click',()=>{
                if(pairsfound.includes("#cell19") == 'false'){
                    $(cellname[19]).css('background-image','none');
                    $(cellname[19]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell19";
                        firstclick = $(cellname[19]).children('p').text();
                    }
                    else {
                        checkpair('#cell19');
                    }
                }
            });
            $(cellname[20]).on('click',()=>{
                if(pairsfound.includes("#cell20") == 'false'){
                    $(cellname[20]).css('background-image','none');
                    $(cellname[20]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell20";
                        firstclick = $(cellname[20]).children('p').text();
                    }
                    else {
                        checkpair('#cell20');
                    }
                }
            });
            $(cellname[21]).on('click',()=>{
                if(pairsfound.includes("#cell21") == 'false'){
                    $(cellname[21]).css('background-image','none');
                    $(cellname[21]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell21";
                        firstclick = $(cellname[21]).children('p').text();
                    }
                    else {
                        checkpair('#cell21');
                    }
                }
            });
            $(cellname[22]).on('click',()=>{
                if(pairsfound.includes("#cell22") == 'false'){
                    $(cellname[22]).css('background-image','none');
                    $(cellname[22]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell22";
                        firstclick = $(cellname[22]).children('p').text();
                    }
                    else {
                        checkpair('#cell22');
                    }
                }
            });
            $(cellname[23]).on('click',()=>{
                if(pairsfound.includes("#cell23") == 'false'){
                    $(cellname[23]).css('background-image','none');
                    $(cellname[23]).children('img').show();
                    if(numofclicks == 0){
                        numofclicks += 1;
                        cellclicked="#cell23";
                        firstclick = $(cellname[23]).children('p').text();
                    }
                    else {
                        checkpair("#cell23");
                    }
                }
            });
            
            function checkpair(nameofcell){
                $("#timer").html(numofclicks+cellclicked+firstclick+'  check pair is executed');
                let secondclick = $(nameofcell).children('p').text();
                if(secondclick == firstclick){
                    $("#timer").html('check pair if');
                    pairsfound.push(cellclicked);
                    pairsfound.push(nameofcell);
                    pairsremaining -= 1;
                }
                else{
                    $(cellclicked).children('img').hide();
                    $(nameofcell).children('img').hide();
                    $(nameofcell).css('background-image','url("mark.png")');
                    $(cellclicked).css('background-image','url("mark.png")');
                }
                firstclick = "";
                numofclicks = 0;
                $('#pairs').html(pairsremaining);

                if(pairsremaining == 0){
                    $(".gridcontainer").css('display','none'); 
                    $("#won").show();
                }
            }
        
    });
    
});

   





