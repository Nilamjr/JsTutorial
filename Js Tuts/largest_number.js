const arr = [23,42,0,6485,4,6529,9,678,909898];

function numLarge(){

    let max = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }else{
            max= max;
        }
        
    }
    console.log(max);
}

numLarge();
function numSmall(){
    let min = arr[0];

    for(let i = 0; i<arr.length; i++){
        if(arr[i]>min){
            min = min;
            
        }else{
            min = arr[i];
            console.log('hello');
        }
    }
    console.log(min);
}
// numSmall();