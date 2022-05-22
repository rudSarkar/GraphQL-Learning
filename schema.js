import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Course {
        id: ID
        courseName: String
        category: String
        price: Int
        languages: String
        email: String
        stack: Stack
        teachingAssistants: [TeachingAssist]
    }

    type TeachingAssist {
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query {
        getCourse(id: ID): Course
    }

    input CouseInput {
        id: ID
        courseName: String!
        category: String
        price: Int!
        languages: String
        email: String
        stack: Stack
        teachingAssistants: [TeachingAssistInput]!
    }

    input TeachingAssistInput {
        firstName: String
        lastName: String
        experience: Int
    }

    type Mutation {
        CreateCourse(input: CouseInput): Course
    }
`);

export default schema;