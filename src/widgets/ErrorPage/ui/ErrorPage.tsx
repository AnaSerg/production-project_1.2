import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './ErrorPage.module.scss';

export const ErrorPage = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <div className={classNames(cls.ErrorPage, {}, [theme])}>
            <div className={cls.container}>
                <h1 className={cls.title}>{t('Произошла ошибка')}</h1>
                <Button theme={ThemeButton.PRIMARY}>{t('Обновить страницу')}</Button>
            </div>
        </div>
    );
};
