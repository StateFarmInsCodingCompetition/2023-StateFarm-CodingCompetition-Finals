"use client";
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import TextLabel from "@/components/TextLabel";
import { apiFetch, apiFetchJson } from "@/utils/apiFetch";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();


    return (
        <main className="flex flex-row h-screen w-full justify-center" style={{
            backgroundImage: "url('/iStock-1203042832.jpg')"
        }}>

            <div className="max-w-lg bg-white self-center align-middle w-full flex flex-col border border-gray-200 px-6 py-4 rounded-lg shadow-lg">
                <img src="/state-farm-logo-4.svg" alt="Statefarm Logo" />
                <form className="mt-12 flex flex-col gap-2" onSubmit={async (f) => {
                    f.preventDefault();
                    const target = f.target as any;
                    const name = target.name.value;
                    const password = target.password.value;

                    apiFetchJson(`/auth/login`, {
                        method: 'POST',
                        body: {
                            name, password
                        }
                    }).then((resp) => {
                        if (resp.success == true) {
                            localStorage.setItem('statefarm-session', resp.token);
                            router.push('/dashboard')
                        } else {
                            alert(resp.reason)
                        }
                    }).catch(e => {
                        alert('Something went wrong...')
                        console.log(e)
                    })


                }}>
                    <TextLabel label="Username" id="name" placeholder="admin" />
                    <TextLabel label="Password" type="password" id="password" placeholder="password" />
                    <Button variant="primary" size="medium" type="submit" className="w-full mt-4">Login</Button>
                </form>
            </div>

        </main >
    )
}
