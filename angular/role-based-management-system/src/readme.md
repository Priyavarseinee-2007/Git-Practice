# Role-Based Dashboard Application (Angular)

## 📌 Project Overview
This is a role-based dashboard application built using Angular standalone components.  
The application demonstrates routing, route guards, shared state management, and conditional UI rendering based on user roles.

## 🚀 Features
- Angular standalone components (no NgModules)
- Login page with form validation
- Role-based login logic (Admin / Manager / Employee)
- Dashboard protected using route guards
- Separate dashboards for each role
- Shared state management using a service
- Role persistence using localStorage
- Logout / Change Role functionality
- Active navigation highlighting

## 👥 Role Logic
- **admin@test.com** → Admin dashboard  
- **manager@test.com** → Manager dashboard  
- Any other email → Employee dashboard  

## 🛠️ Tech Stack
- Angular
- TypeScript
- HTML & CSS
- Angular Router
- LocalStorage

## ▶️ How to Run the Project
1. Clone the repository  
2. Install dependencies  
   ```bash
   npm install
