

// fibonacci Series 

const fibonacci = (num)=>{
    
    var a=0
    var b=1;
    console.log(a);
    console.log(b);
    
    for(let i =0;i<num; i++){
        c = a+b;
        a=b;
        b=c
        // arr.push(c); 
        console.log(c);
    }
    
    
    

}

fibonacci(10);