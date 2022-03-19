import {useLinks} from "./links";

const links = useLinks()

export type NavItem = {
    name: string,
    link: string
}

const NavItems: NavItem[] = [
    {
        name: 'Category', link: `${links.adminCategory}`
    },
    {
        name: 'Question', link: `${links.adminQuestion}`
    },
    {
        name : 'Exam' , link : `${links.adminExam}`
    }
]

export function useNavItems() {
    return NavItems
}