export {};

declare global {
  interface Window {
    ezstandalone: {
      cmd: Array<() => void>;
      showAds: (...placeholderIds: number[]) => void;
      destroyPlaceholders: (...placeholderIds: number[]) => void;
      destroyAll: () => void;
      define: (...placeholderIds: number[]) => void;
      enable: () => void;
      display: () => void;
      hasAd: (placeholderId: number) => boolean;
      refresh: () => void;
      init: () => void;
      setIsPWA: () => void;
    };
  }

  var ezstandalone: Window['ezstandalone'];
}
