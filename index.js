// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const event = ["surprise"];

function writeCards(names, event){
    let thankCard =[]
   for (let i = 0; i < names.length; i++ ){
    thankCard.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
   } 
return thankCard
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number -= 1;
    }

}

