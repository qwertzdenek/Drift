export type PostVisibility = "unlisted" | "private" | "public" | "protected"

export type ThemeProps = {
    theme: "light" | "dark" | string,
    changeTheme: () => void
}

export type Document = {
    title: string
    content: string
    id: string
}

type File = {
    id: string
    title: string
    content: string
}

type Files = File[]

export type Post = {
    id: string
    title: string
    description: string
    visibility: PostVisibility
    files: Files
}