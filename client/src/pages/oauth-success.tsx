// import { useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useAuth } from "../contexts/authContext";

// export default function OAuthSuccess() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [error, setError] = useState("");

//   useEffect(() => {
//     console.log("OAuthSuccess component mounted");
//     console.log(
//       "URL search params:",
//       Object.fromEntries(searchParams.entries())
//     );

//     const token = searchParams.get("token");
//     const userParam = searchParams.get("user");
//     const errorParam = searchParams.get("error");

//     console.log("Token:", token ? "Present" : "Missing");
//     console.log("User param:", userParam ? "Present" : "Missing");

//     if (errorParam) {
//       console.error("OAuth error:", errorParam);
//       setError("OAuth authentication failed. Please try again.");
//       setTimeout(() => navigate("/login"), 3000);
//       return;
//     }

//     if (token && userParam) {
//       try {
//         const user = JSON.parse(decodeURIComponent(userParam));
//         console.log("Parsed user:", user);

//         login(user, token);
//         console.log("Login successful, redirecting to home...");

//         // Redirect to home after successful login
//         setTimeout(() => navigate("/"), 1000);
//       } catch (error) {
//         console.error("Error parsing user data:", error);
//         setError("Invalid authentication data. Please try again.");
//         setTimeout(() => navigate("/login"), 3000);
//       }
//     } else {
//       console.error("Missing token or user data");
//       setError("Missing authentication data. Please try again.");
//       setTimeout(() => navigate("/login"), 3000);
//     }
//   }, [searchParams, login, navigate]);

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="text-center">
//           <div className="text-red-500 text-4xl mb-4"></div>
//           <p className="text-lg text-red-600">{error}</p>
//           <p className="text-gray-500 mt-2">Redirecting to login...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="text-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-t-[#04aa6d] mx-auto"></div>
//         <p className="mt-4 text-lg">Completing sign in...</p>
//         <p className="text-sm text-gray-500 mt-2">
//           You will be redirected automatically
//         </p>
//       </div>
//     </div>
//   );
// }
