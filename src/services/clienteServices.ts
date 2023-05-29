import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ClienteService {
  async get() {
    try {
      const cliente = await prisma.cliente.findMany();
      return cliente;
    } catch {
      console.log("erro");
    }
  }
  async getPorId(id: number) {
    const cliente = await prisma.cliente.findUnique({
      where: {
        id: id,
      },
    });
    return cliente;
  }
  async getPorNome(nome: string) {
    const cliente = await prisma.cliente.findMany({
      where: {
        nome: {
          startsWith: nome,
        },
        OR: {
          nomeSocial: {
            startsWith: nome,
          },
        },
      },
    });
    return cliente;
  }
  //
}

export default new ClienteService();
