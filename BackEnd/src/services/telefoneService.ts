import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class TelefoneService {
  async get() {
    const telefone = await prisma.telefone.findMany();
    return telefone;
  }
  async getId(id: number) {
    const telefone = await prisma.telefone.findUnique({
      where: {
        id: id,
      },
    });
    return telefone;
  }
  async getNumero(numero: string) {
    const telefone = await prisma.telefone.findMany({
      where: {
        numero: {
          startsWith: numero,
        },
      },
    });
    return telefone;
  }
  async post(data: any) {
    const telefone = await prisma.telefone.create({
      data: {
        ddd: data.ddd,
        numero: data.numero,
        clienteId: data.clienteId,
      },
    });
    return telefone;
  }
  async put(data: any, id: number) {
    const telefone = await prisma.telefone.update({
      where: {
        id: id,
      },
      data: {
        ddd: data.ddd,
        numero: data.numero,
      },
    });
    return telefone;
  }
  async delete(id: number) {
    await prisma.telefone.delete({
      where: {
        id: id,
      },
    });
  }
}

export default new TelefoneService();
