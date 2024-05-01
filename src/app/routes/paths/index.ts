const enum PageNames {
  MAIN = 'main',
  PHOTO_EDITOR = 'photoEditor',
}

export const paths: Record<PageNames, string> = {
  [PageNames.MAIN]: '/',
  [PageNames.PHOTO_EDITOR]: '/photo-editor',
};
