import { gql } from '@apollo/client';

export const ADD_COMMENT_MUTATION = gql`
  mutation AddComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      comment {
        id
        content
        date
        commentedOn {
          node {
            ... on Post {
              id
            }
          }
        }
      }
    }
  }
`;
