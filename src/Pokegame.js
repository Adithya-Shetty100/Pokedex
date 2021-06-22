import React, {Component} from 'react';
import Pokedex from './Pokedex';
import pokemon from "./list"

class Pokegame extends Component{

    render(){

        let hand1=[];
        let hand2=pokemon;

        while(hand2.length> hand1.length){
            let i=Math.floor(Math.random()*hand2.length);
            hand1.push(hand2[i]);
            hand2.splice(i,1);
        }

        //let exp1=hand1.reduce((exp,p)=>{exp+p.base_experience},0); wrong
        let exp1=hand1.reduce((exp,p)=>exp+p.base_experience,0);
        let exp2=hand2.reduce((exp,p)=>exp+p.base_experience,0);

        return(
            <div>
                <h1 className="heading">POKEDEX!!</h1>
                <Pokedex pokemon={hand1} total={exp1} isWinner={exp1>exp2} />
                <Pokedex pokemon={hand2} total={exp2} isWinner={exp2>exp1} />
            </div>
        );
    }

}

export default Pokegame; 