import {React} from "react";
import VillagerGrid from "../components/VillagerGrid";
import randomNumberArray from "../utils/randomNumberArray";
export default function Body (){
    const level = 1;
    const idArray = randomNumberArray(3,1,391);
    return (<body>
       <VillagerGrid villagerIDs = {idArray}/>
    </body>)
}