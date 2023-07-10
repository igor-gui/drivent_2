import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ticketTypeService from '@/services/ticketType-service';

export async function getAllTicketTypes(req: Request, res: Response) {
  try {
    const tickectTypes = await ticketTypeService.getAllTickectTypes();
    return res.status(httpStatus.OK).send(tickectTypes);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}
