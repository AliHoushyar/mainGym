$(document).ready(function(){
    $('#sendBTN').click(function(){
        if($('#message').val() !== ""){
            $('.chatBox').append(
                '<div id="new" class="mychat"><p>' + $('#message').val() +'</p></div>'
            )
        }
        $('#message').val("");
        $('.chatBox').scrollTop($(".chatBox").prop("scrollHeight"))
    })
})