import { FunctionalComponent } from "preact";
import { type ShellDef } from "./type";
import { Widget } from "./widget";

export interface ShellProps {
    def: ShellDef;
}

export const Shell: FunctionalComponent<ShellProps> = ({def}) => {
    switch(def.type) {
        case 'row':
            return <div class="shell-container shell-row"></div>;
        case 'column':
            return <div class="shell-container shell-column"></div>;
        default:
            return <Widget def={def}></Widget>;
    }
};