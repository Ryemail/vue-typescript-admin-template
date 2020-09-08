export interface DesignNavItem {
    name: string;
    icon: string;
    title: string;
}

export interface DesginNavs {
    title: string;
    list: DesignNavItem[];
}

export interface DesginComponent {
    active: boolean;
    nav: DesignNavItem;
}
