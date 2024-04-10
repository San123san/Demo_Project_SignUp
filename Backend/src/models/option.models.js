import mongoose from "mongoose";

const OptionSchema = new mongoose.Schema({
    selectedOption: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Options = mongoose.model("Options", OptionSchema);

export default Options;
