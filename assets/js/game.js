var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


//enemy-robot name array
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]
var enemyHealth = 50;
var enemyAttack = 12;


for (var i = 0; i < enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i)
    console.log(enemyNames[i] + " is at " + i + " index")
}


// This create a funciton named "fight"
var fight = function (enemyNames){
    window.alert("Welcome to Robot Gladiators!");
    



    // Log a resulting message to the console so we know that it worked.
    console.log ("playerHealth", playerHealth);
    console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining")


    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.")
    if (promptFight === "FIGHT" || promptFight === "fight"){
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining");

        //check enemy's health
        if (enemyHealth <=0){
            window.alert(enemyNames + " has died!");
        }
        else{
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack

        // Log a resulting message to the console so we know that it worked.
        console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining")

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
        var promptConfirm = window.confirm("Are you sure you'd like to quit?");
        if (promptConfirm == true){
            window.alert(playerName + " has decided to skip this fight. Goodbye!")
            playerMoney = playerMoney -2
        } else{
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

for (var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i])
}