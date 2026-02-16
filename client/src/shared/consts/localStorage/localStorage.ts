export const IS_AUTH_KEY = 'isAuthorized';

export const authStorage = {
	set(value: boolean) {
		localStorage.setItem(IS_AUTH_KEY, JSON.stringify(value));
	},
	get(): boolean {
		if (typeof window === 'undefined') return false;

		return localStorage.getItem(IS_AUTH_KEY) === 'true';
	},
	remove() {
		localStorage.removeItem(IS_AUTH_KEY);
	},
};
