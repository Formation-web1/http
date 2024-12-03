fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => console.log(data))  
    .catch(error => console.error('Error fetching todos:', error));


    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1,
            title: 'New Todo',
            completed: false
        })
    })
        .then(response => response.json())
        .then(data => console.log('Created Todo:', data))  
        .catch(error => console.error('Error creating todo:', error));
    
