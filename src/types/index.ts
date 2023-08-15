export type MessageTypes = 'success' | 'info'| 'warning' | 'danger';

export type MessageTriggerTypes =  'system' | 'esc' | 'mark' | 'icon';

export type ElementSizes = 'small' | 'normal' | 'large';

export type FloatingTrigger = 'hover' | 'click' | 'focus' | 'clickToOpen' | 'unset' ;

export type MaybeHTMLElement = HTMLElement | undefined | null;

export type Transition = String |
    'fade' |
    'down-fade' |
    'vertical-scroll' |
    'horizontal-scroll' |
    'scale' |
    'left-fade'|
    'right-fade'|
    'none';

export type ComponentTag = string | 'span' | 'div';

export type Expression = 'inline' | 'block' | 'inline-block';

