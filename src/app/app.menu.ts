import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'gauge',
        route: 'dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'flag',
        route: 'countries',
        submenu: [
            {
                text: 'Select',
                icon: 'down-open',
                route: null,
                submenu: [
                    {
                        text: 'USA',
                        icon: 'flag',
                        route: 'country-detail/USA',
                        submenu: null
                    },
                    {
                        text: 'India',
                        icon: 'flag',
                        route: 'country-detail/India',
                        submenu: null
                    },
                    {
                        text: 'Switzerland',
                        icon: 'flag',
                        route: 'country-detail/Switzerland',
                        submenu: null
                    }

                ]
            },
            {
                text: 'Top 3',
                icon: 'flag',
                route: 'country-list/3',
                submenu: null
            },
            {
                text: 'Top 5',
                icon: 'flag',
                route: 'country-list/5',
                submenu: null
            },
            {
                text: 'All',
                icon: 'flag',
                route: 'country-list/0',
                submenu: null
            }
        ],
    },
    {
        text: 'Settings',
        icon: 'wrench',
        route: 'settings',
        submenu: [
            {
                text: 'Country Maint',
                icon: 'list-bullet',
                route: 'country-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'cog',
                route: 'settings',
                submenu: null
            }
        ]
    }
];