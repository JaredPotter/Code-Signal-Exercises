function digitDegree(n) {
    // Simpler 'while' solution.
    //     let count = 0;
        
    //     while(n > 9) {
    //         let split = (n + '').split('');
    //         n = split.reduce((accum, value) => accum += Number.parseInt(value), 0);
    //         count++;
    //     }
                                 
    //     return count;
    
      ///////////////////////////
      
    // Recursive solution
     if(n < 10) {
       // base case.
       return 0;
     }
     else {
       // reduction step.
       let split = (n + '').split('');
       n = split.reduce((accum, value) => accum += Number.parseInt(value), 0);  
       return 1 + digitDegree(n);
      }
    }
    