export declare namespace DomTable {
    interface Props {
        url: string;
        query?: object;
        column: Column[];
    }

    interface Column {
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
}
