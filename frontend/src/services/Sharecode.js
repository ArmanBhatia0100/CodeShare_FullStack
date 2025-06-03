import axios from "axios";

/**
 * Share the code
 * @param {string} code
 * @returns {Promise<string>}
 */
export async function shareCode(code, language) {
   const response = await axios.post(`http://localhost:3000/api/v1/share/`, {
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
   const response = await axios.get(`http://localhost:3000/api/v1/share/${codeID}`);
   return response.data;
}

