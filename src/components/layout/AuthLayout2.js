

function AuthLayout({ children }) {
    return (
        <main>
            <div className="relative flex justify-center items-center w-full min-h-[100vh] bg-purple-5 py-10">
                <div className="absolute w-1/2 h-full right-0 top-0 bottom-0 bg-gradient-to-r from-purple-2 to-purple-3"></div>
                {children}
            </div>
        </main>
    )
}

export default AuthLayout