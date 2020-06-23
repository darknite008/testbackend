//const expect = require("chai").expect;
const queries = require("../../database/queries");
const { expect } = require("chai");

describe("queries", function () {
  describe("getAllEvents", function () {
    it("should result in all rows in the event table", function (done) {
      queries.getAllEvents(function (error, events) {
        if (error) return done(error);
        expect(events).to.be.an("array");
        expect(events.length).to.eql(1);
        done();
      });
    });
  });
});
