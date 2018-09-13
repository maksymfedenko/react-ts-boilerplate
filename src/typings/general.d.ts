declare module '*.json' {
  const value: any;
  export default value;
}

declare var API_URL: string;

interface IAction<T = any> {
  payload?: T;
  type: string;
}
