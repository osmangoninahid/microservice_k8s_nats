import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@etickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
  > {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
