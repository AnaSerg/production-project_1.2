import {useTranslation} from "react-i18next";

const MaterialsPage = () => {
    const { t } = useTranslation('materials');

    return (
        <div>
            {t('Материалы')}
        </div>
    );
};

export default MaterialsPage;