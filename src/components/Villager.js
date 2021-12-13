import {React} from "react";
import {ACNHcall} from "../hooks/ACNH";
import loadingGIF from "../assets/animal-crossing-loading.gif";
function Villager(props){
    const {id} = props;
    const [isLoading,ACNHData] =  ACNHcall(`https://acnhapi.com/v1/villagers/${id}`,id);
    function handleClick(e){
        e.preventDefault();
        props.handleScore(ACNHData.id);
    }
    const villagerStyle = {
        color: isLoading?'unset':ACNHData['text-color'],
        backgroundColor: isLoading?'unset':ACNHData['bubble-color'],
    }

    return(<>
    {isLoading?
        <div className="villager">
            <img className="villager-loading-image" src={loadingGIF}/>
            <div className="villager-loading-text">Loading</div>
        </div>
        :
        <div className="villager" onClick={handleClick}>
            <img className="villager-image" alt={ACNHData.name['name-USen']} src={ACNHData['image_uri']}/>
            <p className="villager-name" style={villagerStyle} >{ACNHData.name['name-USen']}</p>
            <p className="villager-saying">{ACNHData['saying']}</p>
        </div>
        
    }
    </>)
}
export default Villager;