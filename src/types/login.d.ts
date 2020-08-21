export interface Attr {
    message: string;
    type?: 'error' | 'info' | 'success' | 'warning';
}
export interface Rules {
    [key: string]: Attr[];
}

export interface LoginForm {
    system: string;
    name: string;
    password: string;
    [key: string]: string;
}
