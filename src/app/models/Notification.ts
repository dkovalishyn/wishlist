export interface NotificationType {
  type: number;
  description: string;
}

export interface Notification {
  userId: string;
  friendId: string;
  type: NotificationType;
}
