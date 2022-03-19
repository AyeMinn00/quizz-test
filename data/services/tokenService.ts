import { TOKEN } from "../../constants/constants";

class TokenService {

    getToken = (): string => {
        if (typeof window !== "undefined") {
            let token = window.localStorage.getItem(TOKEN)
            if (token != null) return token
        }
        return "";
    }

    setToken = (token: string) => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(TOKEN, token)
        }
    }

}

const tokenService = new TokenService()
export default tokenService