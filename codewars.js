function countApplesAndOranges(s, t, a, b,  apples, oranges) {
    // Write your code here
    
    let distanceOfApples = apples.map(apple => a + apple);
    let distanceOfOranges = oranges.map(orange => b + orange);
    
    let applesIntoHouse = 0;
    let orangesIntoHouse = 0;
    
    distanceOfApples.forEach(el=>{
        if(el >= s && el <= t) applesIntoHouse++
    })
    
     distanceOfOranges.forEach(el=>{
        if(el >= s && el <= t) orangesIntoHouse++
    })

    
    console.log(applesIntoHouse);
    console.log(orangesIntoHouse);
}

countApplesAndOranges(7,11, 5,15, [-2,2,1],[5,-6])