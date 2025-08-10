const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            authorName: "Dev",
            email: "Dev@gmail.com",
        },
    },
};
function extractData({ data }) {
    const { title, author } = data;
    const { authorName, email: authorEmail } = author;

    console.log("Title:", title);
    console.log("Author:", author);
    console.log("AuthorName:", authorName);
    console.log("AuthorEmail:", authorEmail);
}
extractData(response);