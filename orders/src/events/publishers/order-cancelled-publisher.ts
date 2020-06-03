import { Subjects, Publisher, OrderCancelledEvent } from '@evaly/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
