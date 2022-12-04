import { animate, style, transition } from '@angular/animations';

export const SlideInOutAnimation = [
  transition(
    ':enter',
    [
      style({height: 0, opacity: 0}),
      animate('.2s ease-out',
        style({height: '*', opacity: 1}))
    ]
  ),
  transition(
    ':leave',
    [
      style({height: '*', opacity: 1}),
      animate('.2s ease-in',
        style({height: 0, opacity: 0}))
    ]
  )
];
