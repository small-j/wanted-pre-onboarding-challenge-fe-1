import {server} from "./api";

const URL = "/users";

export async function login({email, password}: ParamI): Promise<ResponseI | null> {
    try {
        const res: ResponseI = await server.post(`${URL}/login`,
        {
            email,
            password
        }, 
        {
            headers: {
                "Content-Type": "application/json",
            }
        });

        return {
            message: res.message,
            token: res.token,
        };
    } catch (err) {
        throw new Error("Failed login");
    }
}

export async function signUp({email, password}: ParamI): Promise<ResponseI | null> {
    try {
        const res: ResponseI = await server.post(`${URL}/create`,
        {
            email,
            password
        }, 
        {
            headers: {
                "Content-Type": "application/json",
            }
        });

        return {
            message: res.message,
            token: res.token,
        };
    } catch (err) {
        throw new Error("Failed sign up");
    }
}

interface ParamI {
    email: string;
    password: string;
}

interface ResponseI {
    message: string;
    token: string;
}