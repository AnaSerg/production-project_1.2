import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { AppLink } from 'shared/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/tests">Тесты</AppLink>
        <AppLink to="/projects">Проекты</AppLink>
        <AppLink to="/interview">Пройти собеседование</AppLink>
        <AppLink to="/materials">Материалы</AppLink>
    </div>
);
