import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar';
import React, { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme();

    // для тестирование errorBoundary
    const [number, setNumber] = React.useState(0);

    // для тестирование errorBoundary
    React.useEffect(() => {
        setNumber(Math.floor(Math.random() * 10));
        if (number === 2) {
            throw new Error();
        }
    }, [number]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
