const test = require("node:test");
const assert = require("node:assert/strict");
const { buildListingSearchQuery } = require("../controllers/listings");

test("buildListingSearchQuery matches title, description, location, and country", () => {
  const query = buildListingSearchQuery("beach");

  assert.deepEqual(query, {
    $or: [
      { title: { $regex: "beach", $options: "i" } },
      { description: { $regex: "beach", $options: "i" } },
      { location: { $regex: "beach", $options: "i" } },
      { country: { $regex: "beach", $options: "i" } },
    ],
  });
});
