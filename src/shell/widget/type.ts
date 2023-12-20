export interface BaseWidgetDef<T = unknown> {
    text: string;
    
    /** ID of the node this widget is targeting. */
    target?: string;

    /** Default value of the widget. */
    default_value?: T;

    /** Current value of the widget. */
    value?: T;
}

export interface ButtonWidgetDef extends BaseWidgetDef<never> {
    type: 'button';
}

export interface CheckboxWidgetDef extends BaseWidgetDef<boolean> {
    type: 'checkbox';
}

export interface ImageWidgetDef extends BaseWidgetDef<never> {
    type: 'image';
}

export interface NumberWidgetDef extends BaseWidgetDef<number> {
    type: 'number';
}

export interface RangeWidgetDef extends BaseWidgetDef<number> {
    type: 'range';
}

export interface TextWidgetDef extends BaseWidgetDef<string> {
    type: 'text';
}

export type WidgetDef = ButtonWidgetDef | CheckboxWidgetDef | ImageWidgetDef | NumberWidgetDef | RangeWidgetDef | TextWidgetDef;