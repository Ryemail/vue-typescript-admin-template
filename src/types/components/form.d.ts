import { DomComponent } from './components';

type Resolve = (data: DomFormOption[]) => void;

// type lazyLoadParams = DomFormConfig extends DomFormConfig {
//     row:{[key:string]:any}
// }

export interface lazyLoadParams<T = object> extends DomFormConfig {
    row: T;
}

type lazyLoad = (resolve: Resolve, params?: lazyLoadParams) => void;

export type ButtonType =
    | 'button'
    | 'button-primary'
    | 'button-success'
    | 'button-info'
    | 'button-warning'
    | 'button-danger';

export type FormItemType = 'input' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'switch' | 'date' | 'time';

export interface DomFormOption {
    id: number | string;
    name: string;
}

export interface DomFormConfig {
    type: FormItemType | ButtonType;
    prop: string;
    label?: string;
    labelWidth?: number;
    placeholder?: string; // 占位符
    option?: DomFormOption[];
    lazyLoad?: lazyLoad; //数据是否懒加载
}

export declare class DomForm<T = boolean> extends DomComponent {
    reform: string;

    inline: boolean;

    showMessage: boolean;

    hideRequiredAsterisk: boolean;

    labelWidth: number;

    config: DomFormConfig[];

    form: object[];

    rules: object[];

    onSubmit: () => Promise<T>;

    onReset: () => void;
}
