type Customer = {
  email: string;
  name: string;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};

type Item = {
  item_id: Int;
  name: string;
  price: float;
  quantity: int;
};

type TrackingItems = {
  customer_id: String;
  items: Item[];
  customer: Customer;
};

type TrackingItemsList = {
  name: ID;
  value: TrackingItems;
};

type OrderResponse = {
  value: Order;
};

type Order = {
  carrier: string;
  createdAt: Date;
  shippingCost: Int;
  trackingId: string;
  Address: string;
  City: string;
  Lat: float;
  Lng: float;
  trackingItems: TrackingItems;
};
