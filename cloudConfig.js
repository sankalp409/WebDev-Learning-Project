const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, // Ensure these are correctly populated
  api_key: process.env.CLOUD_API_KEY, // from your .env file
  api_secret: process.env.CLOUD_API_SECRET, // before this line executes
});

// Check for missing environment variables *before* Cloudinary attempts to use them
if (
  !process.env.CLOUD_NAME ||
  !process.env.CLOUD_API_KEY ||
  !process.env.CLOUD_API_SECRET
) {
  const errorMessage =
    "Cloudinary configuration missing. Please set CLOUD_NAME, CLOUD_API_KEY, and CLOUD_API_SECRET in your .env file.";
  console.error(errorMessage);
  throw new Error(errorMessage); // This will now stop the app with a clear message
}

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wanderlust_DEV",
    allowed_formats: ["png", "jpeg", "jpg"], // Changed 'format' to 'allowed_formats' for clarity and correctness
  },
});

module.exports = {
  cloudinary,
  storage,
};
