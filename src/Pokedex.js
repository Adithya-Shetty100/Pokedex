//import react from "react"
import pokemon from "./list"
import Pokecard from "./Pokecard";


function Pokedex(){

    return(
        <div className="poke-header">
            <h1 className="heading">POKEDEX !!</h1>
            <div className="pokedex">               
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
        </div>
    );
}

export default Pokedex;

