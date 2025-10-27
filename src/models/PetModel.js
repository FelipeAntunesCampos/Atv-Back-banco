import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//crio a variavel findAll e já exporto
export const findAll = async () => {
    return await prisma.petshop.findMany({
        orderBy: { nome: 'asc' }
    });
}

//crio a variavel findbyid e já exporto
export const findbyid = async (id) => {
    return await prisma.petshop.findUnique({
        where: { id: Number(id)}
    });
}

export const create = async (data) =>   {
    return await prisma.petshop.create({
        data: {
            nome: data.nome,
            especie: data.especie,
            idade: data.idade,
            dono: data.dono,
        }
    })
}

export const deletePet = async (id) => {
    return await prisma.petshop.delete({
        where: { id: Number(id) }
    })
}

export const update = async (id, data) => {
    return await prisma.petshop.update({
        where: { id: Number(id) },
        data: {
            ...(data.nome && { nome: data.nome }),
            ...(data.especie && { especie: data.especie }),
            ...(data.idade && { idade: data.idade }),
            ...(data.dono && { dono: data.dono }),
        }
    })
}
