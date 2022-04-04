import { useAuth } from "../context/AuthContext";
import { useRouter } from 'next/router';
import { useEffect } from "react";
import { LoadingOverlay } from "@mantine/core";

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
            return (<LoadingOverlay visible={true} />)// full-screen loader here
        }

        return (<WrappedComponent {...props} />)
    };
};

// ---  Istifadeci sehifesi olan zaman -----

export const withProtected = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const { user, loading } = useAuth();


        useEffect(() => {
            if (!user) {
                router.replace("/register");
                return null;
            }
        }, [user, router]);

        if (!user || loading) {
            return <LoadingOverlay visible={true} />; // full-screen loader here
        }

        return <WrappedComponent {...props} />;
    };
};
