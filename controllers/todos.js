
var toDo = [];

function create(newToDo) {
    newToDo.id = Date.now() % 1000000;
    newToDo.isDone = false;
    toDo.push(newToDo);
}

function index(req, res) {
    console.log(toDo);
    res.render('index', {
        title: 'To Do List',
        todos: toDo
    });
}

function del(id) {
    const idx = toDo.findIndex(t => t.id === parseInt(id));
    toDo.splice(idx, 1);
}

function addNew(req, res) {
    create(JSON.parse(JSON.stringify(req.body)));
    res.redirect('/');
}

function deleteTodo(req, res) {
    console.log(req.params.id);
    del(req.params.id);
    res.redirect('/');
}

module.exports = {
    index,
    addNew,
    deleteTodo,
}