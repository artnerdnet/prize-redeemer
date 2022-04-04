export type TDataContext = {
  user: User | {},
  products: Array<Product> | [],
  error: {
    message: string | null;
  };
  loading: boolean;
};

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  points: number;
  picture: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
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
