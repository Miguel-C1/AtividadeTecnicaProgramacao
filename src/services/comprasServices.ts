import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ComprasServices {

    async get() {
        const compras = await prisma.compras.findMany();
        return compras
    }
    async getId(id: number) {
        const compras = await prisma.compras.findUnique({
            where: {
                id: id
            }
        });
        return compras
    }
    async getPesquisa(nome: string) {
        const compras = await prisma.compras.findMany({
            where: {
                Cliente: {
                    nome: {
                        startsWith: nome
                    }
                }, OR: {
                    Pet: {
                        nome: {
                            startsWith: nome
                        }
                    }
                }

            }
        });
        return compras
    }
    async post(data: any) {
        if (data.petId) {
            const compras = await prisma.compras.create({
                data: {
                    petId: data.petId,
                    clienteId: data.clienteId,
                    quantidade: data.quantidade,
                    produtoServicoId: data.produtoServicoId
                }
            });
            return compras
        } else {
            const compras = await prisma.compras.create({
                data: {
                    clienteId: data.clienteId,
                    quantidade: data.quantidade,
                    produtoServicoId: data.produtoServicoId
                }
            });
            return compras
        }
    }
    async put(data: any, id: number) {
        if(data.petId){
            const compras = await prisma.compras.update({
                data: {
                    clienteId: data.clienteId,
                    quantidade: data.quantidade,
                    petId: data.petId,
                    produtoServicoId: data.produtoServicoId
                },
                where: {
                    id: id
                }
            });
            return compras
        } else {
            const compras = await prisma.compras.update({
                data: {
                    clienteId: data.clienteId,
                    quantidade: data.quantidade,
                    produtoServicoId: data.produtoServicoId
                },
                where: {
                    id: id
                }
            });
            return compras
        }
    }
    async delete(id:number){
        await prisma.compras.delete({
            where: {
                id: id
            }
        });
    }

}

export default new ComprasServices();