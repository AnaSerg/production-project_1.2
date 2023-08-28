import {classNames} from "shared/lib/classNames/classNames";
import {FC, useState} from "react";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {Navbar} from "widgets/Navbar";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [hidden, setHidden] = useState(false);

    const onToggle = () => {
        setHidden(prev => !prev);
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.hidden]: hidden}, [className])}>
            {/* <Navbar /> */}
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/* LangSwitcher */}
            </div>
        </div>
    );
};