import { useState, useEffect } from 'react';
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export function useQuery(url) {
    const [data, setData] = useState(null);
    
    
    useEffect(() => {
        const client = createClient ({
            space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
        })
        client
        .getEntries({ content_type: 'projektopgaveIngnNyhederSimon' })
        .then((response) => {
            setData(response);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    console.log(data);
   console.log('imageurl', data?.items[0]?.fields.image.fields.file.url);
    
    return { data};

}