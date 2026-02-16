'use client';

import { useAppSelector } from '@/shared/hooks/store';
import { getUserData } from '@/features/Authorization';

export function HomePage() {
	const userData = useAppSelector(getUserData);

	return <div>Hello, {userData?.firstName}!</div>;
}
