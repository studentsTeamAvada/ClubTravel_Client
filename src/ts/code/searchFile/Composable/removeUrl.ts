export class RemoveUrl {
  constructor() {}

  removeParametersFromUrl(parameterKeys: string[]): void {
    const url = new URL(window.location.href);
    for (const key of parameterKeys) {
      url.searchParams.delete(key);
    }
    window.history.replaceState({}, '', url.toString());
  }
}
