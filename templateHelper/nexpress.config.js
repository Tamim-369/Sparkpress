const dotenv = require('dotenv');

dotenv.config();

const config = {
  postman_api_key: process.env.POSTMAN_API_KEY,
  postman_folder_name: process.env.POSTMAN_FOLDER_NAME,
  postman_workspace_id: process.env.POSTMAN_WORKSPACE_ID,
  postman_collection_name: process.env.POSTMAN_COLLECTION_NAME,
};

module.exports = { config };
