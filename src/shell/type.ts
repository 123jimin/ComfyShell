import { type WidgetDef } from "./widget";

export interface ShellColumnDef {
    type: 'column';
    children: Array<ShellRowDef | WidgetDef>;
}

export interface ShellRowDef {
    type: 'row';
    children: Array<ShellColumnDef | WidgetDef>;
}

export type ShellDef = ShellRowDef | ShellColumnDef;