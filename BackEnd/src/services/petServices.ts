import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class petServices {
  async get() {
    const pet = await prisma.pet.findMany({
      select: {
        id: true,
        nome: true,
        tipo: true,
        raca: true,
        Cliente:{

        }
      }
    });
    return pet;
  }

  async getPorId(id: number) {
    const pet = await prisma.pet.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        tipo: true,
        raca: true,
        genero:true,
        Cliente:{
        }
      }
    });
    return pet;
  }

  async getPorNome(nome: string) {
    const pet = await prisma.pet.findMany({
      where: {
        nome: nome,
      },
    });
    return pet;
  }

  async post(data: any) {
    const pet = await prisma.pet.create({
      data: {
        nome: data.nome,
        tipo: data.tipo,
        raca: data.raca,
        genero: data.genero,
        clienteId: parseInt(data.clienteId),
      },
    });
    return pet;
  }

  async update(data: any, id: number) {
    const pet = await prisma.pet.update({
      data: {
        nome: data.nome,
        tipo: data.tipo,
        raca: data.raca,
        genero: data.genero,
      },
      where: {
        id: id,
      },
    });
    return pet;
  }

  async delete(id: number) {
    await prisma.pet.delete({
      where: {
        id: id,
      },
    });
  }
}

export default new petServices();
