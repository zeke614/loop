// import { useEffect, useState } from "react";

// export const useDarkMode = () => {
//   // Initialize with a default value to prevent flash
//   const [isDark, setIsDark] = useState(() => {
//     // Check localStorage during initial render (SSR compatible)
//     if (typeof window !== "undefined") {
//       const savedTheme = localStorage.getItem("theme");
//       if (savedTheme) {
//         return savedTheme === "dark";
//       }

//       // If no saved theme, check system preference
//       const prefersDark = window.matchMedia(
//         "(prefers-color-scheme: dark)",
//       ).matches;
//       return prefersDark;
//     }
//     return false; // Default for SSR
//   });

//   useEffect(() => {
//     // Apply the theme class immediately
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }

//     // Save to localStorage
//     localStorage.setItem("theme", isDark ? "dark" : "light");
//   }, [isDark]);

//   // Listen for system theme changes
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

//     const handleChange = (e: MediaQueryListEvent) => {
//       // Only change if user hasn't manually set a preference
//       const savedTheme = localStorage.getItem("theme");
//       if (!savedTheme) {
//         setIsDark(e.matches);
//       }
//     };

//     // Modern browsers
//     mediaQuery.addEventListener("change", handleChange);

//     // Cleanup
//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDark((prev) => !prev);
//   };

//   return [isDark, toggleDarkMode] as const;
// };
