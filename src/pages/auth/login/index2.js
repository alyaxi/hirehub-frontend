import React from 'react';
import { AuthCard, AuthLayout, Core } from '../../../components';
import "../../../assets/css/login";

function LoginPage() {
    return (
        <AuthLayout>
            <AuthCard>
                <form className="mb-3">
                    <div className="mb-3">
                        <Core.InputWithLabel label name="email" />
                    </div>
                    <div className="mb-3">
                        <Core.InputWithLabel label name="password" forgotPassword />
                    </div>
                    <Core.Button>Sign in</Core.Button>
                </form>
            </AuthCard>
        </AuthLayout>
    )
}

export default LoginPage