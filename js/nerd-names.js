function nerdList() {
    
    $.ajax({
        url         : '/nerd-names',            // this string is the flag for your db service in fileserver.js //
        contentType : 'text/json',
        dataType    : 'json',
        success     : function(data) {
            
            // Animate & inject db results //
            var fade = 0;
            var dataChunk = '';         // better performance to manipulate the dom with 1 call //
                                        // than appending each item at a time //
            
            for (var i = 0; i < data.length; i++) {
                  dataChunk += '<li style="display:none;"><a nerd="'+data[i].name+'" href="#nerd"><span class="icon-font pad-right">U</span>'+data[i].name+'</a></li>';
            }
            
            $('#nerd-list').append(dataChunk).listview('refresh').find('li').each(function() {
                  $(this).delay(fade).fadeIn();
                  fade += 150;
            });
            
        }
    }); 
    
}