import s from './Input.module.scss';
import { InputHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';
import { classNames } from '@/shared/helpers';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	Icon?: LucideIcon;
	label?: string;
}

export function Input(props: Props) {
	const { Icon, label, className = '', ...rest } = props;

	return (
		<label className={s.wrapper}>
			{label && <p className={s.label}>{label}</p>}

			<div className={s.inputWrapper}>
				{Icon && (
					<Icon
						className={s.icon}
						size={18}
					/>
				)}

				<input
					className={classNames(s.Input, {}, [className])}
					{...rest}
				/>
			</div>
		</label>
	);
}
