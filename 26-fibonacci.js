function nFibonacci(n) {
    // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
    // Retorna el enésimo numero de la serie
    // nFibonacci(0) // 0  // el elemento 0 es cero
    // nFibonacci(1) // 1 // el elemento 1 es 1
    // nFibonacci(6) // 1 // el elemento 6 es 8
    if (typeof(n) != "number") return "Ingresa un numero valido"
    if (n < 2) return n;
    return nFibonacci(n-1)+nFibonacci(n-2)
    /* 
      nFib(5)=5                +            nFib (4) = 3
      nFib(4)=3 + nFib(3)=2                 nFib (3)=2  +   nFib(2)=1
      nFib(2)=1 + nFib(1)=1                 nFib (1)=1
    */
  
  
  }
  console.log(nFibonacci(8))