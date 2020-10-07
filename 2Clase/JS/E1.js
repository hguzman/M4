for(var a = 1;a < 100;a++){
    
    if(a%5==0 && a%3==0){
        console.log(a,"fizzbuzz");
    }else if(a%3==0){
        console.log(a,"fizz");
    }else if(a%5==0){
        console.log(a,"buzz");
    }else{
        console.log(a);
    }


}

for(var a = 1;a < 100;a++){
    switch (true){
        case(a%3==0 && a%5==0):
            console.log(a,"fizzbuzz");
            break;
        case(a%3==0):
            console.log(a,"fizz");
            break;
        case(a%5==0):
            console.log(a,"buzz");
            break
        default:
            console.log(a);
    }
    
}

for(var a = 1;a < 100;a++){
    msg = ""
    console.log(a)

    switch (true){
 
        case(a%3==0):
            msg += "fizz";
            break;
        case(a%5==0):
            msg += "buzz";
            break;
        case(a%3 ==3 && a%5==0):
            msg += "buzz";
            break;
        default:
            console.log(a);
    }
    console.log(msg)
    
}



for(var a = 1;a < 100;a++){
    var msg= "";
    switch (a){
        case(a%3==0):
            msg = "fizz";

        case(a%5==0):
            msg = "buzz";
        default:
            console.log(a,msg);
    }
    
}