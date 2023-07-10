import { prisma } from '@/config';

async function findTickectsType() {
  return prisma.ticketType.findMany();
}

const ticketsRepository = {
  findTickectsType,
};

export default ticketsRepository;
