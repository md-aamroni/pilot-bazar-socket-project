import HttpClientService from "../Services/HttpClientService.mjs";

export const RegisterController = async (formData) => {
    try {
        const res = await HttpClientService.post('api/v1/account/register', formData);
        return { data: res.result, code: res.status };
    } catch (err) {
        return { data: err.errors, code: err.status };
    }
}

export const StatusController = async (formData) => {
    try {
        const res = await HttpClientService.patch('api/v1/account/status', formData);
        return { data: res.result, code: res.status };
    } catch (err) {
        return { data: err.errors, code: err.status };
    }
}