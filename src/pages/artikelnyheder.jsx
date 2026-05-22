// Lavet med hjælp fra cotpilot og Greta
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { SlugNyheder } from "../utils/slugnyheder";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// Render hele rich teksten i artiklen

export function ArtikelNyheder() {
    const { slug } = useParams();
    const { data, isLoading, error } = useQuery(SlugNyheder, { slug });
    console.log("data", data);

    if (isLoading) return <div>Indlæser artikel...</div>
    if (error) return <div>Fejl ved indlæsning af artikel: {error.message}</div>

    // Prøver at finde artiklen via slug
    const artikel = data?.items?.find(item => item.fields.slug === slug || item.fields.id === slug)
console.log("artikel", artikel);
    if (!artikel) return <div>Artikel ikke fundet</div>

    const dataObjekt = new Date(artikel.fields.dato)
    const date = `${dataObjekt.getDate()}/${dataObjekt.getMonth() + 1}/${dataObjekt.getFullYear()}`

    return (
        <article>
            <h1>{artikel.fields.titel}</h1>
            {artikel.fields.image?.fields?.file?.url && <img src={artikel.fields.image.fields.file.url} alt={artikel.fields.titel} />}
            <p><strong>{artikel.fields.dato} {artikel.fields.Skribent}</strong></p>
            
            <div>{documentToReactComponents(artikel.fields.description)}</div>
        </article>
    )
}
