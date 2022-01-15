
var toDo = [];

function getAll() {
    return toDo;
}

function create(newToDo) {
    newToDo.id = Date.now() % 1000000;
    newToDo.isDone = false;
    toDo.push(newToDo);
}

function index(req, res) {
    console.log(toDo.length)
    res.render('index', {
        title: 'To Do List',
        todos: toDo
    });
}

function addNew(req, res) {
    create(JSON.parse(JSON.stringify(req.body)));
    res.redirect('/');
}

module.exports = {
    index,
    addNew,
}