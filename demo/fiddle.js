window.onload = function(){
  /* create VIM instance for each textarea */
  var vim = new VIM()

  /* log debug messages */
  // vim.on_log = function(m){ console.log('VIM: '+m) }
  vim.on_log = function(m) {
    var LENGTH = 10
    var p = $('<div></div>').text( m )
    $('#log').prepend( p )
    if ( $('#log').children().length > LENGTH ) {
      $('#log').children(':last').remove()
    }
  }

  var target = document.getElementById('sandbox')
  if (target !== null) {
    /* attach vim. this is the only line really needed */
    vim.attach_to( target )
    target.focus()
  }
}

