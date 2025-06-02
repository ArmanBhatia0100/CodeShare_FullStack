import axios from "axios";

/**
 * Share the code
 * @param {string} code
 * @returns {Promise<string>}
 */
export async function shareCode(code) {
   const response = await axios.post("http://localhost:3000/api/v1/share", {
    code
   });
   return response.data;
}
