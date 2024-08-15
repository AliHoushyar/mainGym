$('.menuBtn').click(function(){
    $('.phoneSideBar').css({
        right:"0px"
    })
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
})
$('.closeBTN').click(function(){
    $('.phoneSideBar').css({
        right:"-500px"
    })
    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
})