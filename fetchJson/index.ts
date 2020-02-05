import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then(response => {
    const {
        data: { id, title, completed }
    } = response;

    console.log(`
        The Todo with id: ${id}
        Has a title of: ${title}
        Is it completed? ${completed}
    `);
});
