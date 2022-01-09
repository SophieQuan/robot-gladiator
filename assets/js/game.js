var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


//enemy-robot name array
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]
var enemyHealth = 50;
var enemyAttack = 12;


// This create a funciton named "fight"
var fight = function (enemyName){

    while(playerHealth > 0 && enemyHealth > 0){

        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
        //if player picks "skip" confirm and then stop the loop
        if(promptFight === "skip" || promptFight === "SKIP"){
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!")
                playerMoney = playerMoney -10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining");
        

        //check enemy's health
        if (enemyHealth <=0){
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while () loop since enemy is dead
            break;
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }


         //check player's health
        if(playerHealth <=0){
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break; 
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
//function to start a new game
var startGame = function (){
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++){
        if(playerHealth > 0){
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            enemyHealth = 50;

            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
            
            //if we're not the last enemy in the array
            if(playerHealth >0 && i < enemyNames.length - 1){
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //play again
    endGame();
}



// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

startGame();

var shop = function(){
    console.log("entered the shop");

}