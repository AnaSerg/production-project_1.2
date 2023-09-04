import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import NotFoundImg from '../assets/404.svg';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <div className={cls.innerContainer}>
                <div><NotFoundImg /></div>
                <h1 className={cls.title}>{t('Такой страницы не существует')}</h1>
                <p className={cls.subtitle}>{t('Описание страницы 404')}</p>
                <Button
                    className="round"
                    theme={ThemeButton.ROUND}
                    onClick={() => navigate('/')}
                />
            </div>
        </div>
    );
};
