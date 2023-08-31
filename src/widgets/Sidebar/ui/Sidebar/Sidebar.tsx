import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
// import { Navbar } from 'widgets/Navbar';
import { Button } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [hidden, setHidden] = useState(false);

    const onToggle = () => {
        setHidden((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.hidden]: hidden }, [className])}>
            {/* <Navbar /> */}
            <Button onClick={onToggle}>Сдвинуть</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
