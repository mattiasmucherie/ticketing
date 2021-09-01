import { Publisher, Subjects, TicketCreatedEvent } from "@mm-tickets/common";

class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

export default TicketCreatedPublisher;
