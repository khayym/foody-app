import { useAuth } from "../context/AuthContext";
import { useRouter } from 'next/router';
import { useEffect } from "react";

export const withPublic = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const { user, loading } = useAuth();

        useEffect(() => {
            if (user) {
                router.replace("/");
                return null;
            }
        }, [user, router]);

        if (user || loading) {
            return (<h1>Loading here!</h1>)// full-screen loader here
        }

        return (<WrappedComponent {...props} />)
    };
};

// ---  Istifadeci sehifesi olan zaman -----

// export const withProtected = (WrappedComponent) => {
//     return (props) => {
//         const router = useRouter();
//         const { authUser, authLoading } = useAuth();


//         useEffect(() => {
//             if (!authUser) {
//                 router.replace("/user");
//                 return null;
//             }
//         }, [authUser]);

//         if (!authUser || authLoading) {
//             return <h1>Loading here!</h1>; // full-screen loader here
//         }

//         return <WrappedComponent {...props} />;
//     };
// };
