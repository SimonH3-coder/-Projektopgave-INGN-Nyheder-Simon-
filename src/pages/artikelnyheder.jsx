// Lavet med hjælp fra cotpilot
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { SlugNyheder } from "../utils/slugnyheder";

export function ArtikelNyheder() {
    const { slug } = useParams();
    const { data, isLoading, error } = useQuery(SlugNyheder, { slug });

    if (isLoading) return <div>Indlæser artikel...</div>
    if (error) return <div>Fejl ved indlæsning af artikel: {error.message}</div>

    // Prøver at finde artiklen via slug
    const artikel = data?.nyhedscards?.find(item => item.slug === slug || item.id === slug)

    if (!artikel) return <div>Artikel ikke fundet</div>

    const dataObjekt = new Date(artikel.dato)
    const date = `${dataObjekt.getDate()}/${dataObjekt.getMonth() + 1}/${dataObjekt.getFullYear()}`

    return (
        <article>
            <h1>{artikel.title}</h1>
            {artikel.image?.url && <img src={artikel.image.url} alt={artikel.title} />}
            <p><strong>D. {date} -af {artikel.skribent}</strong></p>
            <div>{artikel.description?.text}</div>
        </article>
    )
}
