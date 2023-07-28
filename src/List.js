import React from 'react'

function List({people}) {
    const lists=people.map(person=>{
        const {id,name,age,image}=person
        return(
            <article key={id} className='person'>
                <div > {name}</div>
                <div>{age}</div>
            </article>
        )
    })
  return (
    <div>{lists}</div>
  )
}

export default List