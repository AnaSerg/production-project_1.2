import { useTranslation } from 'react-i18next';

const InterviewPage = () => {
    const { t } = useTranslation('interview');

    return (
        <div>
            {t('Интервью')}
        </div>
    );
};

export default InterviewPage;
