import { animate, query, stagger, style, transition } from '@angular/animations';

export const ListAnimation = [
  transition('* => *', [
    query(':leave', [
      stagger(100, [
        animate('0.2s', style({opacity: 0, width: 0}))
      ])
    ], {optional: true}),
    query(':enter', [
      style({opacity: 0}),
      stagger(100, [
        animate('0.2s', style({opacity: 1, width: '*'}))
      ])
    ], {optional: true})
  ])
];
