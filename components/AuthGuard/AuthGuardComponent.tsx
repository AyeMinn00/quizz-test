import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useLinks, useProtectedRoutes } from "../../constants/links";
import tokenService from "../../data/services/tokenService"
import { LoadingComponent } from "../LoadingComponent/LoadingComponent";

export function AuthGuardComponent(
    { children }: { children: JSX.Element }
) {

    const router = useRouter()
    const links = useLinks()
    const protectedRoutes = useProtectedRoutes()
    const [loading, setLoading] = useState(true);

    const checkAuthAndProceed= () => {

        const currentPath = router.asPath
        const token = tokenService.getToken()

        if (token === "" && protectedRoutes.includes(currentPath)) {
            router.replace(links.login)
        } else if (token !== "" && currentPath === links.login) {
            router.replace(links.home)
        }
        else {
            setLoading(false)
        }
    }

    useEffect(() => {
        checkAuthAndProceed()
    }, [router])

    return !loading ? <>{children}</> : <LoadingComponent />
}