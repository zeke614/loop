// // import { useEffect, useState } from "react";

// // export type Theme = "system" | "light" | "dark";

// // export function useTheme() {
// //   const [theme, setTheme] = useState<Theme>(() => {
// //     return (localStorage.getItem("theme") as Theme) || "system";
// //   });

// //   useEffect(() => {
// //     const root = document.documentElement;
// //     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

// //     function applyTheme(t: Theme) {
// //       if (t === "dark") {
// //         root.classList.add("dark");
// //       } else if (t === "light") {
// //         root.classList.remove("dark");
// //       } else {
// //         root.classList.toggle("dark", prefersDark.matches);
// //       }
// //     }

// //     applyTheme(theme);
// //     localStorage.setItem("theme", theme);
// //   }, [theme]);

// //   return { theme, setTheme };
// // }

// import { useEffect, useState } from "react";

// export type Theme = "system" | "light" | "dark";

// export function useTheme() {
//   const [theme, setTheme] = useState<Theme>(() => {
//     return (localStorage.getItem("theme") as Theme) || "system";
//   });

//   useEffect(() => {
//     const root = document.documentElement;
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

//     const applyTheme = () => {
//       const isDark =
//         theme === "dark" || (theme === "system" && mediaQuery.matches);

//       root.classList.toggle("dark", isDark);
//     };

//     applyTheme();
//     localStorage.setItem("theme", theme);

//     // Listen to system changes ONLY when theme === "system"
//     const handler = () => {
//       if (theme === "system") applyTheme();
//     };

//     mediaQuery.addEventListener("change", handler);

//     return () => mediaQuery.removeEventListener("change", handler);
//   }, [theme]);

//   return { theme, setTheme };
// }
