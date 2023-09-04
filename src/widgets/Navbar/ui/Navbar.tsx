import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink to="/">Главная</AppLink>
            <AppLink to="/tests">{t('Тесты')}</AppLink>
            <AppLink to="/projects">{t('Проекты')}</AppLink>
            <AppLink to="/interview">{t('Пройти собеседование')}</AppLink>
            <AppLink to="/materials">{t('Материалы')}</AppLink>
        </div>
    );
};
