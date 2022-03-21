import { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { UserLayout } from "../../share/components/User";
import Profil from "../../features/user/profil";
import UserBasket from "../../features/user/basket";
import { withProtected } from "../../src/HOC/routeProtection"
import UserOrder from "../../features/user/orders";
import UserCheckout from "../../features/user/checkout";

// const Layout = dynamic(() => import("../../components/Layout"))
// const ProfileContainer = dynamic(() => import("../../features/User/Profile"))
// const BasketContainer = dynamic(() => import("../../features/User/Basket"))
// const OrdersContainer = dynamic(() => import("../../features/User/Orders"))
// const CheckoutContainer = dynamic(() => import("../../features/User/Checkout"))
// const Navigation = dynamic(() => import("../../features/User/Navigation"))
// const ErrorPage = dynamic(() => import("../../features/NotFound/NotFoundContainer"))

const UserPage = () => {
    let { query: { page } } = useRouter()

    const renderPage = () => {
        console.log('--', page)
        let user = {}

        if (page) {
            switch (page) {
                case "profile":
                    user.component = <Profil />
                    break;
                case "basket":
                    user.component = <UserBasket />
                    break;
                case "orders":
                    user.component = <UserOrder />
                    break;
                case "checkout":
                    user.component = <UserCheckout />
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

    let { component, error } = renderPage()

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