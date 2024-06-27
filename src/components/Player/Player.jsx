import { useState } from "react"

export default function Player({name, symbol, isActive, onChangeName}){

    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name);

    function handleIsEditClick(){
        setIsEditing(editing=>!editing);

        if(isEditing){
            onChangeName(symbol, playerName);
        }
   
    }

    function handleNameChange(event){
        setPlayerName(event.target.value);
        
    }

 

    let playerNameElement=<span className="player-name">{playerName}</span>;
  
    if(isEditing){
        playerNameElement=<input type="text" required  defaultValue={playerName} onChange={handleNameChange} />
      
    }

    return (
        <li className={isActive? "active": undefined}>
        <span className="player">
        {playerNameElement}
          <span className="player-symbol">{symbol}</span>
        </span>

        <button onClick={handleIsEditClick}>{isEditing? "Save": "Edit"}</button>
      </li>
    )
}