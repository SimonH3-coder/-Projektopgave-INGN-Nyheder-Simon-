import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useQuery } from '../hooks/useQuery'

// import { slugNyheder } from '../utils/slugNyheder'
import pen from '../assets/pen.png'
import trash from '../assets/trash.png'

export default function Nyheder1() {

const { data } = useQuery()
console.log(data);








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