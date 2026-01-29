import s from './Avatar.module.scss';
import Image from 'next/image';
import { classNames, Mods } from '@/shared/helpers';

interface Props {
	className?: string;
	src?: string;
	fullName: string;
	rounded?: boolean;
	size?: number;
}

export function Avatar(props: Props) {
	const { className = '', src, fullName, rounded = false, size = 50 } = props;

	const firstLetter = fullName.trim().split(/\s+/)[0]?.charAt(0)?.toUpperCase();

	const mods: Mods = {
		[s.rounded]: rounded,
	};

	if (src) {
		return (
			<Image
				className={classNames(s.Image, mods, [className])}
				src={src}
				alt={`avatar user ${fullName}`}
				width={size}
				height={size}
			/>
		);
	}

	return (
		<div
			className={classNames(s.Image, mods, [className])}
			style={{ width: size, height: size }}
		>
			{firstLetter}
		</div>
	);
}
