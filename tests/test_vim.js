var text1 = [
'',  // 0
'',  // 1
'',  // 2 
'aaa', // 3 
'bbb', // 7
'', // 11
'', // 12 
'' // 13
].join("\n")

test('Select line at', function(){
  deepEqual( select_line( text1, 4), [3, 3] )
  deepEqual( select_line( text1, 7), [7, 3] )
  deepEqual( select_line( text1, 8), [7, 3] )
  deepEqual( select_line( text1, 12), [12, 0] )
  deepEqual( select_line( text1, 13), [13, 0] )
  deepEqual( select_line( text1, 0), [0, 0] )
})

test('Select next line', function(){
  deepEqual( select_next_line(text1, 0), [1,0] )
  deepEqual( select_next_line(text1, 2), [3,3] )
  deepEqual( select_next_line(text1, 5), [7,3] )
  deepEqual( select_next_line(text1, 9), [11,0] )
  deepEqual( select_next_line(text1, 13), undefined )
  deepEqual( select_next_line(text1, 100), undefined )
})

test('Select prev line', function(){
  deepEqual( select_prev_line(text1, 0), undefined )
  deepEqual( select_prev_line(text1, 1), [0,0] )
  deepEqual( select_prev_line(text1, 5), [2,0] )
  deepEqual( select_prev_line(text1, 9), [3,3] )
  deepEqual( select_prev_line(text1, 13), [12,0] )
})

test('Count whit space from', function(){
  var t = '    abc def'
  equal( count_space_from(t,0), 4 )
  equal( count_space_from(t,1), 3 )
  equal( count_space_from(t,2), 2 )
  equal( count_space_from(t,3), 1 )
  equal( count_space_from(t,4), 0 )
  equal( count_space_from(t,5), 0 )
})

var text2 = "abc def ghi abc def ghi"
test("Mark word", function() {
  deepEqual( find_word(text2, 5),  [4,3] )
  deepEqual( find_word(text2, 0),  [0,3] )
  deepEqual( find_word(text2, 16), [16,3] )
  deepEqual( find_word(text2, 21), [20,3] )
  deepEqual( find_word('abcdef', 0), [0,6] )
  deepEqual( find_word('!!! !!! !!!', 5), [4,3] )
  deepEqual( find_word('abłcd',0), [0,5] )
  deepEqual( find_word('abc...ghi', 0), [0,3] )
  deepEqual( find_word('abc...ghi', 3), [3,3] )
})

test('Find word with spaces after', function() {
  var t = 'abc def ghi abc def ghi'
  deepEqual( find_word_with_spaces_after(t, 0),  [0,4] )
  deepEqual( find_word_with_spaces_after(t, 5),  [4,4] )
  deepEqual( find_word_with_spaces_after(t, 16), [16,4] )
  deepEqual( find_word_with_spaces_after(t, 21), [20,3] )
  deepEqual( find_word_with_spaces_after('abcdef', 0), [0,6] )
  deepEqual( find_word_with_spaces_after('!!! !!! !!!', 5), [4,4] )
  deepEqual( find_word_with_spaces_after('    abc def', 2), [0,4])
})

//test('Find word with spaces before',function(){
//  var t = '  23  67 90'
//  deepEqual( find_word_with_spaces_before(t,3), [0,4] )
//  deepEqual( find_word_with_spaces_before(t,6), [4,4] )
//  deepEqual( find_word_with_spaces_before(t,7), [4,4] )
////  deepEqual( find_word_with_spaces_before(t,8), [8,3] )
//  deepEqual( find_word_with_spaces_before(t,9), [8,3] )
//  deepEqual( find_word_with_spaces_before(t,10), [8,3] )
//})

test('Count spaces to', function(){
  var t = 'abc   def ghi '
  equal( count_space_to(t, 0), 0 )
  equal( count_space_to(t, 3), 0 )
  equal( count_space_to(t, 6), 3 )
  equal( count_space_to(t, 7), 0 )
  equal( count_space_to(t,10), 1 )
  equal( count_space_to(t,14), 1 )
  equal( count_space_to(t,15), 0 )
})


test("Mark WORD", function() {
  var t = '000.000 000.000 000.000'
  deepEqual( find_word_plus(t, 0),  [0,7] )
  deepEqual( find_word_plus(t, 1),  [0,7] )
  deepEqual( find_word_plus(t, 14), [8,7] )
  deepEqual( find_word_plus(t, 22), [16,7] )
})

test("Mark WORD with trailing spaces", function(){
  var t = '000.000 000.000 000.000'
  deepEqual( find_word_plus_with_trailing_spaces(t, 0),  [0,8] )
  deepEqual( find_word_plus_with_trailing_spaces(t, 1),  [0,8] )
  deepEqual( find_word_plus_with_trailing_spaces(t, 14), [8,8] )
  deepEqual( find_word_plus_with_trailing_spaces(t, 22), [16,7] )
})

test('Till right word bound', function(){
  deepEqual( till_right_word_bound(text2, 0), [0,3])
  deepEqual( till_right_word_bound(text2, 1), [1,2])
  deepEqual( till_right_word_bound(text2, 2), [2,1])
  deepEqual( till_right_word_bound(text2, 3), [3,1])
  deepEqual( till_right_word_bound(text2, 4), [4,3])
})

//test('Till left word bound', function(){
//  deepEqual( till_left_word_bound(text2, 0), [0,0])
//  deepEqual( till_left_word_bound(text2, 1), [0,1])
//  deepEqual( till_left_word_bound(text2, 2), [0,2])
//  deepEqual( till_left_word_bound(text2, 3), [3,0])
//  deepEqual( till_left_word_bound(text2, 4), [4,0])
//  deepEqual( till_left_word_bound(text2, 5), [4,1])
//})

test('Till next word', function(){
  var t = 'aa bb cc'
  deepEqual( till_next_word(t, 0), [0,3])
  deepEqual( till_next_word(t, 1), [1,2])
  deepEqual( till_next_word(t, 2), [2,1])
  deepEqual( till_next_word(t, 3), [3,3])
  deepEqual( till_next_word(t, 4), [4,2])
  deepEqual( till_next_word(t, 5), [5,1])
  deepEqual( till_next_word(t, 6), [6,2])
  deepEqual( till_next_word(t, 7), [7,1])
  deepEqual( till_next_word(t, 8), [8,0])
})

test('Till next word plus',function(){
  var t = 'a.b c!d e|f'
  deepEqual( till_next_word_plus(t,0),  [0,4] )
  deepEqual( till_next_word_plus(t,1),  [1,3] )
  deepEqual( till_next_word_plus(t,2),  [2,2] )
  deepEqual( till_next_word_plus(t,3),  [3,1] )
  deepEqual( till_next_word_plus(t,5),  [5,3] )
  deepEqual( till_next_word_plus(t,9),  [9,2] )
  deepEqual( till_next_word_plus(t,11), [11,0] )
})

test('Select quotes', function(){
  var t = '""abc "def" ghi "jkl"'
  var sel = function(p){ return select_quotes('"', t, p) }
  deepEqual( sel(0), [0,2] )
  deepEqual( sel(1), [1,6] )
  deepEqual( sel(7), [6,5] )
  deepEqual( sel(9), [6,5] )
  deepEqual( select_quotes('"', 'hello', 2), [2,0] )
})

test('Select bracket', function(){
  var t = '[[2]4[6]]9[1]3[5['
  var sel = function(p){ return select_bounds('[]', t, p) }
  deepEqual( sel(2), [1,3] )
  deepEqual( sel(0), [0,9] )
  deepEqual( sel(4), [0,9] )
  deepEqual( sel(9), [9,0] )
  deepEqual( sel(15), [15,0] )
  deepEqual( sel(10), [10,3] )
  deepEqual( sel(11), [10,3] )
  deepEqual( sel(12), [10,3] )
})

test('Select paragraph', function(){
  var t = "abc\n\ndef\n\nghi"
  //       012 3 4567 8 9012
  var sel = function(p){ return select_paragraph(t, p) }
  deepEqual( sel(1), [0,3] )
  deepEqual( sel(6), [5,3] )
  deepEqual( sel(11), [10,3] )
})

test("Partial", function() {
  var add = function(a,b){return a+b}
  equal( add.partial(2)(3), 5 )
  equal( add.partial("foo")("bar"), "foobar")
  equal( add.partial()("foo","bar"), "foobar")
  equal( add.partial("foo","bar")(), "foobar")
})

test('Proxy', function(){
  var f = function(a){ return this.x + a } 

  var f10 = (function(){
    this.x = 10
    return f
  })()

  var c20 = {x: 20}
  var f20 = _proxy( f, c20 )

  equal( f10(1), 11 )
  equal( f20(2), 22 )
})

// -------------------------------------------------------------------------

//var text1 = "abc\ndef\nghi\n\n"
////           012 3456 7890 1 2 
//
//test("Core functions", function() {
//  equal( reverse_str(""), "" )
//  equal( reverse_str("abc"), "cba" )
//
//  deepEqual( reverse([]), [])
//  deepEqual( reverse([1,2,3]), [3,2,1])
//
//  deepEqual( index_nl(""), [] )
//  deepEqual( index_nl(text1), [3,7,11,12] )
//})


//test("RegEx finding functions", function() {
//  equal( regex_end_pos( /abc/g, text2 ), 3)
//  equal( regex_end_pos( /def/g, text2 ), 7)
//  equal( regex_end_pos( /zzz/g, text2 ), null)
//  equal( regex_end_pos( /abc/g, text2, {from:5} ), 15)
//  equal( regex_end_pos( /abc/g, text2, {from:17} ), null)
//})
//
//test("RegEx backward", function() {
//  equal( regex_end_pos_back( /abc/g, text2), 15 )
//  equal( regex_end_pos_back( /abc/g, text2, {to: 13} ), 3 )
//  equal( regex_end_pos_back( /abc/g, text2, {to: 2} ), null )
//})
//
//test("Next line", function() {
//  equal( next_line(text1, 0), 4)
//  equal( next_line(text1, 3), 8)
//  equal( next_line(text1, 4), 8)
//  equal( next_line(text1, 10), 12)
//  equal( next_line(text1, 12), 13)
//  equal( next_line(text1, 666), 13)
//})
//
//test("Next line", function() {
//  equal( next_end_of_line(text1, 0), 3)
//  equal( next_end_of_line(text1, 3), 3)
//  equal( next_end_of_line(text1, 4), 7)
//  equal( next_end_of_line(text1, 10), 11)
//  equal( next_end_of_line(text1, 12), 12)
//  equal( next_end_of_line(text1, 666), 12)
//})
//
//test("Line start", function() {
//  equal( find_line_start(text1, 0), 0)
//  equal( find_line_start(text1, 3), 0)
//  equal( find_line_start(text1, 4), 4)
//  equal( find_line_start(text1, 10), 8)
//  equal( find_line_start(text1, 12), 12)
//  equal( find_line_start(text1, 666), 13)
//})
//
//test("Cut text slice", function() {
//  deepEqual( cut_slice('abcde',0,0), {text:'abcde', cut:'', from:0, to:0} )
//  deepEqual( cut_slice('abcde',0,1), {text:'bcde', cut:'a', from:0, to:1} )
//  deepEqual( cut_slice('abcde',1,0), {text:'bcde', cut:'a', from:0, to:1} )
//  deepEqual( cut_slice('abcde',0,5), {text:'', cut:'abcde', from:0, to:5} )
//  deepEqual( cut_slice('abcde',5,0), {text:'', cut:'abcde', from:0, to:5} )
//  deepEqual( cut_slice('abcde',3,3), {text:'abcde', cut:'', from:3, to:3} )
//  deepEqual( cut_slice('abcde',3,4), {text:'abce', cut:'d', from:3, to:4} )
//  deepEqual( cut_slice('abcde',3,5), {text:'abc', cut:'de', from:3, to:5} )
//  deepEqual( cut_slice('abcde',5,3), {text:'abc', cut:'de', from:3, to:5} )
//})

//test("Mark word aggresive", function() {
//  var t = 'abc.def ..!!^$&#!@ |..hhh'
//  deepEqual( find_word_bounds_aggr(t, 3),  [0,7] )
//  deepEqual( find_word_bounds_aggr(t, 9),  [8,18] )
//  deepEqual( find_word_bounds_aggr(t, 22), [19,25] )
//})
//
//test("Mark word with trailing spaces", function() {
//  deepEqual( with_trailing_spaces(find_word_bounds)(text2, 5),  [4,8] )
//  deepEqual( with_trailing_spaces(find_word_bounds)(text2, 0),  [0,4] )
//  deepEqual( with_trailing_spaces(find_word_bounds)(text2, 16), [16,20] )
//  deepEqual( with_trailing_spaces(find_word_bounds)(text2, 21), [20,23] )
//  deepEqual( with_trailing_spaces(find_word_bounds)('abcdef', 0), [0,6] )
//  deepEqual( with_trailing_spaces(find_word_bounds)('!!! !!! !!!', 5), [4,8] )
//})

//test("Unwind function stack", function(){
//  deepEqual( unwind_stack([]), [] )
//  deepEqual( unwind_stack([2]), [] )
//  deepEqual( unwind_stack([1,'a']), ['a'] )
//  deepEqual( unwind_stack([2,'a']), ['a','a'] )
//  deepEqual( unwind_stack([2,'a',2,'b']), ['a','b','b','a','b','b'] )
//})
//
//
//test("Extract line", function(){
//  var t = "aaa\nbb bb\n\ncc cc cc"
//
//  deepEqual( extract_line_at(t, 0),  {text:'aaa',      from:0,  to:3} )
//  deepEqual( extract_line_at(t, 2),  {text:'aaa',      from:0,  to:3} )
//  deepEqual( extract_line_at(t, 3),  {text:'aaa',      from:0,  to:3} )
//  deepEqual( extract_line_at(t, 4),  {text:'bb bb',    from:4,  to:9} )
//  deepEqual( extract_line_at(t, 8),  {text:'bb bb',    from:4,  to:9} )
//  deepEqual( extract_line_at(t, 9),  {text:'bb bb',    from:4,  to:9} )
//  deepEqual( extract_line_at(t, 10), {text:'',         from:10, to:10} )
//  deepEqual( extract_line_at(t, 11), {text:'cc cc cc', from:11, to:19} )
//  deepEqual( extract_line_at(t, 18), {text:'cc cc cc', from:11, to:19} )
//})
//
//test("any()", function() {
//  var fn = function(x){ return x == 1 }
//  equal( any(fn,[]), false )
//  equal( any(fn,[0]), false )
//  equal( any(fn,[0,1]), true )
//  equal( any(fn,[1]), true )
//  equal( any(fn,[0,2]), false )
//})
//
//var mock_get_selection = function(p) {
//  p.from = 4
//  p.to = 7
//  return p
//}
//
////test("Command stack", function() {
////  var text = "abc def ghi"
////  var cs = [ cmd_remove_from_to, mock_get_selection, cmd_feed({text:text}) ]
////  var r = exec_stack( cs )
////  equal( r.text, 'abc  ghi' )
////})
//
//test("Command stack - execute and unwind partially", function() {
//  var put = function(c) {
//    return function(p) {
//      p.text = p.text + c
//      return p
//    }
//  }
//  var cs, r, state, cs
//
//  cs = [ put('b'), put('a') ]
//  state  = {text:''}
//
//  r = exec_stack_ex( state, cs )
//  equal( r.state.text, 'ab' )
//  equal( r.cs.length, 0 )
//
//  cs = [ 2, put('b'), put('a') ],
//  state = {text:''}
//  r = exec_stack_ex( state, cs )
//  equal( r.state.text, 'abab' )
//  equal( r.cs.length, 0 )
//
//  cs = [ 4, put('c'), 'HALT', 2, put('b'), put('a') ],
//  state = {text:''}
//  r = exec_stack_ex( state, cs, 'HALT' )
//  equal( r.state.text, 'abab' )
//  equal( r.cs.length, 2 )
//  equal( r.cs[0], 4 )
//  state = r.state
//  cs = r.cs
//
//  r = exec_stack_ex( state, cs, 'HALT' )
//  equal( r.state.text, 'ababcccc' )
//  equal( r.cs.length, 0 )
//
//})
//
//test("Attr getter", function(){
//  var xs = { a:'A', b:'B', c:'C'}
//  var fn = function(x,y){ return x+y }
//  var fn2 = function() { return 'hello' }
//  equal( fnattrgetter(fn, ['a','b'])(xs) , 'AB' )
//  equal( fnattrgetter(fn, ['c','a'])(xs) , 'CA' )
//  equal( fnattrgetter(fn2, [])(xs) , 'hello' )
//
//})
//
//test("Array: One of", function(){
//  equal( is_in('a', ''),    false )
//  equal( is_in('a', 'a'),   true  )
//  equal( is_in('a', 'az'),  true  )
//  equal( is_in('a', 'abc'), true  )
//  equal( is_in('a', 'xyz'), false )
//  equal( is_in('a', 'xyz'), false )
//  equal( is_in('a', ''),    false )
//  equal( is_in( '', ''),    false )
//  equal( is_in( '', 'abc'), false )
//})
//
////test("Command stack halt", function() {
////  var text = "abc def ghi"
////  var cs = [ cmd_remove_from_to, 'HALT', mock_get_selection, cmd_feed({text:text}) ]
////  var r = exec_stack_until( cs, 'HALT' )
////  equal( r.state.text, text )
////  equal( r.cs.length, 1 )
////})
//
//test("Repeat", function() {
//  deepEqual( repeat([],3), [] )
//  deepEqual( repeat([1,2],0), [] )
//  deepEqual( repeat([1,2],1), [1,2] )
//  deepEqual( repeat([1,2],3), [1,2,1,2,1,2] )
//})
//
//
