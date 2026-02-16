import s from './SignupForm.module.scss';
import { Input } from '@/shared/ui/Input';
import { classNames } from '@/shared/helpers';
import { User, Mail, Lock } from 'lucide-react';
import { useSignup } from '../../hooks/useSignup';
import { Button } from '@/shared/ui/Button';

export function SignupForm() {
	const { formData, onChange, onSubmit } = useSignup();

	return (
		<form
			className={s.form}
			onSubmit={onSubmit}
		>
			<Input
				wrapperClass={classNames(s.input, {}, [s.firstName])}
				Icon={User}
				label='Имя'
				placeholder='Иван'
				value={formData.firstName}
				onChange={(e) => onChange(e.target.value, 'firstName')}
			/>
			<Input
				wrapperClass={classNames(s.input, {}, [s.lastName])}
				Icon={User}
				label='Фамилия'
				placeholder='Иванов'
				value={formData.lastName}
				onChange={(e) => onChange(e.target.value, 'lastName')}
			/>
			<Input
				wrapperClass={classNames(s.input, {}, [s.email])}
				Icon={Mail}
				type='email'
				label='Email'
				placeholder='ivanov@gmail.com'
				value={formData.email}
				onChange={(e) => onChange(e.target.value, 'email')}
			/>
			<Input
				wrapperClass={classNames(s.input, {}, [s.password])}
				Icon={Lock}
				type='password'
				label='Пароль'
				placeholder='Минимум 6 символов'
				value={formData.password}
				onChange={(e) => onChange(e.target.value, 'password')}
			/>
			<Button
				className={s.send}
				variant='default'
				type='submit'
			>
				Создать аккаунт
			</Button>
		</form>
	);
}
