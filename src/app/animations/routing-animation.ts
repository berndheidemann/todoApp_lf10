import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition(
        ':enter', [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))
        ]
    ),
    transition(
        ':leave', [
            style({ 'opacity': 1 }),
            animate('1000ms', style({ 'opacity': 0, 'width': '50%' }))
        ]
    )]
);
