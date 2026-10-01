# Islah Online Madrasa 🕌

A modern, responsive, and beautifully designed web application for **Islah Online Madrasa** — an online Islamic educational institution providing structured Quran recitation with Tajweed, Hifz, authentic Islamic studies, and Arabic language for children globally.

---

## 🌟 Pages & Key Features

- **Home (`/`)**: Dynamic landing page featuring a floating capsule navigation, trust strip, "Why Islah" interactive card slider, course catalog, teacher profiles, student performance gallery, and parent testimonials.
- **About Us (`/about`)**: Our Story, 9-year journey, educational vision, mission statement, and core Islamic values.
- **Our Curriculum (`/curriculum`)**: Structured syllabus covering 6 core subject areas, 3-stage age-appropriate learning roadmap, learning outcomes, and curriculum FAQ.
- **Teaching Approach (`/teaching-approach`)**: "Learn, Understand & Implement" 3-step pedagogical philosophy, interactive online classroom methods, and Akhlaaq character cultivation.
- **Workshops & Activities (`/workshops`)**: Weekend intensives (Ramadan, Seerah, Digital Ethics), student presentations, recitation competitions, and photo/video highlight gallery.
- **Student Achievements (`/student-achievements`)**: Sample recitation audio players, Seerah & Hadith presentation showcases, milestone awards (Noorani Qaida & Hifz), and verified parent feedback.
- **Admissions & Contact (`/admissions`)**: 4-step enrolment guide, course specifications, interactive Admission Enquiry Form with direct WhatsApp integration, and admissions FAQ.

---

## 🛠️ Technology Stack

- **Frontend**: [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Routing**: Zero-dependency, lightweight client-side router (`src/router`)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   cd islah-online-madrasa
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port displayed in your terminal) to view the application.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```text
islah-online-madrasa/
├── public/
│   ├── assets/img/            # Logos and graphic assets
│   └── favicon / svg icons
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── InnerBanner.tsx    # Curved brand header for inner pages
│   │   ├── Navbar.tsx         # Floating capsule navigation
│   │   ├── Footer.tsx         # Editorial footer
│   │   ├── HeroSection.tsx
│   │   ├── CoursesSection.tsx
│   │   └── ...
│   ├── pages/                 # Dedicated route pages
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── CurriculumPage.tsx
│   │   ├── TeachingApproachPage.tsx
│   │   ├── WorkshopsPage.tsx
│   │   ├── StudentAchievementsPage.tsx
│   │   └── AdmissionsPage.tsx
│   ├── router/                # Client-side router (BrowserRouter, Routes, Route, Link)
│   ├── data/                  # Madrasa content, courses, teachers, and testimonials
│   ├── App.tsx                # Main app layout and route configuration
│   └── main.tsx               # React entrypoint
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License

All rights reserved © Islah Online Madrasa.
