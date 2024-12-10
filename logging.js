// logging.js

function logAction(action, userId) {
    const logRef = db.collection('logs').add({
        action: action,
        userId: userId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log(`Action logged: ${action}`);
}
