import {server} from "./api";

const URL = "/todos";

export async function getTodos({token}: RequestI): Promise<TodoResponseI[] | null> {
    try {
        const { data }: TodosAPIResponseI = await server.get(`${URL}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        });

        return data.map(value => ({
            title: value.title,
            content: value.content,
            id: value.id,
        }));
    } catch (err) {
        throw new Error("Failed get todo list");
    }
}

export async function getTodoById({id, token}: RequestI): Promise<TodoResponseI | null> {
    try {
        const { data }: TodoAPIResponseI = await server.get(`${URL}/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        });

        return {
            title: data.title,
            content: data.content,
            id: data.id,
        }
    } catch (err) {
        throw new Error("Failed get todo");
    }
}

export async function createTodo({token, title, content}: RequestI) {
    try {
        const res = await server.post(`${URL}`,
        {
            title,
            content
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        });

        // if (!res) throw err;
    } catch (err) {
        throw new Error("Failed create todo");
    }
}

export async function updateTodo({id, token, title, content}: RequestI) {
    try {
        const res = await server.put(`${URL}/${id}`,
        {
            title,
            content
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        });
    } catch (err) {
        throw new Error("Failed update todo");
    }
}

export async function deleteTodo({id, token}: RequestI) {
    try {
            const res = await server.delete(`${URL}/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        });
    } catch (err) {
        throw new Error("Failed delete todo");
    }
}

interface RequestI {
    title?: string;
    content?: string;
    id?: string;
    token: string;
}

interface TodoResponseI {
    title: string;
    content: string;
    id: string;
}

interface TodosAPIResponseI {
    data: ResponseDataI[];
}

interface TodoAPIResponseI {
    data: ResponseDataI;
}

interface ResponseDataI {
    title: string;
    content: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}

