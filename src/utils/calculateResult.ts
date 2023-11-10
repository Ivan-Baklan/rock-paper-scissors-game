export function calculateSimpleGame(p1:SimpleGameChoice,p2:SimpleGameChoice){
    const desicionWeight = {
        "paper":0,
        "scissors":1,
        "rock":2
    }

    if(((desicionWeight[p1]+1)%3) === desicionWeight[p2]){
        return -1
    }else if(desicionWeight[p1] === desicionWeight[p2]){
        return 0
    }else{
        return 1
    }

}

export  function calculateBonusGame(p1:SimpleGameChoice|BonusGameChoice,p2:SimpleGameChoice|BonusGameChoice){
    
    switch(`${p1}-${p2}`){
        case "rock-rock":
        case "scissors-scissors":
        case "paper-paper":
        case "spock-spock":
        case "lizard-lizard":
            return 0
        case "rock-lizard":
        case "rock-scissors":
        case "paper-rock":
        case "paper-spock":
        case "scissors-lizard":
        case "scissors-paper":
        case "spock-rock":
        case "spock-scissors":
        case "lizard-spock":
        case "lizard-paper":
            return 1
        default:
            return -1
    }

}
