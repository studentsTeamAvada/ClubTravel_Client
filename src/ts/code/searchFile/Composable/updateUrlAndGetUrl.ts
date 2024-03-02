export class UpdateUrl {
  constructor() {}

  updateUrlParam(param:string, value:string): void {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set(param, value);
    history.pushState({}, '', newUrl.toString());
  }

  getUrlParam(param:string) {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
  }
}
