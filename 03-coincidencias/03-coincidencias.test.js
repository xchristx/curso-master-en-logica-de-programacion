const coincidencias = require("./03-coincidencias");

test("Verificar numero de coincidencias", ()=>{
    expect(coincidencias("random random doce", "random")).toBe(2)
});

test("Verificar numero de coincidencias", ()=>{
    expect(coincidencias("random doce doce doce", "doce")).toEqual(3)
});