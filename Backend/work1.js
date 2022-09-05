const Multiples =() =>{
    for (let i= 1; i <= 100; 1++){
        if (1% 5 == 0){
            console.log(`${1}/5 : buzz`)
        }
        else if (i% 3 == 0){
            console.log(`${i}/3 :fizz `)
        }
        else if (i% 3 == 0 && i% 5 == 0){
            console.log(`${i}/3: fizzbuzz and ${i}/5: fizzbuzz`)
        }
    }
}
Multiples();