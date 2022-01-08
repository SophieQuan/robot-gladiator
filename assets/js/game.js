var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto"
var enemyHealth = 50;
var enemyAttack = 12;

// This create a funciton named "fight"
function fight(){
    window.alert("Welcome to Robot Gladiators!");
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack

    // Log a resulting message to the console so we know that it worked.
    console.log("enemyHealth", enemyHealth)
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining")

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack

    // Log a resulting message to the console so we know that it worked.
    console.log ("playerHealth", playerHealth);
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining")

    //check enemy's health
    if (enemyHealth <=0){
        window.alert(enemyName + " has died!");
    }else{
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
};

fight();