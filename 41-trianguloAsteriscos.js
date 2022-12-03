function trinanguloAsteriscos(num) {
    let triangle = ``;
    let espacios = num-1

    for (let i = 0; i < num ; i++) {
        triangle+= ' '.repeat(espacios) + '*'.repeat(i) + "*".repeat(i+1)+'\n'
        espacios--;
    }
    return triangle;
}
console.log(trinanguloAsteriscos(40))

