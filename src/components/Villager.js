import {React} from "react";
import {ACNHcall} from "../hooks/ACNH";
function Villager(props){
    const {id} = props;
    const [isLoading,ACNHData] =  ACNHcall(`https://acnhapi.com/v1/villagers/${id}`,id);


    if(!isLoading){
        console.log(isLoading,ACNHData);
    }

    return(<>
    {isLoading?
        <div>Loading...</div>:
        <div className="villager">
            <img src={ACNHData['image_uri']}/>
            <p>{ACNHData.name['name-USen']}</p>
        </div>
        
    }
    </>)
}
export default Villager;