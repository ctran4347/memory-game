export default function randomNumberArray(count,min,max){
    const output = [];
    for(var i = 0; i < count; i++){
        output.push(Math.floor(Math.random() * max ) + min);
    }
    return output;
}