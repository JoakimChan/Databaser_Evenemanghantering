import event from "./api/event.js";
import guest from "./api/guest.js";
import venue from "./api/venue.js";

export default function (server, mongoose) {

  event(server, mongoose)

  guest(server, mongoose)

  venue(server, mongoose)

}