import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@evaly/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
  > {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
