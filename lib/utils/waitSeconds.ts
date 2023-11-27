export default async function waitSeconds(seconds: number) {
	return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}
