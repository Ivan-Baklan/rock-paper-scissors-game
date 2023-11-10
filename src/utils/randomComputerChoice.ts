export  function randomComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3+1);
    switch(randomNumber){
        case 1:
            return "paper"
           
        case 2:
            return "scissors"
          
        case 3:
            return "rock"
            
    }
}

export function randomComputerBonusChoice(){
    const randomNumber = Math.floor(Math.random()*5+1);
    switch(randomNumber){
        case 1:
            return "paper"
        case 2:
            return "scissors"  
        case 3:
            return "rock"
        case 4:
            return "lizard"    
        case 5:
            return "spock"
    }
}
