import s from './SignupForm.module.scss';
import { Input } from '@/shared/ui/Input';
import { classNames } from '@/shared/helpers';
import { User, Mail, Lock } from 'lucide-react';

export function SignupForm() {
	return (
		<form className={s.form}>
			<Input
				wrapperClass={classNames(s.input, {}, [s.firstName])}
				Icon={User}
				label='Имя'
				placeholder='Иван'
			/>
			<Input
				wrapperClass={classNames(s.input, {}, [s.lastName])}
				Icon={User}
				label='Фамилия'
				placeholder='Иванов'
			/>
			<Input
				wrapperClass={classNames(s.input, {}, [s.email])}
				Icon={Mail}
				type='email'
				label='Email'
				placeholder='ivanov@gmail.com'
			/>
			<Input
				wrapperClass={classNames(s.input, {}, [s.password])}
				Icon={Lock}
				type='password'
				label='Пароль'
				placeholder='Минимум 6 символов'
			/>
		</form>
	);
}
