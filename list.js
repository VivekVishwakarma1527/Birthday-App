import React from "react";

const List = ({people}) => {
    return (
        <>
        {/* passing a parameter as a person */}
        {people.map((person)=>{
            const {id, name, age, image} = person;
            return <article key={person.id} className="person">
                <img src={image} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <p>{age} Years</p>
                </div>
            </article>
        })}
        </>
    )
}

export default List;