import s from './SigninForm.module.scss';
import { Input } from '@/shared/ui/Input';
import { Mail, Lock } from 'lucide-react';

export function SigninForm() {
	return (
		<form className={s.form}>
			<Input
				wrapperClass={s.input}
				Icon={Mail}
				type='email'
				label='Email'
				placeholder='ivanov@gmail.com'
			/>
			<Input
				wrapperClass={s.input}
				Icon={Lock}
				type='password'
				label='Пароль'
				placeholder='Минимум 6 символов'
			/>
		</form>
	);
}
