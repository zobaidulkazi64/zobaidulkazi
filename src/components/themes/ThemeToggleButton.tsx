import { ThemeSwitcher } from "./ThemeSwitcher";

const ThemeToggleButton: React.FC = () => {
  return (
    <div className="fixed top-1 items-center mr-4 right-5 p-2">
      <ThemeSwitcher />
    </div>
  );
};

export default ThemeToggleButton;
