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

  async delete(id: number) {
    await prisma.cliente.delete({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: any) {
    const cliente = await prisma.cliente.update({
      data: {
        nome: data.nome,
        nomeSocial: data.nomeSocial,
        dataEmissaoCpf: new Date(data.dataEmissaoCpf),
        CPF: data.cpf,
      },
      where: {
        id: id,
      },
    });
    return cliente;
  }

  async post(data: any) {
    const cliente = await prisma.cliente.create({
      data: {
        nome: data.nome,
        nomeSocial: data.nomeSocial,
        dataEmissaoCpf: new Date(data.dataEmissaoCpf),
        dataCadastro: new Date(),
        CPF: data.cpf,
      },
    });
    return cliente;
  }
  //
}

export default new ClienteService();
