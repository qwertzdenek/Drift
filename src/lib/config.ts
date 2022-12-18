type Config = {
	is_production: boolean
	enable_admin: boolean
	registration_password: string
	welcome_content: string
	welcome_title: string
	url: string
	github_client_id: string
	github_client_secret: string
	nextauth_secret: string
	credential_auth: boolean
}

type EnvironmentValue = string | undefined
type Environment = { [key: string]: EnvironmentValue }

export const config = (env: Environment): Config => {
	const stringToBoolean = (str: EnvironmentValue): boolean => {
		if (str === "true" || str === "1") {
			return true
		} else if (str === "false" || str === "0") {
			return false
		} else if (str) {
			throw new Error(`Invalid boolean value: ${str}`)
		} else {
			return false
		}
	}

	// TODO: improve `key` type
	const throwIfUndefined = (key: keyof Environment): string => {
		const value = env[key]
		if (value === undefined) {
			throw new Error(`Missing environment variable: ${key}`)
		}

		return value
	}

	const defaultIfUndefined = (str: string, defaultValue: string): string => {
		const value = env[str]
		if (value === undefined) {
			return defaultValue
		}
		return value
	}

	const validNodeEnvs = (str: EnvironmentValue) => {
		const valid = ["development", "production", "test"]
		if (str && !valid.includes(str)) {
			throw new Error(`Invalid NODE_ENV set: ${str}`)
		} else if (!str) {
			console.warn("No NODE_ENV specified, defaulting to development")
		} else {
			console.log(`Using NODE_ENV: ${str}`)
		}
	}

	const is_production = env.NODE_ENV === "production"

	const developmentDefault = (name: string, defaultValue: string): string => {
		if (is_production) return throwIfUndefined(name)
		return defaultIfUndefined(name, defaultValue)
	}

	validNodeEnvs(env.NODE_ENV)

	throwIfUndefined("DATABASE_URL")

	const config: Config = {
		is_production,
		enable_admin: stringToBoolean(env.ENABLE_ADMIN),
		registration_password: env.REGISTRATION_PASSWORD ?? "",
		welcome_content: env.WELCOME_CONTENT ?? "Welcome to Drift.",
		welcome_title: env.WELCOME_TITLE ?? "Drift",
		url: process.env.VERCEL_URL ?? throwIfUndefined("DRIFT_URL"),
		github_client_id: env.GITHUB_CLIENT_ID ?? "",
		github_client_secret: env.GITHUB_CLIENT_SECRET ?? "",
		nextauth_secret: throwIfUndefined("NEXTAUTH_SECRET"),
		credential_auth: stringToBoolean(
			developmentDefault("CREDENTIAL_AUTH", "true")
		)
	}
	return config
}

export default config(process.env)