import Travel from "../models/Travel.js";

// Register User

export const registerTravel = async (req, res) => {
    try {
        const {
            commuteName,
            commuteCode,
            departureDate,
            departureTime,
            arrivalDate,
            arrivalTime
        } = req.body;  // req body is destructured.


        const newTravel = new Travel({
            commuteName,
            commuteCode,
            departureDate,
            departureTime,
            arrivalDate,
            arrivalTime
        });

        const savedTravel = await newTravel.save(); // this new travel is stored in database

        res.status(201).json(savedTravel);

    } catch (err) {
        res.status(500).json({ error: err.message, msg: "error in registering" });
    }
}

// Update Travel

export const updateTravel = async (req, res) => {
    try {
        const { id } = req.params; // Get the travel ID from the request parameters
        const {
            commuteName,
            commuteCode,
            departureDate,
            departureTime,
            arrivalDate,
            arrivalTime
        } = req.body; // Destructure the updated fields from the request body

        // Find the travel by ID and update it with the new details
        const updatedTravel = await Travel.findByIdAndUpdate(
            id,
            {
                commuteName,
                commuteCode,
                departureDate,
                departureTime,
                arrivalDate,
                arrivalTime
            },
            { new: true } // Return the updated document
        );

        if (!updatedTravel) {
            return res.status(404).json({ msg: "Travel not found" });
        }

        res.status(200).json(updatedTravel);
    } catch (err) {
        res.status(500).json({ error: err.message, msg: "Error in updating travel" });
    }
}

// Find Travels

export const findTravellers = async (req, res) => {
    try {
        const { travelId } = req.params; // Get travelId from the request parameters

        const travel = await Travel.findById(travelId);

        if (!travel) {
            return res.status(404).json({ msg: "Travel not found" });
        }

        // Destructure the travel details to use for finding similar travelers
        const { departureDate, departureTime, arrivalDate, arrivalTime } = travel;

        // Find all travelers with the same travel details
        const matchingTravellers = await Travel.find({
            departureDate: departureDate,
            departureTime: departureTime,
            arrivalDate: arrivalDate,
            arrivalTime: arrivalTime
        });

        res.status(200).json(matchingTravellers);
    } catch (err) {
        res.status(500).json({ error: err.message, msg: "Error in finding travelers" });
    }
}