/// <reference types='codeceptjs' />
type PlaywrightVideoAllure = InstanceType<typeof import('./utils/playwrightVideoAllure_helper.js').default>;

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, PlaywrightVideoAllure {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
