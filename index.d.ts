declare module '*.png';
declare module '*.mp3';

type Environment = 'development' | 'production' | 'stage';

type CheckmateToken = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  created_at: number;
};

type LocationDetails = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  url: string;
  brand: string;
  time_zone: string;
  pos: string;
  phone_number: string;
};

type CheckmateTokenDetails = {
  resource_owner_id: string;
  scopes: string[];
  expires_in: number;
  application: {
    uid: string;
  };
  created_at: number;
};

type Token = {
  sub: string;
  aud: string;
  email_verified: boolean;
  token_use: string;
  auth_time: number;
  iss: string;
  'cognito:username': string;
  'custom:isUser': string;
  exp: number;
  iat: number;
  phone_number: string;
  event_id: string;
  phone_number_verified: true;
  name: string;
};

type IntegrationToken = {
  PK: string;
  SK: string;
  token: string;
  service: string;
};

type MeetingLocation = {
  lat: number,
  lng: number,
  name: string,
}

type DynamoSchool = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  id: string;
  name: string;
  geohash: string;
  dropoffLocations: string[];
  meetingLocations: MeetingLocation[];
  image: string;
};

type School = {
  id: string;
  name: string;
  geohash: string;
  dropoffLocations: string[];
  meetingLocations: MeetingLocation[];
  image: string;
};

type CheckmateData = {
  name: string;
  location: {
    id: string;
    name: string;
  };
  description: string;
  hours: {
    sunday: {
      start_time: string;
      end_time: string;
    }[];
    monday: {
      start_time: string;
      end_time: string;
    }[];
    tuesday: {
      start_time: string;
      end_time: string;
    }[];
    wednesday: {
      start_time: string;
      end_time: string;
    }[];
    thursday: {
      start_time: string;
      end_time: string;
    }[];
    friday: {
      start_time: string;
      end_time: string;
    }[];
    saturday: {
      start_time: string;
      end_time: string;
    }[];
  };
  sections: {
    id: string;
    name: string;
    description: string | null | undefined;
    items: {
      id: string;
      name: string;
      description: string | undefined;
      price: number;
      image_urls: {
        resolution: string | undefined
        link: string;
      }[];
      suspend_until: string;
      tax_rate: number | undefined;
      nutritional_info: string | undefined;
      modifier_groups: {
        id: string;
        name: string;
        description: string | undefined;
        minimum_amount: number;
        maximum_amount: number;
        modifiers: {
          id: string;
          name: string;
          description: string | undefined;
          price: number;
          suspend_until: string;
          nutritional_info: string | undefined;
        }[];
      }[];
    }[];
  }[];
}

type ChowlyMenu = {
  sections: {
    section_id: string;
    title: string;
    subtitle: string;
    service_availability: {
      enabled: boolean;
      day_of_week: string;
      time_periods: [
        {
          // 24hr clock in local time
          start_time: string;
          end_time: string;
        }
      ];
    }[];
    subsections: {
      subsection_id: string;
      title: string;
      items: {
        title: string;
        disable_instructions: boolean;
        price: number;
        image_url: string;
        currency_code: string;
        item_id: string;
        tax_rate: number;
        external_id: string;
        item_description: string;
        is_alcohol: boolean;
        suspend_until: number; // epoch time
        customizations: {
          title: string;
          customization_id: string;
          max_permitted: number;
          min_permitted: number;
          customization_options: {
            title: string;
            price: number;
            external_id: string;
            customization_option_id: string;
            suspend_until: number; // epoch time
          }[];
        }[];
      }[];
    }[];
  }[];
};

type ChowlyOrder = {
  customer: {
    id: string;
    name: string;
    phone: string;
    email: string | null;
    address1: string | null;
    address2: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    cross_street: string | null;
    special_instructions: string | null;
  };
  info: {
    id: string;
    include_utensils: true;
    scheduled_time: string | null;
    pickup_code: string | null;
    service_type: 'Delivery' | 'Pick-Up';
    payment_is_cash: boolean;
    payment_type: 'cash' | 'credit';
    tip_payment_is_cash: boolean;
    tip_payment_type: 'cash' | 'credit';
    subtotal: string;
    delivery_charge: string;
    sales_tax: string;
    tip: string;
    total: string;
    coupon_description: string | null;
    coupon_amount: string | null;
  };
  items: {
    id: string;
    name: string;
    external_id: string | null;
    price: string;
    quantity: string;
    notes: string | null;
    mods: {
      id: string;
      name: string;
      category: string | null;
      external_id: string | null;
      price: string;
      quantity: string;
    }[];
  }[];
};

type CheckmateOrder = {
  location?: {
    id: string;
    name?: string;
    timezone?: string;
  };
  meta: {
    id: string;
    type: 'catering' | 'driver_delivery' | 'pickup' | 'restaurant_delivery';
    notes?: string;
    requested_at?: string;
  };
  customer: {
    first_name: string;
    last_name?: string;
    phone?: string;
    email?: string;
    address?: {
      street: string;
      street2?: string;
      city: string;
      state: string;
      postal_code: string;
    };
  };
  items: {
    group_name?: string;
    name: string;
    Id?: string;
    price?: number;
    quantity: number;
    special_request?: string;
    name_label?: string;
    modifiers?: {
      group_name?: string;
      Id: string;
      name: string;
      price?: number;
      quantity: number;
    }[];
  }[];
  payment: {
    cash_payment: boolean;
    tip?: number;
    service_fees?: [];
  }
};

type DynamoRestaurant = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  GSI2PK: string;
  GSI2SK: string;
  id: string;
  externalId: string; // e.g chowly api key
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  phoneNumber: string;
  owner: DynamoSubUser;
  hours: DynamoRestaurantHours[][];
  thumbnail: string;
  emoji: string;
  averagePickupTime: EstimatedTimeMinutes;
  menu: MenuCategory[];
  rewardItemName?: string | undefined;
  rewardItemNames?: string[] | undefined;
  rewardItems: MenuItem[];
  discountAmt: number;
  cashback: number;
  toastUrl?: string | undefined;
  kftUrl?: string | undefined;
  manualOrderUrl?: string | undefined;
  estimatedPickupTime: {
    timeBegin: string;
    timeEnd: string;
    estimatedTime: number;
    dayOfWeek: number; // 0 is Sunday, 6 is Saturday
  }[];
  createdAt: string;
  updatedAt: string;
  commission: number;
};

type DynamoRestaurantHours = {
  open: string;
  close: string;
};

type Context = {
  user: ContextUser;
};

type ContextUser = {
  PK: string;
  SK: string;
  cognitoId: string;
  phoneNumber: string;
  name: string;
  admin: boolean;
};

type PNSUser = {
  title: string;
  body: string;
  deviceToken: string;
  platform: string;
  phoneNumber: string | undefined;
  sendText: boolean | undefined;
};

type PNSMessage = {
  title: string;
  body: string;
  users: {
    deviceToken: string;
    platform: string;
    phoneNumber: string | undefined;
    sendText: boolean | undefined;
  }[];
};

type PNSListMessage = {
  geohash: string | undefined;
  groupIds: string[] | undefined;
  title: string;
  body: string;
};

type Referral = {
  id: string;
  code: string;
  status: 'PENDING' | 'USED' | 'CLOSED';
  user: User;
  referredUser: User | undefined;
  usedAt: string | undefined;
  referredUserClaimed: boolean | undefined;
};

type User = {
  id: string;
  isUser: boolean | undefined;
  name: string;
  phoneNumber: string | undefined;
  city: string | undefined;
  pfp: string | undefined;
  username: string | undefined;
  restaurantId: string | undefined;
  email: string | undefined;
  referralCode: string | undefined;
  geohash: string | undefined;
  house: string | undefined;
  dropoffLocation: string | undefined;
  meetingLocation: MeetingLocation | undefined;
  meetingLocations: MeetingLocation[] | undefined;
  referrerUser: User | undefined;
  runsStarted: number | undefined;
  runsJoined: number | undefined;
  runPoints: number | undefined;
  school: School | undefined;
  contactUserIds: string[] | undefined;
  favoriteRestaurantIds: string[] | undefined;
  notificationSettings: boolean[] | undefined;
  notificationSettingsMap:
    | {
        notifications: boolean | undefined;
        friendsOnly: boolean | undefined;
        textNotifs: boolean | undefined;
        mealTimes: boolean | undefined;
      }
    | undefined;
  claimedPromo: boolean | undefined;
  claimedFirstRunGem: boolean | undefined;
  homeLocation: MeetingLocation | undefined;
  disabled: boolean;
  lastLoginTime: string;
};

type FriendRequest = {
  id: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  sender: User;
  receiver: User;
  createdAt: string;
};

type FriendStatus = {
  id: string;
  status: 'FRIENDS' | 'RECEIVED' | 'SENT' | 'NONEXISTENT';
};

type Option = {
  id: string;
  name: string;
  price?: number | undefined;
  points?: number | undefined;
  suspendUntil?: number | undefined;
  externalId?: string | undefined;
  choices?: OptionChoice[];
};

type OptionChoice = {
  id: string;
  name: string;
  price?: number | undefined;
  points?: number | undefined;
  suspendUntil?: number | undefined;
  externalId?: string | undefined;
};

type FoodOption = {
  id: string;
  name: string;
  numChoices: number | undefined;
  minChoices: number | undefined;
  required: boolean;
  options: Option[];
};

type MenuReward = {
  points: number | undefined;
  discount: number | undefined;
  discountText: string | undefined;
};

type MenuItem = {
  id: string;
  name: string;
  description?: string | undefined;
  price: number;
  image?: string | undefined;
  foodOptions?: FoodOption[] | undefined;
  reward?: MenuReward | undefined;
  itemChoices?: MenuItem[] | undefined;
  isAlcohol?: boolean | undefined;
  restaurant?: Restaurant | undefined;
  suspendUntil?: number | undefined;
  taxRate: number;
  externalId?: string | undefined;
};

type MenuCategory = {
  id: string;
  name: string;
  menuItems: MenuItem[];
  availability: {
    enabled: boolean;
    dayOfWeek: number;
    timePeriods: {
      startTime: string;
      endTime: string;
    }[];
  }[];
};

type RestaurantHours = {
  open: string;
  close: string;
};

type EstimatedTimeMinutes = {
  begin: number;
  end: number;
};

type Restaurant = {
  id: string;
  externalId: string;
  name: string | undefined;
  description: string | undefined;
  address: string | undefined;
  city: string | undefined;
  state: string | undefined;
  phoneNumber: string | undefined;
  owner: User | undefined;
  hours: RestaurantHours[][] | undefined;
  thumbnail: string | undefined;
  menu: MenuCategory[] | undefined;
  emoji: string | undefined;
  averagePickupTime: EstimatedTimeMinutes | undefined;
  rewardItemName: string | undefined;
  rewardItemNames: string[] | undefined;
  rewardItems: MenuItem[] | undefined;
  discountAmt: number | undefined;
  cashback: number | undefined;
  lat: number;
  lng: number;
  commission: number | undefined;
};

type GroupJoinRequest = {
  id: string;
  group: Group;
  user: User;
};

type Group = {
  id: string;
  name: string;
  inviteCode: string | undefined;
  image: string | undefined;
  members: User[] | undefined;
  joinRequests: GroupJoinRequest[] | undefined;
  isPublic: boolean | undefined;
};

type RewardPoints = {
  id: string;
  points: number;
  userId: string;
  restaurantId: string;
  restaurant: Restaurant;
};

type PartyStatus = {
  OPEN: 'OPEN';
  INPROGRESS: 'INPROGRESS';
  CLOSED: 'CLOSED';
  UNPAID: 'UNPAID';
};

type EstimatedTimeWindow = {
  begin: string;
  end: string;
};

type Party = {
  id: string;
  windowOpenTime: string | undefined;
  windowCloseTime: string | undefined;
  isPublic: boolean | undefined;
  usersOpenTo: User[] | undefined;
  groupsOpenTo: Group[] | undefined;
  isClaimed: boolean;
  openTo: 'FRIENDS' | 'SCHOOL' | undefined;
  deliverer: User | undefined;
  status: 'OPEN' | 'INPROGRESS' | 'CLOSED' | 'UNPAID' | undefined;
  restaurantFinishedPreparingTimeWindow: EstimatedTimeWindow | undefined;
  restaurantFinishedPreparingMinutes: number | undefined;
  estimatedDeliveryTimeWindow: EstimatedTimeWindow | undefined;
  maxOrders: number | undefined;
  totalCost: number | undefined;
  orders: Order[] | undefined;
  restaurant: Restaurant | undefined;
  dropoffLocation: string | undefined;
  meetingLocation: MeetingLocation | undefined;
  shareLink: string | undefined;
  notified: boolean | undefined;
  createdAt: string | undefined;
  updatedAt: string | undefined;
};

type MenuItemPreset = {
  id: string;
  menuItemId: string;
  name: string | undefined;
  foodOptions: OrderItemFoodOption[];
  quantity: number | undefined;
};

type OrderItemOptionChoice = {
  optionId: string;
  name: string;
  price?: number | undefined;
  points?: number | undefined;
}

type OrderItemOption = {
  optionId: string;
  name: string;
  price?: number | undefined;
  points?: number | undefined;
  choices?: OrderItemOptionChoice[]; 
};

type OrderItemFoodOption = {
  foodOptionId: string;
  name: string;
  options: OrderItemOption[];
};

type OrderItem = {
  id: string;
  menuItem: MenuItem;
  discount: number | undefined;
  price: number | undefined;
  points: number | undefined;
  comment: string | undefined;
  quantity: number | undefined;
  foodOptions: OrderItemFoodOption[] | undefined;
};

type OrderStatus = {
  PENDING: 'PENDING';
  OPEN: 'OPEN';
  CLOSED: 'CLOSED';
  UNPAID: 'UNPAID';
};

type Order = {
  id: string;
  party: Party | undefined;
  customer: User;
  deliverer: User | undefined;
  items: OrderItem[];
  restaurant: Restaurant | undefined;
  restaurantFinishedPreparingTimeWindow: EstimatedTimeWindow | undefined;
  restaurantFinishedPreparingMinutes: number | undefined;
  estimatedDeliveryTimeWindow: EstimatedTimeWindow | undefined;
  priceBeforeDiscount: number | undefined; // sum of item prices regardless of free or not
  discount: number | undefined; // amount of money subtracted via free food
  priceAfterDiscount: number | undefined; // priceBeforeDiscount - discount
  tax: number | undefined; // 7% tax calculated from priceAfterDiscount
  tip: number | undefined; // tip
  totalPrice: number; // priceAfterDiscount + tax + tip
  isPaid: boolean;
  status: 'PENDING' | 'OPEN' | 'CLOSED' | 'UNPAID';
  comment: string | undefined;
  orderSentTime: string | undefined;
  dropoffLocation: string | undefined;
  meetingLocation: MeetingLocation | undefined;
  claimed: boolean | undefined;
  createdAt: string | undefined;
};

type NotificationSettingsMap = {
  notifications: boolean;
  friendsOnly: boolean;
  textNotifs: boolean;
  mealTimes: boolean;
};

type DynamoUser = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  GSI2PK: string | undefined;
  GSI2SK: string | undefined;
  id: string;
  isUser: boolean;
  restaurantId: string | undefined;
  name: string;
  phoneNumber: string;
  email: string | undefined;
  pfp: string;
  city: string;
  geohash: string;
  username: string;
  isAdmin: boolean;
  isAmbassador: boolean;
  referralCode: string;
  referrerUser: DynamoUser | undefined;
  deviceToken: string;
  platform: string;
  house: string;
  dropoffLocation: string;
  meetingLocation: MeetingLocation;
  meetingLocations: MeetingLocation[];
  runsStarted: number;
  runsJoined: number;
  runPoints: number;
  clubCodes: string[];
  createdAt: string;
  updatedAt: string;
  school: DynamoSchool;
  stripeCustomerId: string | undefined;
  stripePaymentMethodId: string | undefined;
  contactUserIds: string[];
  favoriteRestaurantIds: string[];
  notificationSettings: boolean[];
  notificationSettingsMap: NotificationSettingsMap;
  claimedPromo: boolean;
  claimedFirstRunGem: boolean;
  disabled: boolean; 
  lastLoginTime: string; 
  homeLocation: MeetingLocation | undefined;
};

type DynamoDropoffLocations = {
  PK: string;
  SK: string;
  id: string;
  locations: string[];
};

type DropoffLocations = {
  id: string;
  locations: string[];
  school: School;
};

type ProfileUser = {
  id: string;
  name: string;
  pfp: string;
  referrerUser: User | undefined;
  runsStarted: number;
  runsJoined: number;
  school: School;
  disabled: boolean; 
  lastLoginTime: string; 
};

type ReferralStatus = {
  PENDING: 'PENDING';
  USED: 'USED';
  CLOSED: 'CLOSED';
};

type DynamoReferral = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  id: string;
  code: string;
  status: 'PENDING' | 'USED' | 'CLOSED';
  user: DynamoSubUser;
  referredUser: DynamoSubUser | undefined;
  usedAt: string | undefined;
  referredUserClaimed: boolean | undefined;
  createdAt: string;
  updatedAt: string;
};

type DynamoSubUser = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  id: string;
  name: string;
  username: string;
  pfp: string;
  phoneNumber: string;
  deviceToken: string;
  platform: string;
  runsStarted: number;
  runsJoined: number;
  runPoints: number;
  isAdmin: boolean;
  isAmbassador: boolean;
  school?: School | undefined;
  notificationSettingsMap: NotificationSettingsMap;
  disabled: boolean; 
  lastLoginTime: string; 
};

type DynamoFriend = {
  PK: string;
  SK: string;
  friend: DynamoSubUser;
  createdAt: string;
  updatedAt: string;
};

type DynamoFriendRequest = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  GSI2PK: string;
  GSI2SK: string;
  id: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  sender: DynamoSubUser;
  receiver: DynamoSubUser;
  createdAt: string;
  updatedAt: string;
};

type DynamoSubGroup = {
  PK: string;
  SK: string;
  id: string;
  name: string;
  inviteCode: string;
  image: string | undefined;
};

type DynamoGroupMember = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  group: DynamoSubGroup;
  user: DynamoSubUser;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
};

type DynamoGroup = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  GSI2PK: string;
  GSI2SK: string;
  id: string;
  image: string;
  geohash: string;
  name: string;
  isPublic: boolean;
  inviteCode: string;
  createdAt: string;
  updatedAt: string;
};

type DynamoGroupInvite = {
  PK: string;
  SK: string;
  inviteCode: string;
  groupId: string;
  createdAt: string;
  updatedAt: string;
};

type DynamoGroupJoinRequest = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  id: string;
  group: DynamoSubGroup;
  user: DynamoSubUser;
  createdAt: string;
  updatedAt: string;
};

type DynamoRewardPoints = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  id: string;
  points: number;
  userId: string;
  restaurantId: string;
  restaurant: DynamoSubRestaurant;
  createdAt: string;
  updatedAt: string;
};

type DynamoSubRestaurant = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  id: string;
  externalId: string;
  name: string;
  thumbnail: string;
  averagePickupTime: EstimatedTimeMinutes;
  rewardItemName?: string | undefined;
  rewardItemNames?: string[] | undefined;
  discountAmt: number | undefined;
  cashback: number;
  emoji: string;
  rewardItems: MenuItem[];
  toastUrl?: string | undefined;
  lat: number;
  lng: number;
  commission: number;
};

type DynamoRewardItem = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  id: string;
  reward: MenuReward;
  name: string;
  description: string;
  price: number;
  image: string;
  restaurant: DynamoSubRestaurant;
};

type DynamoTimeWindow = {
  begin: string;
  end: string;
};

type DynamoSubParty = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  GSI2PK: string;
  GSI2SK: string;
  GSI3PK: string;
  GSI3SK: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

type DynamoMenuItemPreset = {
  PK: string;
  SK: string;
  id: string;
  menuItemId: string;
  name: string;
  foodOptions: DynamoFoodOption[];
  quantity: number;
  createdAt: string;
  updatedAt: string;
};

type DynamoOptionChoice = {
  optionId: string;
  name: string;
  price?: number | undefined;
  points?: number | undefined;
}

type DynamoOption = {
  optionId: string;
  name: string;
  price?: number | undefined;
  points?: number | undefined;
  choices?: DynamoOptionChoice[]; 
};

type DynamoFoodOption = {
  foodOptionId: string;
  name: string;
  options: DynamoOption[];
};

type DynamoOrderItem = {
  id: string;
  menuItem: MenuItem;
  discount: number;
  price: number;
  points: number;
  quantity: number;
  comment: string;
  foodOptions: DynamoFoodOption[];
};

type DynamoOrder = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  GSI2PK: string;
  GSI2SK: string;
  GSI3PK: string;
  GSI3SK: string;
  id: string;
  party: DynamoSubParty;
  customer: DynamoSubUser;
  deliverer: DynamoSubUser;
  items: DynamoOrderItem[];
  restaurant: DynamoSubRestaurant;
  priceBeforeDiscount: number;
  priceAfterDiscount: number;
  discount: number;
  tip: number;
  tax: number;
  totalPrice: number;
  isPaid: boolean;
  chargeId: string;
  paymentId: string;
  restaurantFinishedPreparingTimeWindow: DynamoTimeWindow | undefined;
  restaurantFinishedPreparingMinutes: number | undefined;
  estimatedDeliveryTimeWindow: DynamoTimeWindow | undefined;
  status: 'PENDING' | 'OPEN' | 'CLOSED' | 'UNPAID';
  comment: string;
  orderSentTime: string | undefined;
  dropoffLocation: string;
  meetingLocation: MeetingLocation;
  claimed: boolean;
  createdAt: string;
  updatedAt: string;
};

type DynamoParty = {
  PK: string;
  SK: string;
  GSI1PK: string;
  GSI1SK: string;
  GSI2PK: string;
  GSI2SK: string;
  GSI3PK: string;
  GSI3SK: string;
  id: string;
  paymentId: string;
  windowOpenTime: string;
  windowCloseTime: string;
  windowOpenMinutes: number;
  sendOrderSF: string;
  isPublic: boolean;
  usersOpenTo: DynamoSubUser[];
  groupsOpenTo: DynamoSubGroup[];
  isClaimed: boolean;
  deliverer: DynamoSubUser;
  status: 'OPEN' | 'INPROGRESS' | 'CLOSED' | 'UNPAID';
  restaurant: DynamoSubRestaurant;
  restaurantFinishedPreparingTimeWindow: DynamoTimeWindow | undefined;
  restaurantFinishedPreparingMinutes: number | undefined;
  estimatedDeliveryTimeWindow: DynamoTimeWindow | undefined;
  maxOrders: number;
  totalCost: number;
  dropoffLocation: string;
  meetingLocation: MeetingLocation;
  shareLink: string;
  openTo: 'FRIENDS' | 'SCHOOL';
  notified: boolean;
  displayVendorPortal: boolean;
  scriptOrderStatus: 'NOTSUBMITTED' | 'INPROGRESS' | 'SUBMITTED' | undefined;
  createdAt: string;
  updatedAt: string;
};

type DynamoItemToUpdate = {
  PK: string;
  SK: string;
  id: string;
  userId: string;
  pfp: string | undefined;
};

type DynamoUnsuggested = {
  PK: string;
  SK: string;
  userId: string;
};
