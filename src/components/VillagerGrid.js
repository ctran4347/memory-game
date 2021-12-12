import Villager from "./Villager";
export default function VillagerGrid(props){
    const {villagerIDs} = props;
    return(
    <div class="villager-grid">
        {villagerIDs.map((id)=>{
            return <Villager id={id}/>
        })}
    </div>)
}