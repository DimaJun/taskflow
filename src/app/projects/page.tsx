import { Page } from '@/shared/ui/Page';
import s from './page.module.scss';
import { Button } from '@/shared/ui/Button';
import { Plus } from 'lucide-react';
import { Input } from '@/shared/ui/Input';

export default function Projects() {
	return (
		<Page className={s.projects}>
			<div className={s.top}>
				<div className={s.left}>
					<h1 className={s.title}>Все проекты</h1>
					<p className={s.description}>6 активных проектов</p>
				</div>
				<Button className={s.createProject}>
					<Plus size={18} />
					Создать проект
				</Button>
			</div>
			<Input
				placeholder='Поиск проектов...'
				wrapperClass={s.inputWrapper}
				isSearch
			/>
		</Page>
	);
}
