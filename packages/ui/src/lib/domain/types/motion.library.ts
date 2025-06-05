import type {
  HTMLMotionProps as ReactMotionHTMLAttributes,
  MotionProps as ReactMotionProps,
} from 'framer-motion';
import type {
  MotionHTMLAttributes as VueMotionHTMLAttributes,
  MotionProps as VueMotionProps,
} from 'motion-v';

export type { VueMotionHTMLAttributes };
export type { ReactMotionHTMLAttributes };

export type MotionElementPropsMap = {
  react: ReactMotionProps;
  vue: VueMotionProps;
};

export type VueMotionElementProps = MotionElementPropsMap['vue'];
