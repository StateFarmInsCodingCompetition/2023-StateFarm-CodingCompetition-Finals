import getConfig from 'next/config';

type FetchOptions = { headers?: {}, [key: string]: any }



export function apiFetch(inputUrl: string, options: FetchOptions = {}) {
    if (typeof window === "undefined") return;

    const { publicRuntimeConfig: { apiUrl } } = getConfig();
    const { headers, ...others } = options;

    const appliedHeaders = {};
    //@ts-expect-error
    if (options.body) appliedHeaders['content-type'] = 'application/json';

    return fetch(`${apiUrl}${inputUrl}`, {
        headers: {
            ...appliedHeaders,
        },
        ...others
    })
}

export async function apiFetchJson(url: string, options: FetchOptions = {}) {
    if (typeof window === "undefined") return;
    const response = await apiFetch(url, options);
    //@ts-expect-error
    return await response.json();
}


export function nonApiFetch(inputUrl: string, options: FetchOptions = {}) {
    if (typeof window === "undefined") return;

    const { headers, ...others } = options;

    const appliedHeaders = {};
    //@ts-expect-error
    if (options.body) appliedHeaders['content-type'] = 'application/json';

    return fetch(`${inputUrl}`, {
        headers: {
            ...appliedHeaders,
        },
        ...others
    })
}

export async function nonApiFetchJson(url: string, options: FetchOptions = {}) {
    if (typeof window === "undefined") return;
    const response = await nonApiFetch(url, options);
    //@ts-expect-error
    return await response.json();
}