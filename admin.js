// admin.js

// Function to add a new teacher
function addTeacher(name, department, subject) {
    const teacherRef = db.collection('teachers').add({
        name: name,
        department: department,
        subject: subject
    });
    console.log("Teacher added successfully!");
}

// Function to approve or reject student registrations
function approveStudent(studentId, approve) {
    const studentRef = db.collection('students').doc(studentId);
    studentRef.update({ approved: approve })
        .then(() => {
            console.log(approve ? "Student approved" : "Student registration rejected");
        })
        .catch((error) => {
            console.error("Error approving/rejecting student:", error);
        });
}
