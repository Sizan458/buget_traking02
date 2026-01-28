# Expense Tracker App

A modern expense tracking application that helps users manage budgets, track expenses, and clearly understand their spending habits.

The app is built with a focus on clean UI, secure authentication, and real-time budget insights. Each user has a private workspace where budgets and expenses are safely stored and accessible only after authentication.

## Key Features

- Secure authentication and user management using Clerk  
- Protected routes to ensure user data privacy  
- Dashboard summary showing total budget, total spend, and active budgets  
- Create, update, and manage multiple budgets  
- Track expenses under individual budgets  
- Real-time remaining budget calculation  
- Visual charts for spending analysis  
- Fully responsive layout with sidebar navigation  

## Screenshots

![Expense Tracker Dashboard](https://i.ibb.co.com/hb23yhJ/screencapture-buget-traking02-vercel-app-2026-01-28-05-51-01.png)

## Authentication Flow (Clerk)

- Users sign up or sign in using Clerk  
- After authentication, users are redirected to the dashboard  
- All budget and expense pages are protected routes  
- Unauthenticated users are redirected to the sign-in page  
- Each user only has access to their own budgets and expenses  

This ensures security, data isolation, and a smooth user experience.

## Tech Stack

- **Frontend:** Next.js (App Router)  
- **Styling:** Tailwind CSS  
- **Authentication:** Clerk  
- **Database:** Drizzle ORM  
- **Backend:** Node.js  
- **Charts:** Bar chart visualization for budget activity  

## Getting Started

### Prerequisites

- Node.js  
- npm or yarn  
- Clerk account  

### Installation

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
npm install
