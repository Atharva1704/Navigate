import mongoose from "mongoose";

const TravelSchema = new mongoose.Schema(
    {
        commuteName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        commuteCode: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        departureDate: {
            type: String,
            required: true
        },
        departureTime: {
            type: String,
            required: true
        },
        arrivalDate: {
            type: String,
            required: true
        },
        arrivalTime: {
            type: String,
            required: true
        },

    }, {
    timestamps: true,
}
);
const Travel = mongoose.model("Travel", TravelSchema);
export default Travel;
