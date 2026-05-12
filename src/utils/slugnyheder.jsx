import { gql } from "graphql-request";


// For at sende en slug med ind i et query: 
// $slug = selve variablen
// "Where" clause hvor vi anvender $slug til at søge efter en særlig blog

export const SlugNyheder = gql`
query ($slug: String!) {
    blogCollection(where: {slug: $slug}) {
        items {
            title
            slug
            description {
                json
            }
            image {
                url
            }
        }
    }
}
`


