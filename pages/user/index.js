import { Fragment, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { UserLayout } from "../../share/components/User";
import { withProtected } from "../../src/HOC/routeProtection"
const ProfileContainer = dynamic(() => import("../../features/user/profil"));
const BasketContainer = dynamic(() => import("../../features/user/basket"));
const OrdersContainer = dynamic(() => import("../../features/user/orders"))
const CheckoutContainer = dynamic(() => import("../../features/user/checkout"))


const UserPage = () => {
    let { query: { page } } = useRouter()

    const renderPage = () => {
        let user = {}

        if (page) {
            switch (page) {
                case "profile":
                    user.component = <ProfileContainer />
                    break;
                case "basket":
                    user.component = <BasketContainer />
                    break;
                case "orders":
                    user.component = <OrdersContainer />
                    break;
                case "checkout":
                    user.component = <CheckoutContainer />
                    break;
                default:
                    user = {
                        error: true,
                        // component: <ErrorPage />
                    }
            }
        }
        return user
    }

    let { component } = renderPage()

    return (
        <Fragment>
            <Head>
                <title> User | Food Delivery</title>
            </Head>
            <UserLayout>
                {component}
            </UserLayout>
        </Fragment>
    )
}

export default withProtected(UserPage)

// export async function getStaticProps({ locale }) {
//     let languages = { ...await serverSideTranslations(locale, ['common', 'menu']) }

//     return {
//         props: {
//             ...languages
//         },
//     };
// }