# vim-in-textarea #

Add a subset of VIM functionality to textarea. Check online jsfiddle demo [here][demo-link].

[demo-link]: http://jsfiddle.net/gh/gist/mootools/1.2/4397764/

Implemented as a single module in JavaScript, no jQuery needed.  By default, it
does not log anything (i.e., if it is in *command* or *insert* mode), neither
it alters textarea look or style.

You can install [an experimental extension][extension] that will attach vim script to all textarea elements.
[extension]:http://crossrider.com/apps/23338/install_page

It is still in development, and it was tested with a few selected browsers/OS configurations.

# Features #

* single JS file
* no external dependencies (e.g, jQuery)
* supported visual mode `v`
* yank `y`, delete `d`, paste `p`
* preserve indention on `Enter`
* indent paragraphs, e.g. `>ap`
* delete / yank words and brackets (`daw`, `diw`, `ca[`, ...)
* undo `u`
* repeat commands, e.g. `5dd`
* ...and more!

# Available commands #

Currently available commands (automagically generated from command tree):

    $ 0 1 2 3 4 5 6 7 8 9 <Backspace> <Down> <Enter> <Left> <Right> <Up> A B C D E G J O P W a b e h i j k l o p s u v w x
    <: $ 0 < <Backspace> <Down> <Enter> <Left> <Right> <Up> B E G W b e h j k l w
    <a: " ' ( ) < > W [ ] p w { }
    <gg
    <i: " ' ( ) < > W [ ] p w { }
    >: $ 0 <Backspace> <Down> <Enter> <Left> <Right> <Up> > B E G W b e h j k l w
    >a: " ' ( ) < > W [ ] p w { }
    >gg
    >i: " ' ( ) < > W [ ] p w { }
    c: $ 0 <Backspace> <Down> <Enter> <Left> <Right> <Up> B E G W b c e h j k l w
    ca: " ' ( ) < > W [ ] p w { }
    cgg
    ci: " ' ( ) < > W [ ] p w { }
    d: $ 0 <Backspace> <Down> <Enter> <Left> <Right> <Up> B E G W b d e h j k l w
    da: " ' ( ) < > W [ ] p w { }
    dgg
    di: " ' ( ) < > W [ ] p w { }
    gg
    y: $ 0 <Backspace> <Down> <Enter> <Left> <Right> <Up> B E G W b e h j k l w y
    ya: " ' ( ) < > W [ ] p w { }
    ygg
    yi: " ' ( ) < > W [ ] p w { }

# Licensing and author #

    This work is released under [GNU GPL version 3][gpl] licence. Exceptions are
    possible for commercial or closed source works.  If you use the script, **let
    me know**! I am happy to hear your feedback and see the script working in the
    wild.

    [gpl]: http://www.gnu.org/licenses/gpl.html

Author: [Jakub Mikians][linkedin]

[linkedin]: http://www.linkedin.com/pub/jakub-mikkians/19/549/608

