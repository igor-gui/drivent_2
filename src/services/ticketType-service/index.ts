import { TicketType } from '@prisma/client';
import ticketsRepository from '@/repositories/ticketType-repository';

async function getAllTickectTypes(): Promise<TicketType[]> {
  const ticketTypes = await ticketsRepository.findTickectsType();
  return ticketTypes;
}

const ticketTypeService = {
  getAllTickectTypes,
};

export default ticketTypeService;
