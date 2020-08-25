export type FormItemType = 'input' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'switch' | 'date' | 'time';

type Resolve = (data: DomForm.Option[]) => void;

type lazyLoad = (resolve: Resolve) => void;

export declare namespace DomForm {
    interface Config {
        type: FormItemType;
        prop: string;
        label?: string;
        labelWidth?: number;
        placeholder?: string;
        option?: Option[];
        lazyLoad?: lazyLoad;
    }

    interface Option {
        id: number | string;
        name: string;
    }
}
