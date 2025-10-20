import * as PetModel from './../models/PetModel.js'

export const listarTodos = async (req, res) => {
    try {
        const pets = await PetModel.findAll();

        if (!pets || pets.length === 0) {
            res.status(404).json({
                total: pets.length,
                mensagem: 'Não há pets na lista',
                pets
            })
        }
        res.status(200).json({
            total: pets.length,
            mensagem: 'lista de pets',
            pets
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}

export const listarUm = async (req, res) => {
    try {
        const id  = req.params.id;
        const pets = await PetModel.findbyid(id);

        if (!pets) {
            return res.status(404).json({
                erro: 'Pet não encontrado!',
                mensagem: 'Verifique se o id do Pet existe',
                id: id
            })
        }
        res.status(200).json({
            mensagem: 'Pet encontrado',
            pets
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar Pets por id',
            detalhes: error.message,
            status: 500
        })
    }
}