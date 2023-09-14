document.getElementById("predictForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    
    // Extract values
    let OverallQual = document.getElementById("OverallQual").value;
    let GrLivArea = document.getElementById("GrLivArea").value;
    let GarageCars = document.getElementById("GarageCars").value;
    let GarageArea = document.getElementById("GarageArea").value;
    let TotalBsmtSF = document.getElementById("TotalBsmtSF").value;

    // Make a prediction request
    let response = await fetch("https://arasy.z23.web.core.windows.net/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            OverallQual: OverallQual,
            GrLivArea: GrLivArea,
            GarageCars: GarageCars,
            GarageArea: GarageArea,
            TotalBsmtSF: TotalBsmtSF
        })
    });

    let data = await response.json();
    
    // Display predicted price
    document.getElementById("predictedPrice").innerText = "$" + data.prediction.toFixed(2);
    document.getElementById("prediction").classList.remove("hidden");
});
