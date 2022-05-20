import product1 from '../assets/imgs/buxom_lipstick.png'
import product2 from '../assets/imgs/dior_hydration_cream.png'
import product3 from '../assets/imgs/occitane_rose_hand_cream.png'
import product4 from '../assets/imgs/klairs_preparation_toner.png'
import product5 from '../assets/imgs/buxom_eyebrow_pencil.png'
import product6 from '../assets/imgs/klairs_deep_clenaser_oil.png'
import product7 from '../assets/imgs/dior_glow_lipstick.png'
import product8 from '../assets/imgs/klairs_vitamin_mask.png'

export const user = {
  id: 1,
  name: "Maria",
  email: "maria@gmail.com",
  username: "iammaria",
  picture: product1,
  created_at: "2022-04-03T09:38:59.000Z",
  updated_at: "2022-04-03T09:53:22.686Z",
  points: 2000,
};

export const products = [
  {
    id: 0,
    code: '123',
    stock: 20,
    name: "Buxom Lipstick",
    image: product1,
    points: 80,
    created_at: "2022-04-03T09:53:22.686Z",
    updated_at: "2022-04-03T09:53:22.686Z",
    state: 'unredeemable'
  },
  {
    id: 1,
    code: '123',
    stock: 20,
    name: "Dior Hydration Cream",
    image: product2,
    points: 7000,
    created_at: "2022-04-03T09:53:22.686Z",
    updated_at: "2022-04-03T09:53:22.686Z",
    state: 'unredeemable'
  },
  {
    id: 2,
    code: '123',
    stock: 10,
    name: "Occitane Rose Hand Cream",
    image: product3,
    points: 2040,
    created_at: "2022-04-03T09:53:22.686Z",
    updated_at: "2022-04-03T09:53:22.686Z",
    state: 'redeemed'
  },
  {
    id: 2,
    code: '123',
    stock: 10,
    name: "Klairs Preparation Toner",
    image: product4,
    points: 150,
    created_at: "2022-04-03T09:53:22.686Z",
    updated_at: "2022-04-03T09:53:22.686Z",
    state: 'redeemable'
  },
  {
    id: 2,
    code: '123',
    stock: 10,
    name: "Buxom Eyebrow Pencil",
    image: product5,
    points: 800,
    created_at: "2022-04-03T09:53:22.686Z",
    updated_at: "2022-04-03T09:53:22.686Z",
    state: 'redeemable'
  },
  {
    id: 2,
    code: '123',
    stock: 0,
    name: "Klairs Deep Clenaser Oil",
    image: product6,
    points: 3400,
    created_at: "2022-04-03T09:53:22.686Z",
    updated_at: "2022-04-03T09:53:22.686Z",
    state: 'unavailable'
  },
  {
    id: 2,
    code: '123',
    stock: 10,
    name: "Dior Glow Lipstick",
    image: product7,
    points: 4800,
    created_at: "2022-04-03T09:53:22.686Z",
    updated_at: "2022-04-03T09:53:22.686Z",
    state: 'redeemable'
  },
  {
    id: 2,
    code: '123',
    stock: 10,
    name: "Klairs Vitamin Mask",
    image: product8,
    points: 4500,
    created_at: "2022-04-03T09:53:22.686Z",
    updated_at: "2022-04-03T09:53:22.686Z",
    state: 'redeemable'
  },
]