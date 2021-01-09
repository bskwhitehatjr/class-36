class Game 
{
  constructor(){}

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })  
  }

  update(state)
    {
      database.ref('/').update({
        gameState: state
      });
    }

  start()
  {
    if(gameState === 0)
    {
      player = new Player();
      player.getCount();

      form = new Form()
      form.display();
    }
  }

  
}
 //getState() will read the gameState from database
  //.ref() is used to refer about data base value we care about
   //.on() creates a listener which keeps listening to the changes in database


//update(state) will update the game State in the database to a value passed to it inside the parentheses
//.update() will update the database reference 
//('/') refers to the main database inside which gameState is created


//start()function will start the game and display on the screen depending  on the state of game 