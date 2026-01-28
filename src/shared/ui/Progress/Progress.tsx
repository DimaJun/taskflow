import s from './Progress.module.scss';

interface Props {
	text: string;
	value: number;
	color?: string;
}

export function Progress(props: Props) {
	const { text, value, color = '#3b82f6' } = props;

	return (
		<div className={s.wrapper}>
			<div className={s.top}>
				<span className={s.text}>{text}</span>
				<span className={s.value}>{value}%</span>
			</div>
			<div className={s.track}>
				<div
					className={s.bar}
					style={{ width: `${value}%`, backgroundColor: color }}
				/>
			</div>
		</div>
	);
}
