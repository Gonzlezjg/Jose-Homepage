/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly FIREBASE_CONFIG_PRIVATE_KEY_ID: string;
  readonly FIREBASE_CONFIG_PRIVATE_KEY: string;
  readonly FIREBASE_CONFIG_PROJECT_ID: string;
  readonly FIREBASE_CONFIG_CLIENT_EMAIL: string;
  readonly FIREBASE_CONFIG_CLIENT_ID: string;
  readonly FIREBASE_CONFIG_AUTH_URI: string;
  readonly FIREBASE_CONFIG_TOKEN_URI: string;
  readonly FIREBASE_CONFIG_AUTH_CERT_URL: string;
  readonly FIREBASE_CONFIG_CLIENT_CERT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
