import React from 'react'
import { Link } from 'react-router-dom'


export const Cards = ({ items }) => {
    if ( !items) {
        return null;
    }
    const dataobjekt = new Date(items.dato)
    const date = `${dataobjekt.getDate()}/${dataobjekt.getMonth() + 1}/${dataobjekt.getFullYear()}`

    return (
        <section>
            <div>
                <Link to={`/artikel/${items.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h2>{items.titel}</h2>
                </Link>
                <p>{items.description?.text}</p>
                <p>D. {date} - af {items.skribent}</p>
                <p>
                    <Link to={`/artikel/${items.slug} || items.id`}>
                    <button className="minButton">Læs mere</button>
                    </Link>
                </p>
                </div>
                {items.image?.url && <img src={items.image.url} alt="" />}
                 
  '
        </section>
    )
}