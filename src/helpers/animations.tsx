import posed from 'react-pose';

export type Length = number | string;

export interface FadeInProps {
  delayIn?: Length,
  delayOut?: Length,
  duration?: Length,
}

export const FadeIn = posed.div({
  exit: {
    opacity: 0,
    delay: ({ delayOut }: FadeInProps) => {
      return delayOut || 0
    },
    transition: ({ duration }: FadeInProps) => ({
      duration: duration || 300,
    }),
  },

  enter: {
    opacity: 1,
    delay: ({ delayIn }: FadeInProps) => delayIn || 0,
    transition: ({ duration }: FadeInProps) => ({
      duration: duration || 300,
    })
  }
});