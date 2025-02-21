/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_LIFF_ID: string;
	readonly VITE_CHANEL_ID: string;
	readonly VITE_CHANEL_SECRET_ID: string;
}
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
