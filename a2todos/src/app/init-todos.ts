export class Init {
    load() {
        if(localStorage.getItem('todos') == null || localStorage.getItem('todos') == undefined) {
            console.log('No Todos Found .....');
            var todos = [
                {
                    text: 'Pickup kids at school'
                },
                {
                    text: 'Meeting wit boss'
                },
                {
                    text: 'Dinner with wife'
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return;
        } else {
            console.log('Found Todos ...');
        }
    }
}