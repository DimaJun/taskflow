import { SubmitEventHandler, useState } from 'react';
import type { SigninDTO } from '../model/types/api';
import { useSigninMutation } from '../api/auth';
import { useAppDispatch } from '@/shared/hooks/store';
import { useAuthActions } from '../model/slice/authSlice';
import { authStorage } from '@/shared/consts';
import { useRouter } from 'next/navigation';

const { setAuthorized, setUserData } = useAuthActions;

export function useSignin() {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const [formData, setFormData] = useState<SigninDTO>({
		email: '',
		password: '',
	});

	const [signin] = useSigninMutation();

	const onChange = (value: string, key: keyof SigninDTO) => {
		setFormData((prev) => ({ ...prev, [key]: value }));
	};

	const onSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		const isFormValid = Object.values(formData).every((val) => val.trim() !== '');
		if (!isFormValid) return;
		await signin(formData)
			.unwrap()
			.then((data) => {
				dispatch(setUserData(data));
				dispatch(setAuthorized(true));
				authStorage.set(true);
			})
			.catch((e) => console.log(e));
		router.replace('/');
	};

	return {
		formData,
		onChange,
		onSubmit,
	};
}
