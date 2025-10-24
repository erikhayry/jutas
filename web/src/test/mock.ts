import website from '$lib/assets/website.json';

export const COMIC_MOCK = website[0]!
export const PAGE_INDEX_MOCK = 0
export const PAGE_MOCK = COMIC_MOCK.pages[PAGE_INDEX_MOCK]!
export const PANEL_MOCK = PAGE_MOCK.panels[0]!