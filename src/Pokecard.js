//import react from "react"


function Pokecard(props){

    let url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

    return(
        <div class="card">
            <p className="name">{props.name}</p> 
            <img src={url} alt={props.name} className="imgURL" />
            <p className="type">Type: {props.type}</p>
            <p className="exp">EXP: {props.exp}</p>
        </div>
    )
}

export default Pokecard;

