export interface User {
  id: string
  email: string
  username: string
  firstName?: string
  lastName?: string
  avatar?: string
  verified: boolean
  createdAt: Date
}

export interface Post {
  id: string
  content: string
  userId: string
  user: User
  media: Media[]
  likes: number
  comments: number
  createdAt: Date
}

export interface Media {
  id: string
  type: 'image' | 'video' | 'carousel'
  url: string
  thumbnail?: string
}

export interface Comment {
  id: string
  content: string
  userId: string
  user: User
  postId: string
  likes: number
  createdAt: Date
}

export interface Message {
  id: string
  content: string
  userId: string
  user: User
  conversationId: string
  read: boolean
  createdAt: Date
}

export interface Conversation {
  id: string
  name?: string
  isGroup: boolean
  avatar?: string
  members: User[]
  lastMessage?: Message
  updatedAt: Date
}