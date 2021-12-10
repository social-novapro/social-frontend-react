import { gql } from '@apollo/client'

export const updateGuildPrefixMutation = gql`
    mutation CreatePost($userID: String!, $prefix: String) {
        createPost(guildId: $guildId, prefix: $prefix) {
            _id
            prefix
        }
    }
`;