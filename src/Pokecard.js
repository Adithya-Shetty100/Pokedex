//import react from "react"


function Pokecard(props){

    //let url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
    let id=props.id;
    //let new_id=(id>99)? id:((id>9)?`0${id}`:`00${id}`);
    let new_id=`00${id}`.slice(-3); //-ve slices from backwards starting from -1
    let url=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${new_id}.png`

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

