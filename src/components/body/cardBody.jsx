// Lavet med hjælp lidt fra cotpilot
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useQuery } from '../../hooks/useQuery'
import pen from '../../assets/pen.png'
import trash from '../../assets/trash.png'
import { nyhedscards } from '../../utils/nyhedscard'
import { Link } from 'react-router-dom'



export const CardBody = ({kategori}) => {
    const { data, isLoading, error} = useQuery();
    let items = data?.items ?? []

    //Filter efter kategori hvis det er kommet
    if (kategori) {
        items = items.filter(artikel => artikel.fields.kategori === kategori)
    }
    if (isLoading) return <div  className="min-h-screen bg-neutral-100 px-4 py-8 text-center text-neutral-700" >Indlæser nyheder...</div>
    // Her kommer der fejl, hvis den ikke finder noget
    if (error) {
        return <div className="min-h-screen bg-neutral-100 px-4 py-8 text-center text-red-600" >Fejl ved indlæsning af nyheder: {error.message}</div>
    }
    // Her kommer der meddelelse om hvis der er fejl
    if (items.length === 0) {
        return <div className="min-h-screen bg-neutral-100 px-4 py-8 text-center text-neutral-700">Ingen artikler eller nyheder blev fundet</div>
    }

    return (
        <main className=" font-(family-name:--font-roboto-flex) min-h-screen bg-neutral-100 px-4 py-6 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-3">

            {items.map((item, index) => {
                const imageUrl = item.fields.image?.fields.file?.url
                const isFeatured = index === 0
                return (
                    <article
                        key={item.sys.id}
                        className={['group relative overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-black/5',
                            isFeatured ? 'md:col-span-2 xl:col-span-2' : '',
                            ].join(' ')} >
                    <div className="absolute right-3 top-3 z-10 flex gap-2">
                        <button
                        type="button"
                        className="rounded bg-white/90 p-1 shadow-sm ring-1 ring-black/10 trasition hover:bg-white"
                        aria-label="Skriv artikel"
                        >
                        <img src={pen} alt="" className="h-4 w-4" />
                        </button>
                        <button
                        type="button"
                        className="rounded bg-white/90 p-1 shadow-sm ring-1 ring-black/10 trasition hover:bg-white"
                        aria-label="Slet artikel"
                        >
                        <img src={trash} alt="" className="h-4 w-4" />
                        </button>
                    </div>
                    {imageUrl && (
                        <Link to={`/artikel/${item.fields.slug || item.sys.id}`}>
                        <img src={`https:${imageUrl}`} alt={item.fields.titel || 'Billeder fra nyhederne'}
                        className={[
                            'w-full object-cover transition duration-300 group-hover:scale-[1.02]',
                            isFeatured ? 'h-72 sm:h-80 md:h-[28rem] : h-56 sm:h-64' : 'h-48 sm:h-56',
                        ].join(' ')} 
                        />
                        </Link>
                    )}
                  <div className="space-y-3 p-4 sm:p-5">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
                    {item.fields.kategori || 'Nyheder'}
                  </p>

                  <Link
                    to={`/artikel/${item.fields.slug || item.sys.id}`}
                    className="block"
                  >
                    <h2 className=" font-roboto text-lg font-semibold leading-tight text-neutral-900 transition group-hover:text-red-700 sm:text-xl">
                      {item.fields.titel}
                    </h2>
                  </Link>

                  <p className="text-xs text-neutral-500">
                    {item.fields.dato} · {item.fields.Skribent || 'skribent'}
                  </p>
                </div>

                <div className="line-clamp-3 text-sm leading-6 text-neutral-700">
                  {item.fields.description &&
                    documentToReactComponents(item.fields.description)}
                </div>

                <Link
                  to={`/artikel/${item.fields.slug || item.sys.id}`}
                  className="inline-flex text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:text-red-700"
                >
                  Læs mere
                </Link>   

                    
            
            
            

        </div>
        </article>
            )
        })}

        </section>
        </main>
    )

}


