import React from 'react';
import * as Icon from '@material-ui/icons';

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <Icon.Home />,
        class: 'nav-text',
    },{
        title: "Libros",
        path: '/books',
        icon: <Icon.MenuBook />,
        class: 'nav-text',
    },{
        title: "Configuracion",
        path: '/settings',
        icon: <Icon.Settings />,
        class: 'nav-text',
    },{
        title: "Salir",
        path: '/exit',
        icon: <Icon.ExitToApp />,
        class: 'nav-text',
    },
]