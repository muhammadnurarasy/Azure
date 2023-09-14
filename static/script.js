document.addEventListener("DOMContentLoaded", function () {
    // When the "Predict Price" button is clicked
    document.getElementById("predict-btn").addEventListener("click", function () {
        // Gather data from input fields
        let features = {
            document.getElementById('predict-btn').addEventListener('click', function() {
    const neighborhoodMean = parseFloat(document.getElementById('neighborhood-mean').value);
    const houseType = document.getElementById('house-type').value;
    const overallQuality = parseInt(document.getElementById('overall-quality').value);
    const firstFloorSqft = parseInt(document.getElementById('first-floor-sqft').value);
    const roomsAboveGrade = parseInt(document.getElementById('rooms-above-grade').value);
    const yearBuilt = parseInt(document.getElementById('year-built').value);
    const fullBathrooms = parseInt(document.getElementById('full-bathrooms').value);

    const features = {
        neighborhoodMean: neighborhoodMean,
        houseType: houseType,
        overallQuality: overallQuality,
        firstFloorSqft: firstFloorSqft,
        roomsAboveGrade: roomsAboveGrade,
        yearBuilt: yearBuilt,
        fullBathrooms: fullBathrooms
    };

    // Use the features to make an API call to your Flask backend
    // ... (the rest of your predict price function)
});

        };

        // Make an AJAX call to the Flask backend
        fetch("/predict", {
            method: "POST",
            body: JSON.stringify({ features: features }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            // Display the predicted price
            document.getElementById("predicted-price").innerText = "Predicted Price: $" + data.prediction.toFixed(2);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
