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
* ...and [more][available commands]!

[available commands]:https://github.com/jakub-m/vim-in-textarea/wiki/Available-commands

# Licensing and author #

This work is released under [GNU GPL version 3][gpl] licence. Exceptions are
possible for commercial or closed source works.  If you use the script, **let
me know**! I am happy to hear your feedback and see the script working in the
wild.

[gpl]: http://www.gnu.org/licenses/gpl.html

Author: Jakub Mikians, see his profile on [LinkedIn][linkedin].

Contact: *jakub dot mikians at gmail dot com*

[linkedin]: http://www.linkedin.com/pub/jakub-mikians/19/549/608




