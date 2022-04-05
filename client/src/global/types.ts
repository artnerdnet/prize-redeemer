export type TDataContext = {
  user: IUser | {},
  products: Array<IProduct> | [],
  error: {
    message: string | null;
  };
  loading: boolean;
};

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  points: number;
  picture: string;
  created_at: string;
  updated_at: string;
}

export interface IProduct {
  name: string;
  points: number;
  image: string;
  units: number;
  created_at: string;
  updated_at: string;
}

export type TDataContextProps = {
  dataContext: TDataContext | undefined;
  setDataContext: React.Dispatch<
  React.SetStateAction<TDataContext | undefined>
  >;
};

export type TDataContextProviderProps = {
  children?: React.ReactNode;
  initialValue?: TDataContext;
};
