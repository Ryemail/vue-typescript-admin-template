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

export interface DesignEditor<T> {
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
    background: string;
    color: string;
    icon: string;
    text: string;
    height: number;
    wrapable: 1 | 0;
    scrollable: 1 | 0;
    mode: 'none' | 'link' | 'closeable';
}

export interface SearchProps {
    keywords: string;
    style: 'square' | 'radius'; // 样式 square radius arc
    align: 'left' | 'center' | 'right';
    background: string;
}

export interface CarouselProps {
    list: { url: string; img: string }[];
    interval: number;
    color: string;
    height: number | 'auto';
    shape: 'round' | 'square';
    position: 'in' | 'out' | 'none';
    showIndicators: true;
}

export interface PictureWindowProps {
    list: { url: string; img: string }[];
    marginX: number;
    marginY: number;
    layout: 'column-2' | 'column-3' | 'column-4' | 'showcase'; // 布局方式
    background: string; // 背景颜色
}
