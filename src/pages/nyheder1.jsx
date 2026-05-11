import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useQuery } from '../hooks/useQuery'

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

        </div>
    )
}