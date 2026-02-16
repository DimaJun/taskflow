import s from './SigninForm.module.scss';
import { Input } from '@/shared/ui/Input';
import { Mail, Lock } from 'lucide-react';
import { Button } from '@/shared/ui/Button';
import { useSignin } from '../../hooks/useSignin';

export function SigninForm() {
	const { formData, onSubmit, onChange } = useSignin();

	return (
		<form
			className={s.form}
			onSubmit={onSubmit}
		>
			<Input
				wrapperClass={s.input}
				Icon={Mail}
				type='email'
				label='Email'
				placeholder='ivanov@gmail.com'
				value={formData.email}
				onChange={(e) => onChange(e.target.value, 'email')}
			/>
			<Input
				wrapperClass={s.input}
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
				Войти
			</Button>
		</form>
	);
}
