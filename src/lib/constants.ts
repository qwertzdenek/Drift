import { ServerPost } from "./server/prisma"

// Visibilties for the webpages feature
export const ALLOWED_VISIBILITIES_FOR_WEBPAGE = ["public", "unlisted"]
export function isAllowedVisibilityForWebpage(
	visibility: ServerPost["visibility"]
) {
	return ALLOWED_VISIBILITIES_FOR_WEBPAGE.includes(visibility)
}
export const DEFAULT_THEME = "dark"

export const SIGNED_IN_COOKIE = "next-auth.session-token"
export const THEME_COOKIE = "drift-theme"

// Code files for uploading with drag and drop and syntax highlighting
export const allowedFileTypes = [
	"application/json",
	"application/x-javascript",
	"application/xhtml+xml",
	"application/xml",
	"text/xml",
	"text/plain",
	"text/html",
	"text/csv",
	"text/tab-separated-values",
	"text/x-c",
	"text/x-c++",
	"text/x-csharp",
	"text/x-java",
	"text/x-javascript",
	"text/x-php",
	"text/x-python",
	"text/x-ruby",
	"text/x-scala",
	"text/x-swift",
	"text/x-typescript",
	"text/x-vb",
	"text/x-vbscript",
	"text/x-yaml",
	"text/x-c++",
	"text/x-c#",
	"text/mathml",
	"text/x-markdown",
	"text/markdown"
]

export const allowedFileNames = [
	"Makefile",
	"README",
	"Dockerfile",
	"Jenkinsfile",
	"LICENSE",
	".env",
	".gitignore",
	".gitattributes",
	".env.example",
	".env.development",
	".env.production",
	".env.test",
	".env.staging",
	".env.development.local",
	"yarn.lock",
	".bash",
	".bashrc",
	".bash_profile",
	".bash_logout",
	".profile",
	".fish_prompt",
	".zshrc",
	".zsh",
	".zprofile"
]

export const codeFileExtensions = [
	"awk",
	"bat",
	"c",
	"c#",
	"c++",
	"cgi",
	"cmd",
	"coffee",
	"cpp",
	"css",
	"cxx",
	"go",
	"h",
	"m",
	"ha",
	"hpp",
	"htm",
	"html",
	"inc",
	"java",
	"js",
	"json",
	"jsx",
	"l",
	"less",
	"ll",
	"lock",
	"log",
	"lua",
	"mk",
	"mod",
	"php",
	"pl",
	"ps",
	"py",
	"rb",
	"rs",
	"s",
	"sh",
	"sass",
	"scala",
	"scss",
	"sql",
	"styl",
	"stylus",
	"swift",
	"ts",
	"tsx",
	"vb",
	"vbscript",
	"vue",
	"vuex",
	"xml",
	"y",
	"yaml",
	"fish"
]

export const allowedFileExtensions = [
	"csv",
	"markdown",
	"md",
	"txt",
	"webmanifest",
	"log",
	...codeFileExtensions
]
