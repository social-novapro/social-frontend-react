import { gql } from '@apollo/client'

export const homePageQuery = gql`
    query getHomePageQuery {
        getUser {
            discordId
            discordTag
            avatar
        }
    }
`;