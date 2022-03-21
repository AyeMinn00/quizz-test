const AdminHomePage = () => {
    return (
        <h1>Home</h1>
    )
}

AdminHomePage.authPattern = {requireAuth: true, requireEmptyToken: false}

export default AdminHomePage