import {classNames} from "shared/lib/classNames/classNames";
import {FC} from "react";
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import MoonIcon from 'shared/assets/icons/toggle-switcher-dark.svg';
import SunIcon from 'shared/assets/icons/toggle-switcher-light.svg';
import {Button} from "shared/ui/Button";
import {ThemeButton} from "shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button theme={ThemeButton.EMPTY} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.Light ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
};