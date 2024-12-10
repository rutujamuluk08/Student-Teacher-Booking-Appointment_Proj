// message.js

// Function to send a message
function sendMessage(studentId, teacherId, messageContent) {
    const messageRef = db.collection('messages').add({
      studentId: studentId,
      teacherId: teacherId,
      message: messageContent,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log("Message sent!");
  }
  