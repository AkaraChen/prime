const fs = require('fs')
const count = process.argv[2]

const check = (number) => {
    if (number <= 3) {
        return number > 1
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

const template = (content) => `window.isPrime = function(number) {
${content}
}`


const generate = (number) => {
    const isPrime = check(number)
    return `    if (number === ${number}) {
        return ${isPrime}
    }\n`
}

const content = () => {
    let judge = ''
    for (let i = 0; i <= count; i++) {
        judge += generate(i)
    }
    return template(judge)
}

fs.writeFileSync('./prime.js', content())