import {classNames} from "shared/lib/classNames/classNames";
import {FC} from "react";
import cls from './LangSwitcher.module.scss';
import {Button} from "shared/ui/Button";
import {ThemeButton} from "shared/ui/Button/ui/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    }

    return (
        <Button theme={ThemeButton.EMPTY} className={classNames(cls.LangSwitcher, {}, [className])} onClick={toggleLanguage}>
            {t('Перевод')}
        </Button>
    );
};