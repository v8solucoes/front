import { animate, state, style, transition, trigger } from "@angular/animations";

export const Animates = [
 
  trigger('navTop', [

    state('true', style({
      marginTop: '*',
      overflow: 'hidden'
    })),
    state('false', style({
      marginTop: '-70px',
      overflow: 'hidden'
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
      margin: '*',
      overflow: 'hidden'
    })),
    state('false', style({
      height: '0px',
      overflow: 'hidden'
    })),
    transition('* => true', [
      animate('0.3.5s')
    ]),
    transition('false => *', [
      animate('0.3.5s')
    ]),

  ]),
]