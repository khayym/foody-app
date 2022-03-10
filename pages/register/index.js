import React from 'react'
import LoginAndRegister from '../../features/Login_Register'
import { withPublic } from '../../src/HOC/routeProtection'

const Index = () => {

    return (
        <>
            <LoginAndRegister conIndex={1} />
        </>
    )
}

export default withPublic(Index)