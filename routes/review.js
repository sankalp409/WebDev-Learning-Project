const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listing"); // Import the Listing model
const Review = require("../models/reviews");

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(", "); // Added space for readability
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//review route
router.post(
  "/reviews",
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    await newReview.save();
    listing.reviews.push(newReview._id);
    await listing.save();
    req.flash("success", "New review created");
    res.redirect(`/listings/${listing._id}`);
  }),
);

//delete review route
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "review deleted");
    res.redirect(`/listings/${id}`);
  }),
);

module.exports = router;
