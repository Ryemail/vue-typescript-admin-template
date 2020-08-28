import { DomComponent } from './components';

type Resolve = (data: DomFormOption[]) => void;

type lazyLoad = (resolve: Resolve) => void;

export type FormItemType = 'input' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'switch' | 'date' | 'time';

export interface DomFormOption {
    id: number | string;
    name: string;
}

export interface DomFormConfig {
    type: FormItemType;
    prop: string;
    label?: string;
    labelWidth?: number;
    placeholder?: string;
    option?: DomFormOption[];
    lazyLoad?: lazyLoad;
}

export declare class DomForm<T = boolean> extends DomComponent {
    reform: string;

    inline: boolean;

    showMessage: boolean;

    hideRequiredAsterisk: boolean;

    footer: boolean;

    labelWidth: number;

    config: DomFormConfig[];

    form: object[];

    rules: object[];

    onSubmit: () => Promise<T>;

    onReset: () => void;
}
