/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_apiKey: string;
    readonly VITE_apiKeyauthDomain: string;
    readonly VITE_projectId: string;
    readonly VITE_storageBucket: string;
    readonly VITE_messagingSenderId: string;
    readonly VITE_appId: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }