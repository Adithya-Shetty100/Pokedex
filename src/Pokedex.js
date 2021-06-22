//import react from "react"
import pokemon from "./list"
import Pokecard from "./Pokecard";


function Pokedex(){

    return(
        <div className="sheet">
            <h2 className="heading">Pokedex</h2>
            {
                pokemon.map((res)=>{
                    return(
                        <Pokecard
                            name={res.name}
                            id={res.id}
                            type={res.type}
                            exp={res.base_experience}
                        />
                    )
                })
            }
        </div>
    );
}

export default Pokedex;

