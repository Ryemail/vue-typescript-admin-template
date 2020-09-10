export interface DesignNavItem {
    name: string;
    icon?: string;
    title: string;
    editor: string;
    params?: object;
}

export interface DesginNavs {
    title: string;
    list: DesignNavItem[];
}

export interface DesginModule<T = object> {
    active: boolean;
    name: string;
    icon?: string;
    title: string;
    editor: string;
    params?: object;
}

export interface DesignEditor<T = object> {
    data: DesginModule<T>;
    $index: number;
}
