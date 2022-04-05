import { IProduct } from "../../global/types"

export type TProductCardProps = {
  product: IProduct,
  state: 'redeemed' | 'unredeemable' | 'unavailable';
};
