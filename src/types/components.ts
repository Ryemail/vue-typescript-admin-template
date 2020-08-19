export declare namespace _Components {
    interface TableProps {
        url: string;
        limit?: number;
        page?: number;
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
