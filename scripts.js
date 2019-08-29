var i = 20;
do{
    if(isDivisibleByAll(i)){
        console.log(i);
        break;
    }

    i += 20;        

}while(1);

function isDivisibleByAll(num){
    for(var i = 20; i >= 2 ; i--){
        if(num % i != 0)
            return false;
    }
    return true;
}
