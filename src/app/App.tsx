import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";
import {useTranslation} from "react-i18next";

const Component = () => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    }

    return (
        <>
            <h1>{t('Привет')}</h1>
            <button onClick={toggle}>{t('Перевод')}</button>
        </>
    )
}

const App = () => {
    const {theme} = useTheme();

    return (
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback="">
                    <div className="content-page">
                        <Component />
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </div>
    );
};

export default App;