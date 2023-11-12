type FetchOptions = { headers?: {}, [key: string]: any }

function getToken() {
    return localStorage.getItem('statefarm-session');
}

export function apiFetch(inputUrl: string, options: FetchOptions = {}) {
    if (typeof window === "undefined") return;

    const apiUrl = process.env.VERCEL == '1' ? 'TOPUTIN' : 'http://localhost:5000'
    const { headers, ...others } = options;

    const appliedHeaders = { ...options.headers };
    const authAddon = getToken() ? { auth: getToken() } : {};

    if (options.body) {
        //@ts-expect-error
        appliedHeaders['content-type'] = 'application/json';
        options.body = typeof (options.body) == 'object' ? JSON.stringify(options.body) : options.body;
        return fetch(`${apiUrl}${inputUrl}`, {
            headers: {
                ...appliedHeaders,
                ...authAddon,
            },
            ...options
        })
    }

    return fetch(`${apiUrl}${inputUrl}`, {
        headers: {
            ...appliedHeaders,
            ...authAddon,
        },
        ...options
    })
}

export async function apiFetchJson(url: string, options: FetchOptions = {}) {
    if (typeof window === "undefined") return;
    const response = await apiFetch(url, options);
    //@ts-expect-error
    return await response.json();
}