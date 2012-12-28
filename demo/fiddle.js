window.onload = function(){
  /* create VIM instance for each textarea */
  var vim = new VIM()

  /* log to console log */
  vim.on_log = function(x){ console.log('VIM: ' + x.toString()) }

  var target = document.getElementById('sandbox')
  if (target !== null) {
    /* attach vim */
    vim.attach_to( target )
    target.focus()
  }
}

