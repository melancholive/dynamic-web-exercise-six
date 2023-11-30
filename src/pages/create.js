import { useEffect } from "react";
import { useRouter } from "next/router";
import CreateUserForm from "../app/components/CreateUserForm"

export default function CreateUser({ isLoggedIn, createUser }){
    const router = useRouter();
    useEffect(() => {
        // If user is logged in, send them to profile
        if (isLoggedIn) router.push("/");
    }, [isLoggedIn]);

    return (
        <main>
            <h1>Create User</h1>
            <CreateUserForm createUser={createUser}/>
        </main>
    );
}