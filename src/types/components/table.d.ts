import { DomComponent } from './components';

export interface DomTableColumn {
    label?: string;
    prop?: string;
    width?: number;
    type?: string;
    fixed?: 'left' | 'right';
    align?: string;
    minWidth?: number;
    slot?: string;
    showOverflowTooltip?: boolean;
}

export interface DomTableProps {
    url: string;
    query?: object;
    column: DomTableColumn[];
}

export declare class DomTable extends DomComponent {
    props: DomTableProps;

    limit: number;

    page: number;

    pageChange: (page?: number) => void;

    reload: () => void;
}
