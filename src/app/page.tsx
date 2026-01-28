import { Metadata } from 'next';
import { Page } from '@/shared/ui/Page';

export const metadata: Metadata = {
	title: 'Home',
};

export default function Home() {
	return <Page></Page>;
}
