function checkResult() {

    var roll = document.getElementById("roll").value.trim();
    var reg = document.getElementById("reg").value.trim();
    var error = document.getElementById("error");
    var result = document.getElementById("result");

    error.innerHTML = "";
    result.innerHTML = "";

    // Student Database
    var students = [
        {
            roll: "1104-25N3-48232",
            reg: "11-04-R24-1316",
            name: "Aadil Shabir Najar",
            course: "Diploma in Electronics & Communication",
            sgpa: "9.56",
            status: "PASS"
        },
        {
            roll: "2025-001",
            reg: "REG-2025-001",
            name: "Test Student",
            course: "Computer Engineering",
            sgpa: "9.44",
            status: "PASS"
        }
    ];

    var found = false;

    for (var i = 0; i < students.length; i++) {
        if (roll === students[i].roll && reg === students[i].reg) {

            result.innerHTML = `
                <table>
                    <tr>
                        <th colspan="2">RESULT DETAILS</th>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>${students[i].name}</td>
                    </tr>
                    <tr>
                        <td>Roll Number</td>
                        <td>${students[i].roll}</td>
                    </tr>
                    <tr>
                        <td>Registration Number</td>
                        <td>${students[i].reg}</td>
                    </tr>
                    <tr>
                        <td>Course</td>
                        <td>${students[i].course}</td>
                    </tr>
                    <tr>
                        <td>Result</td>
                        <td>${students[i].status}</td>
                    </tr>
                    <tr>
                        <td>SGPA</td>
                        <td class="sgpa">${students[i].sgpa}</td>
                    </tr>
                </table>
            `;

            found = true;
            break;
        }
    }

    if (!found) {
        error.innerHTML = "Invalid Roll Number or Registration Number";
    }
}
