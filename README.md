# Immersive 3D Auth System

An experimental, high-performance authentication interface built with **Next.js** and **Three.js (WebGPU)**.

🔗 **[Live Demo](https://mr3dweb.github.io/immersive-auth-system/)**

## 📖 About The Project

This project is a creative exploration of modern web frontend technologies, focusing entirely on **User Interface (UI)** and **User Experience (UX)** rather than backend logic.

The main goal was to move away from boring, static login forms and create an engaging, interactive 3D experience. It features seamless camera transitions, procedural shaders, and a glassmorphism aesthetic.

> **Note:** The "Dashboard" included in this project is a mock-up designed to demonstrate the successful login transition. It is not a fully functional professional dashboard.

## ✨ Key Features

*   **WebGPU Powered:** Utilizes the experimental `WebGPURenderer` in Three.js for next-gen performance.
*   **Procedural Background:** A dynamic shader written in **TSL** (Three Shading Language), reacting to mouse movement and authentication states.
*   **Seamless Transitions:** Smooth camera movements and UI fading between Login, Sign Up, and Dashboard views.
*   **Reactive State:** Instant visual feedback for errors, success, and loading states.

## 🛠️ Tech Stack & Tools

This project leverages a cutting-edge stack to achieve its visual effects. Here is what each tool handles:

### Core Framework
*   **[Next.js 15](https://nextjs.org/):** Used for project structure, routing, and optimized static export (`output: 'export'`) for hosting.
*   **[TypeScript](https://www.typescriptlang.org/):** Ensures type safety across the application, especially for 3D props and state management.

### 3D & Graphics
*   **[Three.js](https://threejs.org/) & [React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber):** R3F allows us to build the 3D scene declaratively using React components.
*   **[TSL (Three Shading Language)](https://github.com/mrdoob/three.js/wiki/Three-Shading-Language):** Used instead of GLSL to create the background shader nodes. TSL is the modern way to write shaders compatible with WebGPU.

### Animation & State
*   **[GSAP (GreenSock)](https://gsap.com/):** The industry standard for high-performance animations. It handles the complex interpolation of camera positions and shader uniforms (e.g., the transition from "idle" to "tunnel" effect).
*   **[Zustand](https://zustand-demo.pmnd.rs/):** A small, fast state management library. It controls the global flow of the app (switching views between Login/Signup/Dashboard and triggering animation states).

### Styling
*   **CSS Modules:** Used for scoping styles to components, particularly for the HTML overlays (Forms and Dashboard) to achieve the glassmorphism effect.
