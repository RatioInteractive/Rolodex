// This lets you make your calls before jquery-mobile does it's ajax calls to display this page //
$(document).delegate('#home', 'pagebeforecreate', function() {
    nerdList();     // js/nerd-names.js
});

$(document).delegate('#nerd', 'pageremove', function() {
    console.log('page removed');
    nerd($(this).attr('nerd'));     // js/nerd.js
});

$(document).ready(function() {
    
    $('#new-nerd-btn').on('tap', function() {
        $.mobile.showPageLoadingMsg();
        newNerd($('#new-nerd-name').val());
    });
    
    $('#add-to-nerd-btn').on('tap', function() {
        $.mobile.showPageLoadingMsg();
        addToNerd(
            $('#nerd').attr('name'),
            $('#nerd-meta-key').val(), 
            $('#nerd-meta-value').val(),
            $('#nerd').attr('data-id')
        );
    });
    
    $('#nerd-list').on('click','a', function() {
        $.mobile.showPageLoadingMsg();
        nerd($(this).attr('nerd'));
    });
    
    $('#nerd-refresh').on('tap', function() {
        nerd($('#nerd').attr('name')); 
    });
    
    /* $('#nerd-list-refresh').on('tap', function() {
       nerdList(); 
    }); */
    
});