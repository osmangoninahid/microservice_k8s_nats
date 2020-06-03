import { Publisher, OrderCreatedEvent, Subjects } from '@evaly/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
