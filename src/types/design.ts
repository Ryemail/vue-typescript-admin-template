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

export interface ImageProps {
    list: { url: string; img: string }[];
    marginX: number;
    marginY: number;
    background: string; // 指示点颜色
}
export interface VideoProps {
    url: string;
    poster: string;
    height: number;
    marginY: number;
    auto: number;
}

export interface AnnouncementProps {
    marginY: number;
    background: string;
    color: string;
    icon: string;
    text: string;
}
