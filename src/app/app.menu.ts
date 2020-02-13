import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'gauge',
        route: '/authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'flag',
        route: null,
        submenu: [
            {
                text: 'Top 3',
                icon: 'flag',
                route: '/authenticated/country-list/3',
                submenu: null
            },
            {
                text: 'Top 5',
                icon: 'flag',
                route: '/authenticated/country-list/5',
                submenu: null
            },
            {
                text: 'All',
                icon: 'flag',
                route: '/authenticated/country-list/0',
                submenu: null
            }
        ],
    },
    {
        text: 'Maintenance',
        icon: 'wrench',
        route: 'settings',
        submenu: [
            {
                text: 'Country Maint',
                icon: 'list-bullet',
                route: '/authenticated/country-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'cog',
                route: '/authenticated/settings',
                submenu: null
            }
        ]
    }
];