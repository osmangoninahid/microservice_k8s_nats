import { Subjects, Publisher, PaymentCreatedEvent } from '@evaly/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
