export interface Person {
  userId: string;
  firstName: string;
  lastName: string;
  avatar: {
    path: string,
    mimeType: string,
  },
  friends: string[];
  followers: string[];
  following: string[];
}

