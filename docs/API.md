# Girlz Platform API Documentation

## Authentication

### Sign Up
```
POST /api/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "username": "username",
  "password": "password123"
}
```

### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

## Posts

### Get Feed
```
GET /api/feed?page=1&limit=20
Authorization: Bearer {token}
```

### Create Post
```
POST /api/posts
Authorization: Bearer {token}
Content-Type: multipart/form-data

{
  "content": "Post content",
  "media": [file1, file2]
}
```

## Users

### Get User Profile
```
GET /api/users/:id
```

### Update Profile
```
PUT /api/users/me
Authorization: Bearer {token}
Content-Type: application/json

{
  "bio": "Updated bio",
  "website": "https://example.com"
}
```
