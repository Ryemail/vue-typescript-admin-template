export interface DesignNavItem {
    name: string;
    icon?: string;
    title: string;
    editor: string;
    params?: any;
}

export interface DesginNavs {
    title: string;
    list: DesignNavItem[];
}

export interface DesginComponent extends DesignNavItem {
    active?: boolean;
}

export interface DesignParams<T = any> {
    $index: number;
    data: T;
}
