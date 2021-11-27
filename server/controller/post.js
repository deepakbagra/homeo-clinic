import postMessages from "../models/postMessages.js";

export const getPost = async (req, res) => {
    try {
        const postMessage = await postMessages.find();

        console.log(postMessage);

        res.status(200).json(postMessage);

    } catch (error) {
        res.status(404).json( {message: error.message} );
    }
}