import nats from "node-nats-streaming";
console.clear();

export const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Pub connected to nats");
  const data = JSON.stringify({
    id: "123",
    title: "concert",
    price: 20,
  });
  stan.publish("ticket:created", data, (err, guid) => {
    if (err) {
      console.log("publish failed: " + err);
    } else {
      console.log("published message with guid: " + guid);
    }
  });
});
