import posts from "./tuits.js";
let tuits = posts;

// const createTuit = (req, res) => {}
// const updateTuit = (req, res) => {}
// const deleteTuit = (req, res) => {}
export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t =>
                          t._id === tuitdIdToUpdate ?
                          updatedTuit :
                          t);
    res.sendStatus(200);
}

const findAllTuits = (req, res) => {
    res.json(tuits);
}

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    tuits.push(newTuit);
    res.json(newTuit);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !==
                              tuitdIdToDelete);
    res.sendStatus(200);
}

