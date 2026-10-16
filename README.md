# AADHILA — Personal Portfolio

> **“Building the Web. Exploring Intelligence. Securing Tomorrow.”**

Welcome to the official repository for **AADHILA**, the personal technology portfolio of **Aadhila**.

Aadhila is an aspiring Cybersecurity & AI Professional and Frontend Developer, currently studying **Web Engineering at Mars Tech International Campus**. This portfolio showcases her skills, academic milestones, and web development projects with a unique luxury-tech aesthetic.

---

## 🎨 Luxury-Tech Aesthetic & Brand Identity

The website avoids generic templates and ordinary blue/purple gradients, using a curated luxury-tech color palette:

| Color Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Obsidian Black** | `#0B0D0C` | Primary dark background & base canvas |
| **Acid Lime** | `#C6F277` | Glowing accents, badges, buttons, indicators |
| **Warm Silver** | `#E6E8E4` | Crisp, legible primary typography |
| **Slate Grey** | `#777E78` | Subdued borders, metadata, structural framing |

---

## 🚀 Key Features

1. **Brand Identity & Respectful Avatar**: Custom geometric AADHILA wordmark and a respectful, professional digital illustration of Aadhila wearing an elegant black hijab with lime accents.
2. **Dynamic Typing Title**: Animated roles switching between *Aspiring Cybersecurity & AI Professional*, *Frontend Developer*, and *Web Engineering Student*. Respects `prefers-reduced-motion`.
3. **Transparent Skills Architecture**: Clearly distinguishes completed skills (*HTML, CSS, JavaScript, Bootstrap, jQuery, C Programming, Frontend Development*) from what she is currently mastering (*Web Engineering at Mars Tech*). Includes interactive filter tabs.
4. **Featured Projects with Modals**:
   - **University Website Design**: Independent collegiate academic concept inspired by Cambridge University architecture (with prominent academic disclaimer).
   - **Online Business Website**: Modern e-commerce storefront configured on WordPress.
5. **Education & Future Goals**:
   - **G.C.E. Ordinary Level (O/L) — Passed**
   - **Mars Tech International Campus** (Web Engineering)
   - **Future Goal**: Aspiring to pursue a **Bachelor of Information Technology (BIT)** at the **University of Colombo School of Computing (UCSC)**, subject to admission requirements.
   - **Future Focus**: Cybersecurity & Artificial Intelligence.
6. **Accessible Theme Switcher**: Instant Dark Mode and high-contrast Light Mode toggle with `localStorage` persistence.
7. **Transparent Contact System**: Real-time form validation with honest status notification explaining that automated server transmission is currently offline without a backend mail service, offering direct email links and pre-filled email client actions to `aadhila.tech@gmail.com`.
8. **Verified Channels Only**: Direct links to Email (`aadhila.tech@gmail.com`) and GitHub (`https://github.com/aadhila29`). No unverified social profiles.

---

## 📂 File Structure

```text
Portfolio/
├── index.html              # Main semantic HTML5 document
├── README.md               # Project documentation & setup instructions
├── css/
│   └── style.css           # Vanilla CSS luxury-tech design system & themes
├── js/
│   └── script.js           # Vanilla JavaScript for animations, theme, modals & form
└── images/
    ├── favicon.svg         # Geometric AADHILA vector icon
    ├── avatar.jpg          # Illustrated hijabi developer portrait (JPG)
    ├── avatar.png          # High-resolution PNG master asset
    ├── project-cambridge.jpg # Mockup preview for Cambridge-inspired design
    └── project-wordpress.jpg # Mockup preview for WordPress storefront
```

---

## 💻 How to Run the Website Locally

This project is built using vanilla web technologies (**HTML5, CSS3, JavaScript**), requiring no package manager or build step to run.

### Option 1: Direct File Opening (Simplest)
1. Navigate to the project directory in your file manager (`C:\Users\HP\OneDrive\Documents\Portfolio`).
2. Double-click [index.html](file:///c:/Users/HP/OneDrive/Documents/Portfolio/index.html) to open it in your default web browser (Edge, Chrome, Firefox, Brave, Safari).

### Option 2: VS Code Live Server
1. Open the `Portfolio` folder in Visual Studio Code.
2. Install the **Live Server** extension if not already installed.
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500`.

### Option 3: Python Local Server (If Python is installed)
Run the following command in PowerShell inside the `Portfolio` directory:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🔒 Technical Transparency Note

- **Contact Form**: The contact form features full client-side validation for all fields. Because no backend API or serverless mail endpoint is currently deployed, the form transparently informs the user that automated delivery is offline, allowing them to copy the text or launch their email client with pre-filled fields to `aadhila.tech@gmail.com`.