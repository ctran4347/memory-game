export default function randomNumberArray(count,min,max){
    const output = [];
    while(output.length < count){
        const randomNumber = Math.floor(Math.random() * max ) + min;
        if(!output.includes(randomNumber)){
            output.push(randomNumber);   
        }
    }
    return output;
}