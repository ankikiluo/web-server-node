import tuitsDao from "../db/tuits/tuits-dao.js";
// import posts from "./tuits.js";
// let tuits = posts;

// const createTuit = (req, res) => {}
// const updateTuit = (req, res) => {}
// const deleteTuit = (req, res) => {}
export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}


const createTuit = async (req, res) => {
    const newTuit = req.body;
    const formattedNewTuit = {
        ...newTuit,
        "topic": "New Tuit from Server",
        "postedBy": {
            "username": "try in controller"
        },
        "handle": "ReactJS",
        "time": "2h",
        "title": "The New Tuit From node db",
        "logo_image": "../img/react.jpg",
        "avatar_image": "../img/react.jpg",
        "stats": {
            "comments": 0,
            "retuits": 0,
            "likes": 0
        },
        "thumbUp": 0,
        "thumbDown": 0
    };
    console.log("node: tuits-controller");
    console.log(formattedNewTuit);
    const insertedTuit = await tuitsDao.createTuit(formattedNewTuit);
    res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    console.log(tuitdIdToDelete);
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    console.log(status);
    res.send(status);
}


const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}

