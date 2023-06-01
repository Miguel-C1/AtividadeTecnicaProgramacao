import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProdutoServico {

    async get() {
        const produtoServico = await prisma.produtoServico.findMany()
        return produtoServico
    }

    async getProduto() {
        const produtoServico = await prisma.produtoServico.findMany({
            where: {
                tipo: 'PRODUTO'
            }
        });
        return produtoServico
    }
    async getServico() {
        const produtoServico = await prisma.produtoServico.findMany({
            where: {
                tipo: 'SERVICO'
            }
        });
        return produtoServico
    }

    async getId(id: number){
        const produtoServico = await prisma.produtoServico.findUnique({
            where: {
                id: id
            }
        });
        return produtoServico
    }

    async getServicoNome(nome: string){
        const produtoServico = await prisma.produtoServico.findMany({
            where: {
                nome: {
                    startsWith: nome
                },
                tipo: 'SERVICO'
            }
        });
        return produtoServico
    }
    async getProdutoNome(nome: string){
        const produtoServico = await prisma.produtoServico.findMany({
            where: { 
                nome: {
                    startsWith: nome
                },
                tipo: 'PRODUTO'
            }
        });
        return produtoServico

    }
    

    async post(data: any) {
        const produtoServico = await prisma.produtoServico.create({
            data: {
                tipo: data.tipo,
                valor: data.valor,
                nome: data.new
            }
        });
        return produtoServico
    }
    async put(data: any, id: number) {
        const produtoServico = await prisma.produtoServico.update({
            where: {
                id: id
            },
            data: {
                tipo: data.tipo,
                valor: data.valor,
                nome: data.nome
            }
        });
        return produtoServico
    }
    async delete(id: number) {
        await prisma.produtoServico.delete({
            where: {
                id: id
            }
        });

    }
}

export default new ProdutoServico();