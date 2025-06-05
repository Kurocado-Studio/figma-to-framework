import React, { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import {
  cardBodyClasses,
  cardComponentWrapperClasses,
  cardFooterClasses,
  cardHeaderClasses,
} from '../../../lib';
import { MotionElement } from '../motion';

export type CardProps = {
  children?: ReactNode;
  className?: string;
};

function CardHeader({
  children,
  className,
  ...rest
}: CardProps): React.ReactNode {
  return (
    <MotionElement
      className={twMerge(cardHeaderClasses(), className)}
      {...rest}
    >
      {children}
    </MotionElement>
  );
}

function CardFooter({
  children,
  className,
  ...rest
}: CardProps): React.ReactNode {
  return (
    <MotionElement
      className={twMerge(cardFooterClasses(), className)}
      {...rest}
    >
      {children}
    </MotionElement>
  );
}

function CardBody({
  children,
  className,
  ...rest
}: CardProps): React.ReactNode {
  return (
    <MotionElement className={twMerge(cardBodyClasses(), className)} {...rest}>
      {children}
    </MotionElement>
  );
}

export function Card({
  children,
  className,
  ...rest
}: CardProps): React.ReactNode {
  return (
    <MotionElement
      className={twMerge(cardComponentWrapperClasses(), className)}
      {...rest}
    >
      {children}
    </MotionElement>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
