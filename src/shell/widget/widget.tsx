import { FunctionalComponent } from "preact";
import { type WidgetDef } from "./type";

export interface WidgetProps {
    def: WidgetDef;
}

export const Widget: FunctionalComponent<WidgetProps> = (props) => {
    switch(props.def.type) {}

    // Mockup
    return <div class="widget">Widget {props.def.type}</div>;
}