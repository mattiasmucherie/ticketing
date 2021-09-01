import { Publisher, Subjects, TicketUpdatedEvent } from "@mm-tickets/common";

class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

export default TicketUpdatedPublisher;
