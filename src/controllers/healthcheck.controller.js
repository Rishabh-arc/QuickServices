import { ApiResponse } from "../utils/api_response.js";


const healthCheck = async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "server is running" }));
};
export { healthCheck };
