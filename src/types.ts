export type THeaderData = {
    title: string
    description: string
}

export type TSiteData = {
    title: string
    description: string
}

export type TSocial = {
    name: string
    href: string
}

export type TExperience = {
    from: number
    to: number | "Present"
    role: string
    company: string
    companyUrl: string
}