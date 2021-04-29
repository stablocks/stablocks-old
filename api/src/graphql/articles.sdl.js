export const schema = gql`
  type Article {
    id: Int!
    title: String!
    content: String!
    category: Category
    categoryId: Int
    status: ArticleStatus!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum ArticleStatus {
    draft
    published
    archived
  }

  type Query {
    articles: [Article!]!
    article(id: Int!): Article
  }

  input CreateArticleInput {
    title: String!
    content: String!
    categoryId: Int
    status: ArticleStatus!
  }

  input UpdateArticleInput {
    title: String
    content: String
    categoryId: Int
    status: ArticleStatus
  }

  type Mutation {
    createArticle(input: CreateArticleInput!): Article!
    updateArticle(id: Int!, input: UpdateArticleInput!): Article!
    deleteArticle(id: Int!): Article!
  }
`
