import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URI;
/**
 * Share the code
 * @param {string} code
 * @returns {Promise<string>}
 */
export async function shareCode(code, language) {
   const response = await axios.post(`${BASE_URL}/api/v1/share/`, {
    code,
    language
   });
   return response.data;
}

/**
 * Get the code
 * @param {string} codeID
 * @returns {Promise<string>}
 */
export async function getCode(codeID) {
   console.log("submittingcodeID", codeID);
   const response = await axios.get(`${BASE_URL}/api/v1/share/${codeID}`);
   return response.data;
}

