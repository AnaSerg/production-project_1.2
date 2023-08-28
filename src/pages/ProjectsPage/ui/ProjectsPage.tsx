import {useTranslation} from "react-i18next";

const ProjectsPage = () => {
    const { t } = useTranslation('projects');

    return (
        <div>
            {t('Проекты')}
        </div>
    );
};

export default ProjectsPage;