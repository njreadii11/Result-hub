function checkResult() {

    var roll = document.getElementById("roll").value;
    var reg = document.getElementById("reg").value;
    var output = document.getElementById("output");

    // Example student database
    if (roll === "1316" && reg === "1104-R24-1316") {

        output.innerHTML = `
            <h3>RESULT DETAILS</h3>
            Name: Aadil Shabir Najar <br>
            Course: Diploma in Electronics & Communication <br>
            Result: PASS <br>
            SGPA: <span style="color:green; font-weight:bold;">9.56</span>
        `;
    } 
    else {
        output.innerHTML = "<span style='color:red;'>Invalid Roll Number or Registration Number</span>";
    }
}
