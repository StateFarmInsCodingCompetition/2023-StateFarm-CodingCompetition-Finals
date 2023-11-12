"use client";
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import TextLabel from "@/components/TextLabel";
import { apiFetch } from "@/utils/apiFetch";

export default function Home() {
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

                    apiFetch(`/auth/login`, {
                        body: {
                            name, password
                        }
                    })?.then((resp) => {
                        console.log(resp)
                    }).catch(e => {
                        alert('Something went wrong...')
                    })


                }}>
                    <TextLabel label="Username" id="name" placeholder="admin" />
                    <TextLabel label="Password" type="password" id="password" placeholder="password" />
                    <Button variant="primary" size="medium" type="submit" className="w-full mt-4">Login</Button>
                </form>
            </div>

        </main>
    )
}
