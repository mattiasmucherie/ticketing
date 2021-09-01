import nats from "node-nats-streaming";
import TicketCreatedPublisher from "./events/ticket-created-publisher";
console.clear();

export const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Pub connected to nats");
  const publisher = new TicketCreatedPublisher(stan);
  await publisher.publish({
    id: "123",
    title: "this is a title",
    price: 9000,
  });
});
