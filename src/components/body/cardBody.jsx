import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useQuery } from '../../hooks/useQuery'
import pen from '../../assets/pen.png'
import trash from '../../assets/trash.png'
import { nyhedscards } from '../../utils/nyhedscard'



export const CardBody = ({kategori}) => {
    const { data, isLoading, error} = useQuery();
    let items = data?.items ?? []

    //Filter efter kategori hvis det er kommet
    if (kategori) {
        items = items.filter(artikel => artikel.kategori === kategori)
    }
    if (isLoading) return <div>Indlæser nyheder...</div>
    // Her kommer der fejl, hvis den ikke finder noget
    if (error) {
        return <div>Fejl ved indlæsning af nyheder: {error.message}</div>
    }
    // Her kommer der meddelelse om hvis der er fejl
    if (items.length === 0) {
        return <div>Ingen artikler eller nyheder blev fundet</div>
    }

    return (
        <div>
            {data?.items.map((item) => 
            <div key={item.sys.id}>
                <h2>{item.fields.titel}</h2>
                {item.fields.image && (
                    <img src={'https:' + item.fields.image.fields.file.url} />
                )}
                <p>{item.fields.description && documentToReactComponents(item.fields.description)}</p>
            </div> )}
            <img src={pen} alt="Edit" />
            <img src={trash} alt="Delete" />

        </div>
    )
}

