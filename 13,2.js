const setDirection = (cur, turn) => {

    if (turn == 0) {

        if (cur == '>') {
            return '^';
        } else if (cur == '^') {
            return '<';
        } else if (cur == '<') {
            return 'v';
        } else {
            return '>';
        }

    } else if (turn == 1) {

        return cur;

    } else {

        if (cur == '>') {
            return 'v';
        } else if (cur == '^') {
            return '>';
        } else if (cur == '<') {
            return '^';
        } else {
            return '<';
        }

    }

};

// Note: after pasting your input down there , change all \ to \\ using replace
// in your code editor (be sure NOT to change the last 5 found by search as they are part of the algorithm)
// Make sure to get the spaces correct!

const input = `                                                /-----------------------------------------------------------------\\                                   
                                                |    /------------------------------\\                             |                                   
       /----------------------------------------+----+------------------------------+----------------------------\\|                                   
       |     /---------------------->-----------+----+--\\     /---------------------+----------------------------++------------------------------\\    
       |     |                             /----+----+--+-----+---------------------+----------------------------++-------\\                      |    
       | /---+-----------------------------+----+----+--+-----+---------------------+--------------\\             ||       |                      |    
       | | /-+-----------------------------+----+----+--+-----+----------------\\  /-+--------------+-------------++-------+-----\\                |    
       | | | |     /-----------------------+----+----+--+--\\  |                |  | |             /+-------------++-------+-----+\\               |    
       | | | |     |                       |    |    |  |  |  |                |  | |     /-------++-------<-----++-------+-----++--\\            |    
   /---+-+-+-+-----+---------------\\       |  /-+----+--+--+--+----------------+--+-+-----+-------++-------------++-------+-----++--+------------+\\   
   |   | | | |     |               |      /+--+-+----+--+--+--+----------------+--+-+-----+-------++-------------++-------+-----++--+------------++--\\
   |   | | | |     |               |      ||  | |   /+--+--+--+---------\\ /----+--+-+-----+-------++-------------++--\\    |     ||  |            ||  |
   |   | | | |     |               |      ||  | |   ||/-+--+--+---------+-+----+--+-+-----+-------++-------------++--+----+---\\ ||  |            ||  |
   |   | | | |     |               |      ||  | |   |\\+-+--+--+---------+-+----+--+-/     |       ||             ||  |    |   | ||  |            ||  |
   | /-+-+-+-+-----+---------------+------++--+-+---+-+\\|  |  |         | |/---+--+-------+-------++-----------\\ ||  |    |   | ||  |            ||  |
   | | | | | |     |  /----------\\ |      ||  | |   | |||  |  |         | v|   |  |       |       ||           | ||  |    |   | ||  |            ||  |
   | | | | | |     | /+----------+\\|      ||  | |   | |||  |  |        /+-++---+--+-------+-------++-----------+-++-\\|    |   | ||  |            ||  |
   | | | | | \\-----+-++----------+++------++--+-+---+-++/  |  |/-------++-++---+--+-------+-------++---\\       | || ||    |   | ||  |            ||  |
   | | | | |     /-+-++----------+++------++--+-+---+-++---+--++-------++-++---+--+---\\   |       ||   |       | || ||    |   | ||  |            ||  |
   | | | | |     | | ||          |||      ||  | |   | || /-+--++-----\\ || ||   |  |   |   |       ||   |       | || ||    |   | ||  |            ||  |
   | | | | |     | | ||         /+++------++--+-+---+-++-+-+--++-----+-++-++---+--+---+---+-\\     ||   |       | || ||    |   | ||  |            ||  |
   | | | | |     | | ||     /---++++-\\ /--++--+-+---+-++-+-+--++-----+-++-++---+--+---+---+-+-----++---+-------+-++-++----+---+-++--+------------++\\ |
   | | | | |     | | ||     |   |||| | |  ||  | |   | || | |  ||     | || ||   |  |   |   | |     ||   |       | || ||    |/--+-++--+----------\\ ||| |
   | | | | |     | | || /---+---++++-+-+--++-\\| |   | || | |  ||     | ||/++---+->+---+---+-+-\\   ||   |       | || ||    ||  | ||  |          | ||| |
   | | | | |     | | || |   |   |||| | |  || || |   | || | |  ||/----+-+++++---+--+---+---+-+-+---++---+-------+-++-++----++--+-++--+-----\\    | ||| |
   | | | | |     | | || |   |   |||| | |  || || |   | || | |  |||    | \\++++---+--+---+---+-+-+---++---+-------+-++-/|    ||  | ||  |     |    | ||| |
   \\-+-+-+-+-----+-+-++-+---+---+++/ | |  \\+-++-+---+-++-+-+--+++----+--++++---+--+---+---+-+-+---++---+-------+-++--+----++--+-++--+-----+----+-+++-/
   /-+-+-+-+-----+-+-++-+---+---+++--+-+---+-++-+---+-++-+-+--+++----+--++++---+--+---+---+-+-+---++---+-\\     | ||  |    ||  | ||  |     |    | |||  
   | | | | |     | | || |   |   |||  | |   | || |   | || | |/-+++----+--++++---+--+---+---+-+-+---++---+-+-----+-++--+---\\||  | ||  |     |    | |||  
   | | | | |     | | || |   |   ||| /+-+---+-++-+---+-++-+-++-+++----+--++++---+--+---+---+-+-+---++---+-+-----+-++--+---+++--+-++--+---\\ |    | |||  
   | | | | |     | | || |   |   ||| || |  /+-++-+---+-++-+-++-+++----+--++++---+--+---+---+-+-+---++---+-+-----+-++--+---+++--+-++--+\\  | |    | |||  
   | | | | |     \\-+-++-+---+---+++-++-+--++-++-+---+-++-+-++-+++----+--++++---+--+---/   | | |   ||   | | /---+-++--+---+++--+-++--++--+-+---\\| |||  
   | | | | |       |/++-+---+---+++-++-+--++-++-+---+-++-+-++-+++----+--++++---+--+-----\\ | | |   \\+---+-+-+---+-++--+---+++--+-+/  ||  | |   || |||  
   | |/+-+-+-------++++-+--\\|   ||| || |  |\\-++-+---+-++-+-++-+++----+--++++---+--+-----+-+-+-+----+---+-+-+---+-++--+---+/|  | |   ||  | |   || |||  
   | ||| | |    /--++++-+--++---+++-++-+--+--++-+---+-++-+-++-+++----+--++++---+--+-----+-+-+-+----+-\\ | | |   | ||  |   | |  | |   ||  | |   || |||  
   | ||| | |    |  |||| |  ||   ||| || |  |/-++-+---+-++-+-++-+++----+--++++---+--+-----+-+-+-+----+-+-+-+-+---+-++--+---+-+--+-+---++--+-+---++-+++\\ 
   | ||| | |    |  |||| |  ||   ||| || |  || || |  /+-++-+-++-+++----+--++++---+--+-----+-+-+-+-\\  | | | | |   | ||  |   | |  | |   ||  | |   || |||| 
   | ||| | |    |  |||| |  ||   ||| || |  || || |  || || | || |||/---+--++++---+--+-----+-+-+-+-+--+-+-+-+-+---+-++-\\|   | |  | |   ||  | |   || |||| 
  /+-+++-+-+----+--++++\\|  ||   ||| || |  || || |  || || | || ||||   |  ||||/--+--+-----+-+-+-+-+--+-+-+-+-+---+-++-++---+-+--+-+-\\ ||  | |   || |||| 
 /++-+++-+-+----+--++++++--++---+++-++-+--++-++-+--++-++-+-++-++++---+--+++++--+--+-----+-+-+-+-+--+-+-+\\| |   | || ||   | |  | | | ||  | |   || |||| 
 ||| ||| | |    |  ||||||  ||   ||| || |/-++-++-+--++-++-+-++-++++---+--+++++--+--+-----+-+-+-+-+--+-+-+++-+--\\| || ||   | |  | | | ||  | |   || |||| 
/+++-+++-+-+---\\|  ||||||  ||   ||| || || || || |  || || |/++-++++---+--+++++--+--+-----+-+-+-+-+--+-+-+++-+--++-++-++---+-+--+-+-+-++--+-+---++\\|||| 
|||| ||| | |   ||  ||||||  ||/--+++-++-++-++-++-+--++-++-++++-++++---+--+++++--+--+-----+-+-+-+-+-\\| | ||| |  || || ||   | |  | | | ||  | |   ||||||| 
|||| ||| | |   ||  |||||| /+++--+++-++-++-++-++-+--++-++-++++-++++---+--+++++--+--+-----+-+-+-+-+-++-+-+++-+--++-++\\||   | |  | | | ||  | |   ||||||| 
|||| ||| | |   ||  |||||| ||||  ||| || ||/++-++-+--++-++-++++-++++---+--+++++--+--+-----+-+-+-+-+-++-+-+++-+--++-+++++---+-+--+-+-+-++--+-+\\  ||||||| 
|||| ||| | |   ||  |||||| ||||  ||| || ||||| || |  || || |||| ||||   |  |||||  |  |     | | | | | || | ||| |  || |||||   | |  | | | ||  | ||  ||||||| 
|||| ||| | |   ||  |||||| ||||  ||| || ||||| || |  || || |||| ||||/--+--+++++--+--+-----+-+-+-+-+-++-+-+++-+--++-+++++---+-+--+-+-+-++\\ | ||  ||||||| 
|||| ||| | |   ||  |||||^ ||||  ||| || ||||| || |  || || |||| |||||  |  ||\\++--+--+-----+-+-+-+-+-++-+-+++-+--++-++++/   | |  | | | ||| | ||  ||||||| 
|||| ||| | |   ||  |||||| ||||  ||| || ||||| || |  || || |||| |||||  |  || ||  |  |     | | | | | || | ||| |  || ||||    | |  | | | ||| | ||  ||||||| 
|||| ||| | |   ||  |||||| ||||  ||| || ||||| || |  || || |||| |||||  |  || ||  |  |     | |/+-+<+-++-+-+++-+--++-++++----+-+--+-+-+\\||| | ||  ||||||| 
|||| ||| | |   ||  |||||| ||||  ||| ||/+++++-++-+--++-++-++++-+++++--+--++-++--+--+\\    | ||| |/+-++-+-+++-+\\ || ||||    | |  | | ||||| | ||  ||||||| 
|||| ||| | | /-++--++++++-++++\\ ||| ||||||||/++-+--++-++-++++-+++++--+--++-++--+--++-\\  | ||| ||| || | ||| || || ||||    | |  | | ||||| | ||  ||||||| 
|||| ||| | | | ||  ||\\+++-+++++-++/ ||||||||||| | /++-++-++++-+++++--+--++-++--+--++-+--+-+++-+++\\|| | ||| || || ||||    | |  | | ||||| | ||  ||||||| 
|||| ||| | | | ||  || ||| ||||| ||  ||||||||||| | ||| || |||| |||||  |  || ||  |  || |  | ||| |||||| | ||| || || ||||    | |  | | ||||| | ||  ||||||| 
|||| ||| | | | ||  || ||| ||||| ||  ||||||||||| | ||| || |||| |||||  |  || \\+--+--++-+--+-+++-++++++-+-+++-++-+/ ||||    | |  | | ||||| | ||  ||||||| 
|||| ||| | | | ||  || ||| ||||| ||  ||||||||||| | ||| || |||| |||||  |  ||  |  |  || |  | ||| |||||| | ||| || |  ||||    | |  | | ||||| | ||  ||||||| 
|||| ||| | | | ||  || |||/+++++-++--+++++++++++-+-+++-++-++++-+++++--+--++--+--+--++-+--+-+++-++++++-+-+++-++-+-\\||||    | |  | | ||||| | ||  ||||||| 
|||| ||| | | | ||  || \\++++++++-+/  ||||||||||| | ||| || |||\\-+++++--+--++--+--+--++-+--+-+++-++++++-+-+++-++-+-+++++----/ |  | | ||||| | ||  ||||||| 
||\\+-+++-+-+-+-++--++--/||||||| |   ||||||||||| | ||| || |||  \\++++--+--++--+--+--++-+--+-+++-++++++-+-+++-++-+-+++++------+--+-+-+++++-+-++--+++/||| 
|| |/+++-+-+-+\\||  |\\---+++++++-+---+++++++++++-+-+++-++-+++---++++--+--++--+--+--++-+--/ ||| |||||| | ||| || | |||||      |  | | ||||| | ||  ||| ||| 
|| ||||| | | ||||  |    ||||||| |   ||||||||||| | ||| || |||   ||||  |/-++--+--+--++-+\\   ||| |||||| | ||| || | |||||      |  | | ||||| | ||  ||| ||| 
|| |||\\+-+-+-++++--+----+++/||| \\---+++++++++++-+-+++-++-+++---++++--++-++--+--+--++-++---++/ |||||| | ||| || | |||||      |  | | ||||| | ||  ||| ||| 
|| ||\\-+-+-+-++++--+----+++-+++-----+++++++++++-+-+++-+/ |||   |||| /++-++--+--+--++-++---++\\ |||||| | ||| || | |||||      |  | | ||||| | ||  ||| ||| 
|| ||  | | | ||||  |    ||| |||     ||||||||||| | ||| |  |\\+---++++-+++-++--+--+--++-++---+++-++++++-+-+++-++-+-+++++------+--+-+-+++++-+-++--++/ ||| 
|| ||  | | | ||||  |    ||| |||     ||||||||||| | ||| |  | |   ||\\+-+++-++--+--+--++-++---+++-++++++-+-+++-++-+-++++/      \\--+-+-+++++-+-++--+/  ||| 
|| ||  | | | ||||  |    ||| |||     |v||||||||| | ||| |  | |   || | ||| ||  |  |  || ||   ||| |||||| | ||| || | ||||          | | ||||| | ||  |   ||| 
|| ||  | | | ||||  |    ||| |||     ||||||||||| | ||| |  \\-+---++-+-+/| ||  |  |  || ||   ||| |||||| | ||| || | ||||          | | ||||| | ||  |   ||| 
|| ||  |/+-+-++++--+\\   ||| |||     ||||||||||| | ||| |    |   \\+-+-+-+-++--+--+--++-++---+++-++++++-+-/|| || | ||||          | |/+++++-+-++--+-\\ ||| 
|| ||  ||| |/++++--++---+++-+++-----+++++++++++-+-+++-+----+----+-+-+-+-++--+--+--++-++---+++-++++++-+-\\|| || | ||||          | ||||||| | ||  | | ||| 
|| ||  ||| ||||||  ||   ||| |||     ||||||||||| |/+++-+----+----+-+-+-+-++--+--+--++-++-\\/+++-++++++-+-+++-++-+-++++----------+-+++++++-+-++--+-+\\||| 
\\+-++--+++-++++/|  ||   ||| |||     ||||||||||| ||||| |    |    | | | | ||  |  |  ||/++-+++++-++++++-+-+++-++-+-++++----------+-+++++++-+-++\\ | ||||| 
 | ||  ||| |||| |  ||   ||| |||     ||||||||||| ||||| |    |    | | | | ||  |  |  ||||| ||||| |||||| | ||| || | ||||  /-------+-+++++++-+\\||| | ||||| 
 |/++--+++-++++-+--++---+++-+++---\\ ||||||||||| ||||| |   /+----+-+-+-+-++--+--+--+++++-+++++-++++++-+\\||| || | ||||  |       | ||||||| ||||| | ||||| 
 ||v|  ||| |||| |  || /-+++-+++---+-+++++++++++\\||||| |   ||    | | | | ||  |  |  ||||| |||||/++++++-+++++-++-+-++++--+-------+-+++++++-+++++-+\\||||| 
 |||v  ||| |||| |  || | ||\\-+++---+-+++++++++++++++++-+---++----+-+-+-+-++--+--+--+++++-++++++++++++-+++++-++-+-+++/  |       | ||||||| ||||| ||||||| 
 ||||  ||| |||| |  || | ||  |||   |/+++++++++++++++++-+---++----+-+-+-+-++--+--+--+++++-++++++++++++-+++++-++-+-+++---+-------+-+++++++\\||||| ||||||| 
 |||\\--+++-+++/ |  || |/++--+++---+++++++++++++++++++\\|   ||    | | | | ||  |  |  ||||| |||||||\\++++-+++++-+/ | |||   |       | ||||||||||||| ||||||| 
 |||   ||| |||  |  || ||||  |||   |||||\\+++++++++++++++---++----+-+-+-+-++--+--+--+++++-+++++++-++++-+++++-+--+-+++---+-------+-+++++++++++++-+++++/| 
 |||   ||| |||  |  || ||||  |||/--+++++-+++++++++++++++---++----+-+-+-+-++--+--+--+++++-+++++++-++++-+++++\\|  | |||   |       | ||||||||||||| ||||| | 
 |||   ||| |||  |  || |||| /++++--+++++-+++++++++++++++---++----+-+-+-+-++--+--+-\\||||| ||||||| |||| |||||||  | |||   |       | ||||||||||||| ||||| | 
 |||   ||| |||  |  || |||| |||||  ||||| |||||||||||\\+++---++----+-+-+-+-++--+--+-++++++-+++++++-/||| |||||||  | |||   |       | ||||||||||||| ||||| | 
 |||   ||| |||  |  || |||| |||||  ||||| |||||||||||/+++---++----+-+-+-+-++--+--+-++++++-+++++++--+++-+++++++--+-+++---+----\\  | ||||||||||||| ||||| | 
 |||   ||| |||  |  || |||| |||||  ||||| |||||||||||||||   ||    | | | | ||  |  | |||||| |||||||  ||| |||||||  | |||   |    |  | ||||||||||||| ||||| | 
 |||   ||| |||  |  || |||| |||||  ||||| |||||||||||||||   ||    | | | | ||  |  | |||||| |||||||  ||| |||||||  | |||   |    |  | ||||||||||||| ||||| | 
 |||   ||| |||  |  || |||| |||||  ||||| ||||||||||||||\\---++----+-+-+-+-++--+--+-++++++-+++++++--+++-+++++++--+-+++---+----+--/ ||||||||||||| ||||| | 
 |||   ||| |||  |  || |||| |\\+++--+++/| ||||||||||||||    ||    | | | | ||  |  | |\\++++-+++++++--+++-+++++++--+-+++---+----+----/|||||||||||| ||||| | 
 |||   ||| |||/-+--++-++++-+-+++--+++-+-++++++++++++++----++----+-+-+-+-++--+--+-+-++++-+++++++--+++-+++++++--+-+++---+-\\  |     |||||||||||| ||||| | 
 |||   ||| |||| |  || |||| |/+++--+++-+-++++++++++++++----++----+-+-+-+-++--+--+-+-++++-+++++++--+++-+++++++--+-+++---+-+--+---\\ |||||||||||| ||||| | 
 |||   ||| |||| |  || |||| |||||  ||| | ||||||||||||||/---++----+\\| | | ||  |  | | |||| |||||||  ||| |||||||  | |||   | |  |   | |||||||||||| ||||| | 
 |||   ||| ||\\+-+--++-++++-+++/|  ||| |/+++++++++++++++\\  ||    ||| | | ||  |  | | |||| |||||||  ||| |||||||  | |||   | |  |   | |||||||||||| ||||| | 
 |||   ||| || | |  ||/++++-+++-+--+++-++++++++++++++++++--++----+++-+-+-++--+--+-+-++++-+++++++--+++-+++++++--+-+++-\\ | |  |   | |||||||||||| ||||| | 
 |||   ||| || | |  ||||||| ||| |  ||| ||||||||||||||||||  ||    ||| | | |\\--+--+-+-++++-++++++/  ||| |||||||  | ||| v | |  |   | |||||||||||| ||||| | 
 |||   ||\\-++-+-+--+++++++-+++-+--+++-++++++++++++++++++--++----+++-+-+-+---+--+-+-++++-++++++---++/ |||||||  | |||/+-+-+--+---+-++++++++++++-+++++\\| 
 |||   || /++-+-+--+++++++-+++\\|  |\\+-++++++++++++++++++--++----+++-+-+-+---+--+-+-++++-++++++---++--+++++++--+-+++++-+-+--+---+-++++++/||||| ||||||| 
 |||   || ||| | |  ||||||| |||||  | | |||||||||||\\++++++--++----+++-+-+-+---+--+-+-++++-/||v||   ||  |||||||  | ||||| | |  |   | |||||| ||||| ||||||| 
 |||   || ||| | |  ||||||| |||||  | | ||||||||||| ||\\+++--++----+++-+-+-/   |  | | ||||  |\\+++---++--+++++++--+-+++++-+-+--+---+-+++/|| ||||| ||||||| 
 \\++---++-+++-+-+--+++++++-+++++--+-+-+++++++++++-++-+++--++----+++-+-+-----+--+-+-++++--+-+++---++--+++/|||  | ||||| | |  |   | ||| || ||||| ||||||| 
  ||   || ||| | |  ||||||| |||||  | | ||||\\++++++-++-+++--++----+++-+-+-----+--+-+-++++--+-+++---++--+++-+++--+-+++++-+-+--+---+-+++-/| ||||| ||||||| 
  ||   || |\\+-+-+--+++++++-+++++--+-+-++++-++++++-++-+++--++----+++-+-+-----+--/ | ||||  | |||   ||  ||| |^|  | ||||| | |  |   | |||  | ||||| ||||||| 
  ||  /++-+-+-+-+\\/+++++++-+++++--+-+-++++-++++++-++-+++--++----+++-+-+-----+----+-++++--+-+++---++--+++-+++--+-+++++-+-+\\ |   | |||  | ||||| ||||||| 
  ||  ||| | | | |||||||||| |||||  | | |||| |||||| || |\\+--++----+/| | \\-----+----+-+++/  | \\++---++--+++-+++--+-+++++-+-++-+---+-++/  | ||||| ||||||| 
  ||  |^| | |/+-++++++++++-+++++--+\\| |||| |||||| || | |  ||    | | |       |    | |||   |  ||   ||  ||| |||  | ||||| | || |   | ||   | ||||| ||||||| 
  ||  ||| | ||| |||||||||| ||||\\--+++-++++-++++++-++-+-+--++----+-+-+-------+----+-+++---+--++---++--+++-+/|  | ||||| \\-++-+---+-++---+-+/||| ||||||| 
  ||  ||| | ||| |||||||||| ||||   ||| |||| |||||| || | |  ||/---+-+-+-------+----+-+++---+--++---++-\\||| | |  | |||||   || |   | ||   | | ||| ||||||| 
  ||  ||| | ||| |||||||||| ||||   ||| |||| |||||| || | |  |||   \\-+-+-------+----+-+++---+--++---++-++++-+-+--+-+++++---++-+---+-++---+-+-/|| ||||||| 
  ||  ||| | ||| |||||||||| |\\++---+++-++++-++++++-++-+-+--+++-----+-+-------+----+-+++---+--++---++-++++-+-+--+-+++++---++-+---/ ||   | |  || ||||||| 
  ||  ||| | ||| |||\\++++++-+-++---+++-++++-++++++-++-+-+--+/|     | |       |    | |||   |  ||   || |||| | |  | |||||   || |     ||   | |  || ||||||| 
  ||  |\\+-+-+++-+++-++++++-+-++---+++-++++-++++++-++-+-+--+-+-----+-+-------+----+-+++---+--++---++-++++-+-+--+-+/|||   || |     ||   | |  || ||||||| 
  ||  | | | ||| ||| |||||| | ||   ||| |||| |||||\\-++-+-+--+-+--<--+-+-------+----+-+++---+--++---++-++++-+-+--+-+-/||   || |     ||   | |  || ||||||| 
  ||  | | | ||| ||| |||||| | ||   ||| \\+++-+++++--++-+-+--+-+-----+-+-------+----+-/||   |  ||   || |||| | |  | |  ||   || |     ||   | |  || ||||||| 
  ||  | | | |||/+++-++++++\\| ||   |||  |\\+-+++++--++-+-+--+-+-----+-+-------+----+--++---+--++---++-++++-+-+--/ |  ||   || |     ||   | |  || ||||||| 
  ||  \\-+-+-+++++/| ||||\\+++-++---+++--+-+-++/||  || | |  | |     | |       |    |  ||   |  ||   || |||| | |    |  ||   || |     ||   | |  || ||||||| 
  ||    | | ||||| | |||| ||| ||   |||  | | |\\-++--++-+-+--+-+-----+-+-------+----+--+/   |  ||   || |||| | |    |  ||   || |     ||   | |  || ||||||| 
  \\+----+-+-+++++-+>++++-+++-++---/||  | | \\--++--++-+-+--+-+-----+-+-------+----+--+----+--++---++-++++-+-+----+--++---++-+-----++---+-+--++-++++++/ 
   |    | \\-+++++-+-++++-+++-+/    ||  | |    \\+--++-+-+--+-+-----+-+-------+----+--+----+--++---++-++++-+-+----+--++---++-+-----++---+-+--++-++++/|  
   |    |   |||||/+-++++-+++-+-----++--+-+-----+--++-+-+--+-+--\\  | |       \\>---+--+----+--++---++-++++-+-+----+--++---++-+-----+/   | |  || |||| |  
   |    | /-+++++++-++++\\||| |     ||  | |     |  || | |  | |  |  | |            |  |    |  ||   || |||| | \\----+--++---++-+-----+----+-+--++-/||| |  
   |    | | ||||||| |||||||| |     ||/-+-+-----+--++-+-+--+-+--+--+-+------------+--+----+--++---++-++++-+------+--++---++-+\\    |    | |  ||  ||| |  
   |    | | ||||||| |||||||| |     ||| | |     |  || | |  | |  |  | |            |  \\----+--++---++-++++-+------+--++---++-++----+----+-+--+/  ||| |  
   |    | | ||||||| |||||||| |  /--+++-+-+-----+--++-+-+--+-+--+--+-+------------+----\\  |  ||   || |||| |      |  ||   || ||    |    | |  |   ||| |  
   |    | | ||||||| |||||||| |  |  |\\+-+-+-----+--++-+-+--+-+--+--+-+------------+----+--+--++---++-++++-+------+--++---++-++----+----+-/  |   ||| |  
   \\----+-+-+++++++-++++++++-+--+--+-+-+-+-----+--++-+-+--+-+--+--+-+------------+----+--+--++---++-++++-/  /---+--++--\\|| ||    |    |    |   ||| |  
        | | ||||||| |||||||| |  |  | | | |     |  || | |  | |  |  | |            |    |  |  ||   || ||||    |   |/-++--+++-++----+----+--\\ |   ||| |  
        | | ||||||| |||||||| |  |  | | | |   /-+--++-+-+--+-+--+--+-+------------+----+--+--++---++-++++---\\|   || ||  ||| ||    |    |  | |   ||| |  
        | | ||\\++++-++++++++-+--+--+-+-+-+---+-+--++-+-+--+-+--+--+-+------------+----+--+--++---++-++++---++---++-++--+/| ||    |    |  | |   ||| |  
        | | || |||| |||\\++++-+--+--+-+-+-+---+-+--++-/ |  | |  |  | |            |    |  |  ||   || ||||   ||   || ||  | | ||    |    |  | |   ||| |  
        | | || |\\++-+++-++++-+--+--+-+-+-+---+-+--++---+--+-+--+--+-+------------+----+--+--++---++-+/||   ||   || ||  | | ||    |    |  | |   ||| |  
        | | || | || ||| |||| |  |  | | | |   | |  ||   |  | |  |  | |            |    |  |  ||   || | ||   ||   || ||  | | ||    |    |  | |   ||| |  
        | | || | || ||| |||| |  |  | | | \\---+-+--++---+--+-+--+--+-+------------+----+--+--++---++-+-++---++---++-++--+-+-++----+----+--+-/   ||| |  
        | | || | \\+-+++-++++-+--+--+-+-+-----+-+--++---+--+-+--/  | |            |    |  |  ||   || | ||   ||   || ||  | | ||    |    |  |     ||| |  
        | | || |  | ||| |||| |  \\--+-+-+-----+-+--++---+--+-+-----+-+------------+----/  |  ||   || | || /-++---++-++--+-+-++----+--\\ |  |     ||| |  
        \\-+-++-+--+-/|| |||| |     | | |     | |  ||   |  | |     | |       /----+-------+--++---++-+-++-+-++-\\ || \\+--+-+-++----+--+-+--+-----+++-/  
          | || |  |  || |||| |     | | \\-----+-+--++---/  | |     | |       |    |       |  ||   || | || | || | ||  |  | | ||    |  | |  |     |||    
          | || |  |  \\+-++++-+-----+-+-------+-+--++------+-+-----+-+-------+----+-------+--++---++-+-++-+-++-+-++--/  | | ||    |  | |  |     |||    
          | || |  |   | |||| |     | \\-------+-+--++------+-+-----+-+-------+----+-------+--++---++-+-++-+-++-+-++-----+-+-+/    |  | |  |     |||    
          | || |  |   | |||| |     |         \\-+--++------+-+-----+-+-------+----+-------+--++---++-+-++-+-/| | ||     | | |     |  | |  |     |||    
          | || |  |   | |\\++-+-----+-----------+--++------+-+-----+-+-------+----+-------+--++---++-+-++-+--+-+-/|     | | |     \\--+-+--+-----+/|    
          | \\+-+--+---+-+-++-+-----+-----------+--++------+-+-----+-+-------+----+-------+--++---++-+-+/ |  \\-+--+-----/ | |        | |  |     | |    
          |  | |  \\---+-+-++-+-----+-----------+--++------+-+-----+-+-------+----+-------+--++---++-+-+--+----+--+-------/ |        | |  |     | |    
          \\--+-+------+-/ || \\-----+-----------+--++------+-+-----+-+-------+----+-------+--++---+/ | |  \\----+--+---------+--------/ |  |     | |    
             | |      |   ||       |           |  ||      \\-+-----+-+-------+----+-------+--++---+--+-/       |  \\---------+----------+--/     | |    
             | |      |   ||       |           |  ||        |     | \\-------+----+-------+--/|   |  |         |            |          |        | |    
             | |      |   ||       |           |  ||        \\-----+---------+----+-------+---+---+--/         |            |          |        | |    
             \\-+------+---++-------/           |  ||              |         |    |       |   |   |            |            |          |        | |    
               |      |   ||                   |  |\\--------------+---------+----+-------+---+---+------------+------------/          |        | |    
               \\------+---/|                   |  |               |         |    |       |   \\---+------------+-----------------------+--------/ |    
                      |    |                   |  |               \\---------+----+-------+-------+------------+---------<-------------/          |    
                      \\----+-------------------/  \\-------------------------+----+-------+-------/            |                                  |    
                           \\------------------------------------------------+----/       \\--------------------+----------------------------------/    
                                                                            \\---------------------------------/                                       `;

const map = [
    []
];
const carts = [];
const map_length = input.match(/[^\n]+\n/)[0].length;

class Cart {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.intersect = 0;
    }
}

for (let i in input) {
    i = parseInt(i);

    if (input.charAt(i) == '\n') {
        map.push([]);
    } else if (input.charAt(i) == '>') {
        map[map.length - 1].push('-');
        carts.push(new Cart(i % map_length, map.length - 1, '>'));
    } else if (input.charAt(i) == '<') {
        map[map.length - 1].push('-');
        carts.push(new Cart(i % map_length, map.length - 1, '<'));
    } else if (input.charAt(i) == '^') {
        map[map.length - 1].push('|');
        carts.push(new Cart(i % map_length, map.length - 1, '^'));
    } else if (input.charAt(i) == 'v') {
        map[map.length - 1].push('|');
        carts.push(new Cart(i % map_length, map.length - 1, 'v'));
    } else {
        map[map.length - 1].push(input.charAt(i));
    }

}

while (carts.length > 1) {

    carts.sort((a, b) => {
        if (a.x + a.y * (map_length - 1) > b.x + b.y * (map_length - 1)) {
            return 1;
        } else {
            return -1;
        }
    })

    for (let cart = 0; cart < carts.length; cart++) {

        if (carts[cart].direction == '>') {
            carts[cart].x += 1;
        } else if (carts[cart].direction == '<') {
            carts[cart].x -= 1;
        } else if (carts[cart].direction == '^') {
            carts[cart].y -= 1;
        } else {
            carts[cart].y += 1;
        };

        if (map[carts[cart].y][carts[cart].x] == '/') {

            if (carts[cart].direction == '>') {
                carts[cart].direction = '^';
            } else if (carts[cart].direction == '<') {
                carts[cart].direction = 'v';
            } else if (carts[cart].direction == '^') {
                carts[cart].direction = '>';
            } else {
                carts[cart].direction = '<';
            }

        } else if (map[carts[cart].y][carts[cart].x] == '\\') {

            if (carts[cart].direction == '>') {
                carts[cart].direction = 'v';
            } else if (carts[cart].direction == '<') {
                carts[cart].direction = '^';
            } else if (carts[cart].direction == '^') {
                carts[cart].direction = '<';
            } else {
                carts[cart].direction = '>';
            }

        }

        if (map[carts[cart].y][carts[cart].x] == '+') {

            carts[cart].direction = setDirection(carts[cart].direction, carts[cart].intersect);

            if (carts[cart].intersect == 2) {
                carts[cart].intersect = 0;
            } else {
                carts[cart].intersect++;
            }

        }

        for (let i of carts) {

            let end = false;
            let match = 0;

            for (let j of carts) {

                if (i.x == j.x && i.y == j.y) {
                    match++;
                }

                if (match == 2) {

                    if (carts.indexOf(i) <= cart && carts.indexOf(j) <= cart) {
                        cart -= 2;
                    } else if (carts.indexOf(i) <= cart || carts.indexOf(j) <= cart) {
                        cart--;
                    }

                    carts.splice(carts.indexOf(i), 1);
                    carts.splice(carts.indexOf(j), 1);
                    end = true;
                    break;
                }

            }

            if (end) {
                break;
            }

        }

        if(carts.length == 1) {
            break;
        }

    }

}

console.log(carts[0].x, carts[0].y);