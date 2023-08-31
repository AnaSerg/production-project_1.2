import { useTranslation } from 'react-i18next';

const TestsPage = () => {
    const { t } = useTranslation('tests');

    return (
        <div>
            {t('Тесты')}
        </div>
    );
};

export default TestsPage;
