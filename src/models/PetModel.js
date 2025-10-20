import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//crio a variavel findAll e já exporto
export const findAll = async () => {
    return await prisma.Petshop.findMany({
        orderBy: { nome: 'asc' }
    });
}

//crio a variavel findbyid e já exporto
export const findbyid = async (id) => {
    return await prisma.Petshop.findUnique({
        where: { id: Number(id)}
    });
}

