**Tic Tac Toe.**

**Description:**
  A simple tic tac toe game which can track user’s stats.
  Users sign in with their account to play. Their game is saved to an API (set up by General Assembly). They can later retrieve stats (# of games played, finished, and won).

**Link to hosted game:**
  https://dianamcnulty.github.io/tictactoe/

**Technologies used:**
  Javascript, Jquery, Sass
  GA browser template: https://github.com/ga-wdi-boston/browser-template

**Development process and problem-solving strategies:**

  Started with wireframe and basic html structure. The cornerstones of this design are the jquery .show() and .hide() methods. This allows for a single page application.
  I started with basic game functionality then worked on the ajax calls for login, then for updating and retrieving game information from the server. I tested new functionality every step of the way and regularly ran smoke tests to make sure I didn't break any existing functionality.
  My strategy mostly involves segmenting features or issues into small tasks, and handling only one problem at a time. It's tempting to get distracted by something else that needs fixing, but I try put those issues on a to-do list to tackle at another time.
  Once the "wiring" was all hooked up. I worked on hiding and showing sections of the page based on where the user was in the process. (For example: log in fields should be hidden if the user is already logged in)
  Finally, when everything was tested and functioning properly, styling was added as a finishing touch.
  Followed by another round of testing for good measure.

**Future Improvements/Enhancements**
  Refactor JS code to use classes for click handlers instead of ID's
  remove code that was commented out
  add comments for clarity
  *Potential Enhancement:* Give users links to sites with history of Tic-Tac-Toe, strategy, etc.


**Link to wireframes and user stories:**

 *Wireframes:*
    https://github.com/dianamcnulty/tictactoe/blob/master/project_planning/wireframe-mobile.JPG
    https://github.com/dianamcnulty/tictactoe/blob/master/project_planning/wireframe-desktop.JPG

*User Stories:*
    https://github.com/dianamcnulty/tictactoe/blob/master/project_planning/TicTacToe%20user%20stories.rtf
