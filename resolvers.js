import {nanoid} from 'nanoid';

class Course {
    constructor(id, {
        courseName,
        category,
        price,
        languages,
        email,
        stack,
        teachingAssistants
    }) {
        this.id = id;
        this.courseName = courseName;
        this.category = category;
        this.price = price;
        this.languages = languages;
        this.email = email;
        this.stack = stack;
        this.teachingAssistants = teachingAssistants;
    }
};

const courseholder = {};

const resolvers = {
    getCourse: ({ id }) => {
        return new Course(id, courseholder[id]);
    },
    CreateCourse: ({ input }) => {
        let id = nanoid();
        courseholder[id] = input;
        return new Course(id, input);
    }
};

export default resolvers;