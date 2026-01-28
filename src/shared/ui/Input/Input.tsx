import s from './Input.module.scss';
import { InputHTMLAttributes, useId } from 'react';
import { Search } from 'lucide-react';
import { classNames } from '@/shared/helpers';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	wrapperClass?: string;
	isSearch?: boolean;
}

export function Input(props: Props) {
	const { className = '', wrapperClass = '', label, isSearch = false, ...rest } = props;

	const inputId = rest.id ?? useId();

	if (label) {
		return (
			<label
				className={s.label}
				htmlFor={inputId}
			>
				<p>{label}</p>
				<div className={classNames(s.wrapper, {}, [wrapperClass])}>
					{isSearch && (
						<Search
							className={s.icon}
							size={18}
						/>
					)}
					<input
						className={classNames(s.Input, {}, [className])}
						id={inputId}
						{...rest}
					/>
				</div>
			</label>
		);
	}

	return (
		<div className={classNames(s.wrapper, {}, [wrapperClass])}>
			{isSearch && (
				<Search
					className={s.icon}
					size={18}
				/>
			)}
			<input
				className={classNames(s.Input, {}, [className])}
				{...rest}
			/>
		</div>
	);
}
