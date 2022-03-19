import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import {useFirstAdminLink, useLinks, useNotRequireTokenRoutes, useProtectedRoutes} from "../../constants/links";
import tokenService from "../../data/services/tokenService"

export function UnAuthGuardComponent(
    { children }: { children: JSX.Element }
) {

    const router = useRouter()
    const firstAdminLink = useFirstAdminLink()
    const notRequiredTokenRoutes = useNotRequireTokenRoutes()
    const [loading, setLoading] = useState(true);

    const checkTokenAndRedirectToTome = () => {

        const currentPath = router.asPath
        const token = tokenService.getToken()

        // token exists
        if (token !== "" && notRequiredTokenRoutes.includes(currentPath)) {
            router.replace(firstAdminLink)
        }
        else {
            setLoading(false)
        }
    }

    useEffect(() => {
        checkTokenAndRedirectToTome()
    }, [router])

    return !loading ? <>{children}</> : null
}