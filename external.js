var aka=[{
            
                element: '#txtemailadd',
                intro: 'please enter your email address',
                position: 'left'
                
        },
        {
            
                element: '#txtemailbtn',
                intro: 'click enter to send email',
                position: 'left'
        
        }];

/* logical input:
  @yes:1 true--new features
  @No:0 false --no features
  new features will trigger to remove localstorge value;
*/

var setflag = 1;

/**
 * 0 set to show all 
 * 1 set to show just login only
 *
 */
var showonlylogin = 0;
