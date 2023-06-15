import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ComprasServices {
  async get() {
    const compras = await prisma.compras.findMany();
    return compras;
  }

  async  getTop10ClientesMaisConsumiram() {
    const top10Clientes = await prisma.cliente.findMany({
      include: {
        Compras: true,
      },
    });
  
    const clientesComSomaQuantidade = top10Clientes.map((cliente) => {
      const somaQuantidade = cliente.Compras.reduce(
        (total, compra) => total + compra.quantidade,
        0
      );
      return {
        clienteId: cliente.id,
        nome: cliente.nome,
        somaQuantidade: somaQuantidade,
      };
    });
  
    const top10ClientesMaisConsumiram = clientesComSomaQuantidade
      .sort((a, b) => b.somaQuantidade - a.somaQuantidade)
      .slice(0, 10);
  
    return top10ClientesMaisConsumiram;
  }
  

  async  getTopProdutosMaisConsumidos() {
    const produtosComSomaQuantidade = await prisma.produtoServico.findMany({
      include: {
        Compras: true,
      },
    });

    const produtosMaisConsumidos = produtosComSomaQuantidade
      .map((produto) => {
        const somaQuantidade = produto.Compras.reduce(
          (total, compra) => total + compra.quantidade,
          0
        );
        return {
          produtoServicoId: produto.id,
          nome: produto.nome,
          somaQuantidade: somaQuantidade,
        };
      })
      .sort((a, b) => b.somaQuantidade - a.somaQuantidade)

  
    return produtosMaisConsumidos;
  }
  
  async  getTop5ClientesMaisConsumiramEmValor() {
    const clientesCompras = await prisma.cliente.findMany({
      include: {
        Compras: {
          include: {
            ProdutoServico: true,
          },
        },
      },
    });
  
    const clientesComValorTotal = clientesCompras.map((cliente) => {
      const valorTotal = cliente.Compras.reduce(
        (total, compra) => total + compra.quantidade * compra.ProdutoServico.valor,
        0
      );
      return {
        clienteId: cliente.id,
        nome: cliente.nome,
        valorTotal: valorTotal,
      };
    });
  
    const top5ClientesMaisConsumiram = clientesComValorTotal
      .sort((a, b) => b.valorTotal - a.valorTotal)
      .slice(0, 5);
  
    return top5ClientesMaisConsumiram;
  }
  

  async getId(id: number) {
    const compras = await prisma.compras.findUnique({
      where: {
        id: id,
      },
    });
    return compras;
  }
  async getPesquisa(nome: string) {
    const compras = await prisma.compras.findMany({
      where: {
        Cliente: {
          nome: {
            startsWith: nome,
          },
        },
        OR: {
          Pet: {
            nome: {
              startsWith: nome,
            },
          },
        },
      },
    });
    return compras;
  }
  async post(data: any) {
    if (data.petId) {
      const compras = await prisma.compras.create({
        data: {
          petId: parseInt(data.petId),
          clienteId: parseInt(data.clienteId),
          quantidade: parseFloat(data.quantidade),
          produtoServicoId: parseInt(data.produtoServicoId),
        },
      });
      return compras;
    } else {
      const compras = await prisma.compras.create({
        data: {
          clienteId: parseInt(data.clienteId),
          quantidade: parseFloat(data.quantidade),
          produtoServicoId: parseInt(data.produtoServicoId),
        },
      });
      return compras;
    }
  }
  async put(data: any, id: number) {
    if (data.petId) {
      const compras = await prisma.compras.update({
        data: {
          clienteId: data.clienteId,
          quantidade: data.quantidade,
          petId: data.petId,
          produtoServicoId: data.produtoServicoId,
        },
        where: {
          id: id,
        },
      });
      return compras;
    } else {
      const compras = await prisma.compras.update({
        data: {
          clienteId: data.clienteId,
          quantidade: data.quantidade,
          produtoServicoId: data.produtoServicoId,
        },
        where: {
          id: id,
        },
      });
      return compras;
    }
  }
  async delete(id: number) {
    await prisma.compras.delete({
      where: {
        id: id,
      },
    });
  }
}

export default new ComprasServices();
