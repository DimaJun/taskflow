import s from './AuthPage.module.scss';

export function AuthPage() {
	return (
		<div className={s.Auth}>
			<h1 className={s.title}>TaskFlow</h1>
			<p className={s.description}>Управление задачами и командами</p>
			<div className={s.tabs}></div>
		</div>
	);
}
