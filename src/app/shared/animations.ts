import { animate, state, style, transition, trigger } from "@angular/animations";

export const Animates = [
 
  trigger('navTop', [

    state('true', style({
      marginTop: '*',
    })),
    state('false', style({
      marginTop: '-70px',
    })),
    transition('* => true', [
      animate('0.3.5s')
    ]),
    transition('false => *', [
      animate('0.3.5s')
    ]),

  ]),

  trigger('navFooter', [

    state('true', style({
      height: '*',
    })),
    state('false', style({
      height: '0px',
    })),
    transition('* => true', [
      animate('0.3.5s')
    ]),
    transition('false => *', [
      animate('0.3.5s')
    ]),

  ]),
]