function quadraticEquation(a, b, c) {
    let radicand = Math.pow(b, 2) - 4 * a * c;
    let positiveSolution = undefined;
    let negativeSolution = undefined;
    
    if(radicand >= 0) {
        // Positive solution.
        positiveSolution = (-b + Math.sqrt(radicand)) / (2 * a);

        // Negative solution.
        negativeSolution = (-b - Math.sqrt(radicand)) / (2 * a);       
    }
    
    let solutions = [];
    
    if(positiveSolution || positiveSolution == 0) {
        solutions.push(positiveSolution);
    }
    
    if(negativeSolution || negativeSolution == 0) {
        solutions.push(negativeSolution);    
    }
    
    solutions = [...new Set(solutions)];
    
    solutions = solutions.sort();
    
    return solutions;
}
