import Pokecard from "./Pokecard";


function Pokedex(props){

    let result=props.isWinner?"Winning Hand":"Losing Hand";

    return(
        <div className="poke-header">
            <div className="result">
                <h3 className={result}> {result}</h3>
                <p>TOTAL EXP: {props.total}</p>
            </div>

            <div className="pokedex">               
                {
                    props.pokemon.map((res)=>{
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

