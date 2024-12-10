# Student-Teacher Booking Appointment System

## Project Overview

The **Student-Teacher Booking Appointment System** is a web-based platform that allows students and teachers to manage appointment scheduling. It provides an efficient and user-friendly interface for both students and teachers to book, approve, or cancel appointments. The system also facilitates easy communication between students and teachers via messaging.

The project is built using HTML, CSS, JavaScript, and Firebase for the backend.

## Features

### 1. **Admin Panel**
- Add, update, or delete teacher records.
- Approve or reject student registrations.
  
### 2. **Teacher Dashboard**
- Teachers can add available time slots.
- View and approve/cancel appointments.
  
### 3. **Student Dashboard**
- Register and log in to the system.
- Search and book appointments with teachers.
- Send messages to teachers regarding the appointment.

### 4. **Appointment Management**
- Students can book appointments based on available teacher slots.
- Teachers can approve or cancel appointments.
  
### 5. **Messaging System**
- Students can send messages to teachers regarding the appointment details.

### 6. **Firebase Integration**
- All data, including users, appointments, messages, and logs, are stored in Firebase Firestore.

### 7. **Logging**
- Action logs are generated for every action performed (adding slots, booking appointments, etc.).

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase Firestore (NoSQL)
- **Authentication**: Firebase Authentication
- **Hosting**: Firebase Hosting (optional)
- **Logging**: Firebase for logging user actions.

## System Architecture

This application is divided into four main modules:
1. **Admin Module**: Manages teachers and student registrations.
2. **Teacher Module**: Manages available time slots and appointments.
3. **Student Module**: Allows students to register, search for teachers, book appointments, and send messages.
4. **Logging System**: Logs each action performed by the user for auditing and tracking.

### Firebase Firestore Structure:
- **Teachers Collection**: Contains teacher details like name, department, subject.
- **Students Collection**: Contains student details like name, email, and approval status.
- **Appointments Collection**: Stores appointment details such as student ID, teacher ID, date, time, and status.
- **Messages Collection**: Stores messages exchanged between students and teachers.
- **Available Slots Collection**: Stores available slots for each teacher.

## Setup Instructions

### Prerequisites
- A **Firebase account**.
- **Firebase project** with Firestore enabled.

### Steps to Set Up:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/student-teacher-booking-appointment.git
   cd student-teacher-booking-appointment
