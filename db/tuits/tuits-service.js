import dao from "./tuits-dao.js";
export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
const findAllTuits = (req, res) => {
    dao.findAllMovies()
        .then(tuits => res.json(tuits));

}
const deleteTuit = (req, res) =>
    dao.deleteTuit(req.params.id)
        .then(status => res.send(status));

const createTuit = (req, res) =>
    dao.createTuit(req.body)
        .then((newTuit) => res.json(newTuit));

const updateTuit = (req, res) =>
    dao.updateTuit(req.params.id, req.body)
        .then(status => res.send(status));




