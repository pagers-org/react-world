import { gql } from 'graphql-request';

interface GTagsQuery {
    getTags: {
        tags: string[];
    };
}

const tagsQuery = gql`
    query getTags {
        getTags {
            tags
        }
    }
`;

export { type GTagsQuery, tagsQuery };
