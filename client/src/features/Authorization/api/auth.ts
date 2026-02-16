import { baseApi } from '@/shared/api/baseApi/baseApi';
import { User } from '@/entities/User';
import type { SigninDTO, SignupDTO } from '../model/types/api';

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		signup: build.mutation<User, SignupDTO>({
			query: (body) => ({
				url: '/auth/signup',
				method: 'POST',
				body,
			}),
		}),
		signin: build.mutation<User, SigninDTO>({
			query: (body) => ({
				url: '/auth/signin',
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const { useSignupMutation } = authApi;
export const { useSigninMutation } = authApi;
