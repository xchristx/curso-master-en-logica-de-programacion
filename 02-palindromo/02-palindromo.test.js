const palindromo = require("./02-palindromo");

test("Verificar si es palindromo", ()=>{
    expect(palindromo("otto")).toBe(true)
});

test("Verificar si no es palindromo", ()=>{
    expect(palindromo("noes")).toEqual(false)
});

test("No diferenciar mayusculas", ()=>{
    expect(palindromo("OtTo")).toBe(true)
})