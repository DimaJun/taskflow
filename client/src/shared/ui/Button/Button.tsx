import s from './Button.module.scss';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from '@/shared/helpers';

type ButtonVariant = 'clear' | 'default';

const mapVariantToClass: Record<ButtonVariant, string> = {
	default: s.default,
	clear: s.clear,
};

type TypedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

interface Props extends TypedButtonProps {
	variant?: ButtonVariant;
}

export function Button(props: Props) {
	const { children, className = '', variant = 'clear', ...rest } = props;

	const variantClass = mapVariantToClass[variant];

	return (
		<button
			className={classNames(s.Button, {}, [className, variantClass])}
			{...rest}
		>
			{children}
		</button>
	);
}
