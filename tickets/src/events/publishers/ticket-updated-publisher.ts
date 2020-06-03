import { Publisher, Subjects, TicketUpdatedEvent } from '@evaly/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
