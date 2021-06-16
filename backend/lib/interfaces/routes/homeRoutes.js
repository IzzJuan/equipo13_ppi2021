"use strict";

const HomeController = require("../controllers/HomeController");

module.exports = {
  name: "Home",
  version: "1.0.0",
  register: async (server) => {
    server.route([
      {
        method: "GET",
        path: "/home/hotels",
        handler: HomeController.findHotels,
        options: {
          description: "Return a list of hotels for the home page",
          tags: ["api"],
        },
      },
      {
        method: "GET",
        path: "/hello/{name}",
        handler: HomeController.sayHelloPerson,
        options: {
          description: 'Return "Hello {name}!"',
          tags: ["api"],
        },
      },
    ]);
  },
};
