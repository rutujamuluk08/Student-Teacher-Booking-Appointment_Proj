// appointment.js

// Function to book an appointment
function bookAppointment(studentId, teacherId, date, time) {
    const appointmentRef = db.collection('appointments').add({
      studentId: studentId,
      teacherId: teacherId,
      date: date,
      time: time,
      status: 'Pending'  // Pending by default
    });
    console.log("Appointment booked successfully!");
  }
  
  // Function to approve an appointment
  function approveAppointment(appointmentId) {
    const appointmentRef = db.collection('appointments').doc(appointmentId);
    appointmentRef.update({ status: 'Approved' }).then(() => {
      console.log("Appointment approved");
    }).catch((error) => {
      console.error("Error approving appointment:", error);
    });
  }
  
  // Function to cancel an appointment
  function cancelAppointment(appointmentId) {
    const appointmentRef = db.collection('appointments').doc(appointmentId);
    appointmentRef.update({ status: 'Cancelled' }).then(() => {
      console.log("Appointment cancelled");
    }).catch((error) => {
      console.error("Error cancelling appointment:", error);
    });
  }
  // appointment.js

  // Function to fetch available teachers and their slots
  function getAvailableTeachers() {
    db.collection('teachers').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const teacher = doc.data();
            console.log(`Teacher: ${teacher.name}, Subject: ${teacher.subject}`);
            // Display teachers and available slots here
        });
    }).catch((error) => {
        console.error("Error fetching teachers:", error);
    });
  }

  

  