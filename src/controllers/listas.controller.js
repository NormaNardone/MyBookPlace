import Lista from "../models/lista.model.js";

export const getListas = async (req, res) => {

    try {
        const listas = await Lista.find({
            user: req.user.id
        }).populate('user')
        res.json(listas);
    } catch (error) {
        return res.status(500).json({ message: "Algo salió mal" })
    }
};

export const createLista = async (req, res) => {

    try {
        const { titulo, tematica, autor } = req.body;

        console.log(req.user)

        const newLista = new Lista({
            titulo,
            tematica,
            autor,
            user: req.user.id
        });
        const savedLista = await newLista.save();
        res.json(savedLista);
    } catch (error) {
        return res.status(500).json({ message: "Algo salió mal" })
    }
};

export const getLista = async (req, res) => {
    try {
        const lista = await Lista.findById(req.params.id).populate('user');
        if (!lista) return res.status(404).json({ message: "No se encontro lista" });
        res.json(lista);
    } catch (error) {
        return res.status(404).json({ message: "No se encontro lista" });
    }
};

export const deleteLista = async (req, res) => {
    try {
        const lista = await Lista.findByIdAndDelete(req.params.id);
        if (!lista) return res.status(404).json({ message: 'No se encontro lista' });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: 'No se encontro lista' });

    }
};


export const updateLista = async (req, res) => {
    try {
        const lista = await Lista.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!lista) return res.status(404).json({ message: 'No se encontró lista' });
        res.json(lista);
    } catch (error) {
        return res.status(404).json({ message: 'No se encontró lista' });
    }
};