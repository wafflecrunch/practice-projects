const arr = [1,12,'w',4,'l', 'm', 9, 'p', 2];



function test(x){
    console.log(x);    
    return function test2(y){
        console.log(y);        
        return function test3(z){
            console.log(x+y+z)
        }
    }
}


test(9)(4)(2)




