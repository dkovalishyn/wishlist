export interface Person {
  userId: string;
  firstName: string;
  lastName: string;
  friends: string[];
  followers: string[];
  following: string[];
}

export interface NotificationType {
  type: number;
  description: string;
}

export interface Notification {
  userId: string;
  friendId: string;
  type: NotificationType;
}

