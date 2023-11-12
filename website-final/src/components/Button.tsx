import { cva, cx, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import Link from 'next/link';
import { ComponentPropsWithRef } from 'react';

export type ButtonVariants = 'default' | 'danger' | 'light_danger' | 'success' | 'primary' | 'blue' | 'discrete' | 'light_warning' | 'warning'

const styles = cva('transition-colors rounded-md', {
  variants: {
    disabled: {
      true: 'opacity-60 cursor-not-allowed',
    },
    variant: {
      default: 'bg-gray-500 hover:bg-gray-600 text-white',
      danger: 'bg-red-500 hover:bg-red-600 text-white',
      light_danger: 'bg-red-100 hover:bg-red-200 text-red-500',
      success: 'bg-green-500 hover:bg-green-600 text-white',
      primary: 'bg-blue-600 hover:bg-blue-700 text-white',
      blue: 'bg-blue-100 hover:bg-blue-200 text-blue-600',
      discrete: 'bg-gray-100 hover:bg-gray-200 text-gray-600',
      light_warning: 'bg-orange-100 hover:bg-orange-200 text-yellow-600',
      warning: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-600',
    },
    size: {
      small: 'py-2 px-3 font-medium text-xs',
      medium: 'py-2 px-3 font-medium text-sm',
      large: 'py-3 px-4 font-medium text-medium',
    },
    width: {
      full: 'w-full',
      min: 'w-min',
    },
  },
  defaultVariants: {
    size: 'small',
    variant: 'default',
  },
});

type Props = {
  href?: string;
  icon?: any;
} & Partial<ComponentPropsWithRef<'button'> & ComponentPropsWithRef<'a'>> &
  VariantProps<typeof styles>;

export default function Button({ href, icon, ...props }: Props): JSX.Element {
  const Content = href ? 'a' : 'button';
  const Icon = icon;

  const component = (
    <Content
      {...props}
      className={cx(
        //@ts-expect-error this works
        styles(props),
        props.className,
        href ? 'flex flex-row justify-center' : '',
      )}
      disabled={props.disabled}
    >
      <div className={cx('flex items-center justify-center text-center')}>
        {Icon && (
          <span className={props.children ? `mr-2` : ''}>
            <Icon className={clsx('h-5 w-5', props.children && 'mr-2 -ml-1')} />
          </span>
        )}
        {props.children}
      </div>
    </Content>
  );

  return href ? (
    <Link href={href} legacyBehavior={true}>
      {component}
    </Link>
  ) : (
    component
  );
}
