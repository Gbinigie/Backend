//how to generate prime numbers

const prompt = require(`prompt-sync`)({sigint:true})

let Primes = true

const PrimeNumbers = () => {
    const Numbers = parseInt(prompt(`input a positive number`))
    if (Numbers === 1) {
        console.log(`1 isn't a Prime Number`)
    } else if (Numbers > 1) {
        for (let i = 2; i < Numbers; i++){
            if (Numbers % i == 0) {
                Primes = false
            }
        }
        if (Primes) {
            console.log(`${Numbers} is a Prime Number`)
        } else {
            console.log(`${Numbers} is not a Prime Number`)
        }
    }
}
PrimeNumbers();