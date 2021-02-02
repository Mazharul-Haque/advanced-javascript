let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    if(result > 10){
        const mood ="happy"
        //mood ="cranky";
        console.log(mood);
    }
    return result;
   
}

const output = sum(15,12);
//console.log(bonus);
//console.log(result);
console.log(output);