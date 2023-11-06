export default function calculateSimpleGame(p1:SimpleGameChoice,p2:SimpleGameChoice){
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