$(document).ready(()=>{
    $(".cosmeticsurgery").on('click',()=>{
        $('.cosmeticsurgery').hide();
        $('.plasticsurgery').css('display','flex');
    });
    $('#southkorea').on('click',()=>{
        $('#southkorea').hide();
        $('.south').fadeIn(500);
    });

    $('.heading').on('click',()=>{
        $('.heading').hide();
        $('#before').css('display','flex');
    });
});

