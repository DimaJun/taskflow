'use client';

import s from './AuthPage.module.scss';
import { Tabs } from '@/shared/ui/Tabs';
import { useState } from 'react';
import { SigninForm, SignupForm } from '@/features/Authorization';
import { Button } from '@/shared/ui/Button';

export function AuthPage() {
	const [activeTab, setActiveTab] = useState('register');

	return (
		<div className={s.Auth}>
			<h1 className={s.title}>TaskFlow</h1>
			<p className={s.description}>Управление задачами и командами</p>
			<div className={s.formWrapper}>
				<Tabs
					items={[
						{ content: 'Войти', active: activeTab === 'login', onClick: () => setActiveTab('login') },
						{
							content: 'Регистрация',
							active: activeTab === 'register',
							onClick: () => setActiveTab('register'),
						},
					]}
				/>
				<div className={s.formText}>
					<h2 className={s.formHeading}>Создать аккаунт</h2>
					<p className={s.formDescription}>Введите данные для входа в систему</p>
				</div>
				{activeTab === 'login' ? <SigninForm /> : <SignupForm />}
				<Button
					className={s.send}
					variant='default'
				>
					{activeTab === 'login' ? 'Войти' : 'Создать аккаунт'}
				</Button>
				<p className={s.hint}>
					{activeTab === 'login' ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
					<Button
						className={s.switch}
						onClick={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
					>
						{activeTab === 'login' ? 'Зарегистрироваться' : 'Войти'}
					</Button>
				</p>
			</div>
		</div>
	);
}
