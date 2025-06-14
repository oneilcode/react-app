import { THEME_STORAGE } from "../../constants";
import { useTheme } from "../../hooks/useTheme";
import cls from "./ThemeToggler.module.css";

export const ThemeToggler = () => {
const { theme, setTheme } = useTheme()

const onChangeHandler = (e) => {
const updatedTheme = e.target.checked === false ? 'light' : 'dark'
  setTheme(updatedTheme)
  
  localStorage.setItem(THEME_STORAGE, updatedTheme)
}

  return (
    <div className={cls.toggle} >
      <input type="checkbox" onChange={onChangeHandler} checked={theme === 'dark'}/>
      <label></label>
    </div>
  );
};
