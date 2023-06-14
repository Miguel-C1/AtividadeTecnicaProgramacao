import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class RgService {
  async get() {
    const rg = await prisma.rG.findMany();
    return rg;
  }
  async getId(id: number) {
    const rg = await prisma.rG.findFirst({
      where: {
        clienteId: id,
      },
    });
    return rg;
  }
  async getPorValor(valor: string) {
    const rg = await prisma.rG.findMany({
      where: {
        valor: {
          startsWith: valor,
        },
      },
    });
    return rg;
  }
  async post(data: any) {
    const rg = await prisma.rG.create({
      data: {
        valor: data.valor,
        dataEmissao: new Date(data.dataEmissao),
        clienteId: data.clienteId,
      },
    });
    return rg;
  }
  async put( data: any, id: number) {
    const rg = await prisma.rG.update({
      data: {
        valor: data.valor,
        dataEmissao: new Date(data.dataEmissao),
      },
      where: {
        id: id,
      },
    });
    return rg;
  }
  async delete(id: number) {
    await prisma.rG.delete({
      where: {
        id: id,
      },
    });
  }
}

export default new RgService();
