import { AnimationOptions } from "@angular/animations";
import { inject, InjectionToken } from "@angular/core";

export const ANIMATIONS_DURATION = new InjectionToken<number>(
    'Duration of animations in ms',
    {
        factory: () => 300,
    },
);

export const ANIMATION_OPTIONS = new InjectionToken<AnimationOptions>(
    'Options for animations',
    {
        factory: () => ({
            params: {
                duration: inject(ANIMATIONS_DURATION),
            },
        }),
    },
);