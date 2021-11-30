import { animate, animation, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

const TRANSITION = '{{duration}}ms cubic-bezier(0.59, 0.32, 0.38, 1.13)';
const DURATION = {params: {duration: 300}};

export const fadeExplainMotion: AnimationTriggerMetadata = trigger('fadeExplainMotion', [
  transition(
    ':enter',
    animation([
      style({
        transform: 'translate(25%,0)',
        backgroundColor: '#fafafa',
        height: '30px'
      }),
      animate(
        TRANSITION,
        style({
          transform: 'translate(0)',
          height: '82px'
        })
      ),
    ]),
    DURATION
  ),
  transition(
    '* => void',
    animation([
      style({
        backgroundColor: '#fafafa',
        height: '82px'
      }),
      animate(
        '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
        style({
          transform: 'translate(-25%,0)',
          height: '82px'
        })
      ),
    ])
  )
]);


export const fadeExplainEditMotion: AnimationTriggerMetadata =
  trigger('fadeEdit', [
    state('false', style({ height: '82px' })),
    state('true', style({  height: '80px' })),
    transition('false => true', animate('100ms ease-in')),
    transition('true => false', animate('100ms ease-out'))
]);