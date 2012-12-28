vim-in-textarea
===============

Add VIM functionality to textarea. Implemented as a single module in JavaScript, no jQuery needed.

Check online jsfiddle demo [here][demo-link]

[demo-link]: http://jsfiddle.net/gh/gist/mootools/1.2/4397764/

Available commands
==================

Currently available commands:

    $ 0 1 2 3 4 5 6 7 8 9 <Backspace> <Down> <Enter> <Left> <Right> <Up> A B C D E G J O P W a b e h i j k l o p s u v w x
    c: $ 0 <Backspace> <Down> <Enter> <Left> <Right> <Up> B E G W b c e h j k l w
    ca: " ' ( ) < > W [ ] w { }
    cgg
    ci: " ' ( ) < > W [ ] w { }
    d: $ 0 <Backspace> <Down> <Enter> <Left> <Right> <Up> B E G W b d e h j k l w
    da: " ' ( ) < > W [ ] w { }
    dgg
    di: " ' ( ) < > W [ ] w { }
    gg
    y: $ 0 <Backspace> <Down> <Enter> <Left> <Right> <Up> B E G W b e h j k l w y
    ya: " ' ( ) < > W [ ] w { }
    ygg
    yi: " ' ( ) < > W [ ] w { }

Author and licensing
=========

This work is released under GNU GPL licence. Exceptions are possible for commercial/closed source works.

Author: [Jakub Mikians][linkedin]

[linkedin]: http://www.linkedin.com/pub/jakub-mikkians/19/549/608

