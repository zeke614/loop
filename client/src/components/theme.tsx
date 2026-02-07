import {
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

type Theme = "system" | "light" | "dark";

interface ThemeSwitchProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export default function ThemeSwitch({ theme, setTheme }: ThemeSwitchProps) {
  const baseClasses =
    "p-1.5 rounded-full transition-colors flex items-center justify-center";

  const activeClasses =
    "bg-gray-200 text-gray-900 dark:bg-gray-500 dark:text-gray-100";

  const inactiveClasses =
    "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100";

  return (
    <div className="flex justify-center items-center">
      <div className="flex w-fit justify-center items-center gap-0.5 bg-gray-100 dark:bg-[#1e1e1e] rounded-2xl my-8 p-1 shadow-sm">
        <button
          aria-label="Use system theme"
          onClick={() => setTheme("system")}
          className={`${baseClasses} ${
            theme === "system" ? activeClasses : inactiveClasses
          }`}
        >
          <ComputerDesktopIcon className="h-4 w-4" />
        </button>

        <button
          aria-label="Use light theme"
          onClick={() => setTheme("light")}
          className={`${baseClasses} ${
            theme === "light" ? activeClasses : inactiveClasses
          }`}
        >
          <SunIcon className="h-4 w-4" />
        </button>

        <button
          aria-label="Use dark theme"
          onClick={() => setTheme("dark")}
          className={`${baseClasses} ${
            theme === "dark" ? activeClasses : inactiveClasses
          }`}
        >
          <MoonIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
