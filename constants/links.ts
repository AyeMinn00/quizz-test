export const links = {
    home: '/',
    questions : '/questions',

    login: '/admin/login',
    adminQuestion: '/admin/questions',
    adminCategory : '/admin/categories',
    adminExam : '/admin/exams',
}

export function useLinks() {
    return links
}

export function useFirstAdminLink(){
    return links.adminCategory
}

export function useProtectedRoutes() {
    return [
        links.adminQuestion,
        links.adminCategory,
        links.adminExam
    ]
}

/*
 *  if token is already in local storage , launching these routes will redirect to home
 */
export function useNotRequireTokenRoutes() {
    return [
        links.login
    ]
}
