const TOKEN = 'TOKEN'

export const setEmailLocalStorage = (email: string) => localStorage.setItem('email', email);

export const deleteEmailLocalStorage = () => localStorage.removeItem('email');

export const getEmailLocalStorage = (): string | null => localStorage.getItem('email');

export const setTokenLocalStorage = (token: string) => localStorage.setItem(TOKEN, token);

export const deleteTokenLocalStorage = () => localStorage.removeItem(TOKEN);

export const getTokenLocalStorage = (): string | null => localStorage.getItem(TOKEN);

