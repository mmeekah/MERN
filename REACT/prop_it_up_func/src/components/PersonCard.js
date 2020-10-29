import React from 'react';


const PersonCard = (props) => {
    if("person" in props){
        const { person } = props;
        return (
            <div className="box">
                <h1>{ person.lastName }, { person.firstName }</h1>
                <p>Age: { person.age }</p>
                <p>Hair Color: { person.hair }</p>
            </div>
        )
    }
    else{
        const {firstName, lastName, age, hair} = props;
        return (
            <div className = "box">
                <h1>{ lastName }, { firstName }</h1>
                <p>Age: { age }</p>
                <p>Hair Color: { hair }</p>
            </div>
        )
    }


}


export default PersonCard;