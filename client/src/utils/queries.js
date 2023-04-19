import { gql } from '@apollo/client';

export const QUERY_CURRENT_USER = gql`
{
    currentUser {
        username
        email
    }
}
`