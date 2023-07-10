import { Router } from 'express';

const ticketTypeRouter = Router();

ticketTypeRouter.get('/tickets/types');

export { ticketTypeRouter };
