# GraphQL-Learning

To run this project you'll need to have `node.js` and use `npm install` when the installation done. Type command `npm start` to start the project and browse
http://127.0.0.1:3000/graphql

That's it. It's not a good README but it's all now you can mutation using bellow query to set data:

```graphql
mutation {
  CreateCourse(input: {
    courseName: "GraphQL Learning",
    price: 199
    stack: WEB
    teachingAssistants: [
      {
        firstName: "Rudra"
        lastName: "Sarkar"
        experience: 1
      },
      {
        firstName: "Another"
        lastName: "Teacher"
        experience: 2
      }
    ]
  }) {
    id
    courseName
    price
  }
}
```

Output:

```json
{
  "data": {
    "CreateCourse": {
      "id": "3VBt4fdHXXsvlyMtB7dRY",
      "courseName": "GraphQL Learning",
      "price": 199
    }
  }
}
```

Now query to get data:

```graphql
query {
  getCourse(id: "3VBt4fdHXXsvlyMtB7dRY") {
    id
    courseName
    price
    teachingAssistants {
      firstName
      lastName
      experience
    }
  }
}
```

Output:

```json
{
  "data": {
    "getCourse": {
      "id": "3VBt4fdHXXsvlyMtB7dRY",
      "courseName": "GraphQL Learning",
      "price": 199,
      "teachingAssistants": [
        {
          "firstName": "Rudra",
          "lastName": "Sarkar",
          "experience": 1
        },
        {
          "firstName": "Anoter",
          "lastName": "Teacher",
          "experience": 2
        }
      ]
    }
  }
}
```
