import s from './Button.module.scss';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from '@/shared/helpers';

type ButtonVariant = 'clear' | 'default';

const mapVariantToClass: Record<ButtonVariant, string> = {
	clear: s.clear,
	default: s.default,
};

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
	variant?: ButtonVariant;
}

export function Button(props: Props) {
	const { className = '', variant = 'default', children, ...rest } = props;

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
