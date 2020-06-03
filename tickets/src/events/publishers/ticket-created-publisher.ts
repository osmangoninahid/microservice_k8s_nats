import { Publisher, Subjects, TicketCreatedEvent } from '@evaly/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
