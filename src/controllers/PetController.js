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

export const criar = async (req, res) => {
    try {
        const { nome, especie, idade, dono } = req.body

        const dado = req.body   

        //validacão
        const camposObrigatorios = ['nome', 'especie', 'dono'];

        const faltando = camposObrigatorios.filter(campo => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
            });
        }

        const novoPet = await PetModel.create(dado);

        res.status(201).json({
            mensagem: 'Pet Criado com sucesso!',
            pet: novoPet
        });

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao criar pet',
            detalhes: error.mensage
        })
    }
}

export const apagar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const petExiste = await PetModel.findbyid(id);

        if (!petExiste) {
            return res.status(404).json({
                erro: 'Pet não encontrado com esse id',
                id: id
            })
        }

        await PetModel.deletePet(id)

        res.status(200).json({
            mensagem: 'Pet removido com sucesso',
            petRemovido: petExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar pet!',
            detalhes: error.message
        })
    }
}

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const petExiste = await PetModel.findbyid(id);

        if (!petExiste) {
            return res.status(404).json({
                erro: 'Pet não encontrado com esse id',
                id: id
            })
        }

        const petAtualizado = await PetModel.update(id, dados);

        res.status(200).json({
            mensagem: 'Pet atualizado com sucesso',
            pet: petAtualizado
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar pets',
            detalhes: error.message
        })
    }
}