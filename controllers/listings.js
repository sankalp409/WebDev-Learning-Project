const Listing = require("../models/listing");

function buildListingSearchQuery(keyword) {
  const searchKeyword = keyword?.trim();

  if (!searchKeyword) {
    return {};
  }

  return {
    $or: [
      { title: { $regex: searchKeyword, $options: "i" } },
      { description: { $regex: searchKeyword, $options: "i" } },
      { location: { $regex: searchKeyword, $options: "i" } },
      { country: { $regex: searchKeyword, $options: "i" } },
    ],
  };
}

module.exports.buildListingSearchQuery = buildListingSearchQuery;

module.exports.index = async (req, res) => {
  const keyword = req.query.search;
  const searchQuery = buildListingSearchQuery(keyword);
  const allListings = await Listing.find(searchQuery);
  res.render("listings/index", { allListings, keyword });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListings = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner")
    .populate("owner");
  if (!listing) {
    req.flash("error", "The requested listing does not exist");
    res.redirect("/listings");
    return;
  }
  res.render("listings/show", { listing });
};

module.exports.createListing = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  if (req.file) {
    newListing.image.url = req.file.path;
    newListing.image.filename = req.file.filename;
  }
  newListing.owner = req.user._id;
  await newListing.save();
  newListing.image = { url, filename };
  req.flash("success", "New listing created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "The requested listing does not exist");
    res.redirect("/listings");
    return; // Stop execution after redirecting
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_200,w_200");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  if (!req.body.listing) {
    throw new ExpressError(400, "Send Valid Data for listing");
  }
  let { id } = req.params;

  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "listing updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  req.flash("success", "listing deleted");
  res.redirect("/listings");
};
