import {classNames} from "shared/lib/classNames/classNames";
import {FC} from "react";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    LIGHT = 'light',
    DARK = 'dark'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, theme = AppLinkTheme.DARK, className, children} = props;

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};