export type TApiResponse = {
  status: number;
  statusText: string;
  data: any;
  error: any;
  loading: boolean;
};

export type TPostApiResponse = TApiResponse & {
  postApiData: Function;
};

export type TGetApiResponse = TApiResponse & {
  getApiData: Function;
};

