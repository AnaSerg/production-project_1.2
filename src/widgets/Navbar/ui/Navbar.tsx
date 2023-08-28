import {classNames} from "shared/lib/classNames/classNames";
import {FC} from "react";
import cls from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink";
import {AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink to={'/'}>Главная</AppLink>
            <AppLink to={'/tests'}>Тесты</AppLink>
            <AppLink to={'/projects'}>Проекты</AppLink>
            <AppLink to={'/interview'}>Пройти собеседование</AppLink>
            <AppLink to={'/materials'}>Материалы</AppLink>
        </div>
    );
};