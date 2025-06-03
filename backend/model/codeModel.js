import {Schema, model} from "mongoose";

const codeSchema = new Schema({
    code: {
        type: String,
        required: true,
    },
    language: {
        type: String,
    }
})
const Code = model("CodeModel", codeSchema);

export default Code;