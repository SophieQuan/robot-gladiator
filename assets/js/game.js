var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto"
var enemyHealth = 50;
var enemyAttack = 12;

// This create a funciton named "fight"
function fight(){
    window.alert("Welcome to Robot Gladiators!");
    



    // Log a resulting message to the console so we know that it worked.
    console.log ("playerHealth", playerHealth);
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining")


    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.")
    if (promptFight === "FIGHT" || promptFight === "fight"){
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining");

        //check enemy's health
        if (enemyHealth <=0){
            window.alert(enemyName + " has died!");
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack

        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining")

         //check player's health
        if(playerHealth <=0){
            window.alert(playerName + " has died!");
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    } 
    //if player choose to skip
    else if (promptFight === "SKIP" || promptFight === "skip"){
        var promptConfirm = window.confirm("are you sure?");
        if (promptConfirm == true){
            window.alert("goodbye!")
            playerMoney = playerMoney -2
        } else{
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

fight();