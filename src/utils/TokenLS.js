const TOKEN = 'token_morada';

export const setToken = (value) => {
    localStorage.setItem(TOKEN, value);
}

// token_morada-> 'ZZZYYYMMM'
// name -> "juan"

export const getToken = () => {
    return localStorage.getItem(TOKEN);
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}