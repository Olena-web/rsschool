class Loader {
  baseLink: string;
  options: { [key: string]: string };
  constructor(baseLink: string, options: { [key: string]: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options }: { endpoint: string; options?: Record<string, string> },
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    if (options !== undefined) this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      } else if (res.status === 426) {
        console.log(`Sorry, but today you made 100 requests error: ${res.statusText}`);
      }
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Record<string, string>, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: <T>(data: T) => void, options: Record<string, string>) {
    fetch(this.makeUrl(options, endpoint), { method })
      // eslint-disable-next-line @typescript-eslint/unbound-method
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
