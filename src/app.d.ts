// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
export interface studentType {
    id?: number;
    name?: string;
    gender?: string;
    age?: number;
    country?: string;
    state?: string;
    city?: string;
}
export {};
