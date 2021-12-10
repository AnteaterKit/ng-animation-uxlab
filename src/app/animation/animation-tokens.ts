import { AnimationOptions } from "@angular/animations";
import { inject, InjectionToken } from "@angular/core";

export const ANIMATIONS_DURATION = new InjectionToken<number>(
    'Duration of animations in ms',
    {
        factory: () => 300,
    },
);
