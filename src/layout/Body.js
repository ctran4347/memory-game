import {React ,useState} from "react";
import VillagerGrid from "../components/VillagerGrid";
import randomNumberArray from "../utils/randomNumberArray";
import ScoreBoard from "../components/ScoreBoard";
export default function Body (){
    const [level,setLevel] = useState(0);
    const [score,setScore] = useState(0);
    const [bestScore,setBestScore] = useState(
                                    localStorage.getItem('best-score')!=null?
                                    localStorage.getItem('best-score'):0
                                    );
    const [IDs,setIDs] = useState([]);
    const randomArray = randomNumberArray((2*(level)+3),1,391);
    
    function handleScore(id){
        if(IDs.includes(id)){
            if(score > bestScore){
                setBestScore(score);
                localStorage.setItem('best-score',score);
            }
            setScore(0);
            setIDs([]);
        }
        else{
            setScore(score+1);
            setIDs([...IDs,id]);
        }
        setLevel(Math.floor((score/10))%10);
    }
    return (
    <body>
       <ScoreBoard score={score} bestScore={bestScore} />
       <VillagerGrid villagerIDs = {randomArray} handleScore={handleScore} />
    </body>)
}