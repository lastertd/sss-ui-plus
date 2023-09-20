export type MessageTypes = 'success' | 'info' | 'warning' | 'danger';

export type MessageTriggerTypes = 'system' | 'esc' | 'mark' | 'icon';

export type ElementSizes = 'small' | 'normal' | 'large';

export type FloatingTrigger = 'hover' | 'click' | 'focus' | 'clickToOpen' | 'unset';

export type MaybeHTMLElement = HTMLElement | undefined | null;


type fade = 'fadeDown' | 'fadeRight' | 'fadeUp' | 'fadeLeft';
type fadeModifier = 'half' | 'completely';

type scale = 'scaleVertical' | 'scaleHorizontal'
type scaleModifier = 'center' | 'start' | 'end';

export type Transition =
    `s-transition-${fade}`
    | `s-transition-fade`
    | `s-transition-${fade}--${fadeModifier}`
    | 's-transition-none'
    | `s-transition-${scale}`
    | `s-transition-${scale}--${scaleModifier}`
    | `s-transition-scale`
    | `s-transition-scale--${fadeModifier}`
    ;


export type ComponentTag = string | 'span' | 'div';

export type Expression = 'inline' | 'block' | 'inline-block';

export type AnyFunction = (...args: any) => any


