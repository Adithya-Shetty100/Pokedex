//import react from "react"


function Pokecard(props){

    let url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

    return(
        <div>
            <p className="name">{props.name}</p> 
            <img src={url} alt="" className="imgURL" />
            <p className="type">{props.type}</p>
            <p className="exp">{props.exp}</p>
        </div>
    )
}

export default Pokecard;

