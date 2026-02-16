import { SubmitEventHandler, useState } from 'react';
import type { SignupDTO } from '../model/types/api';
import { useSignupMutation } from '../api/auth';

export function useSignup() {
	const [formData, setFormData] = useState<SignupDTO>({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});

	const [signup] = useSignupMutation();

	const onChange = (value: string, key: keyof SignupDTO) => {
		setFormData((prev) => ({ ...prev, [key]: value }));
	};

	const onSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		const isFormValid = Object.values(formData).every((val) => val.trim() !== '');
		if (!isFormValid) return;
		await signup(formData)
			.unwrap()
			.then((data) => console.log(data));
	};

	return {
		formData,
		onChange,
		onSubmit,
	};
}
