# URL Shortener API

A simple and efficient URL shortener API built with Node.js, Express, and MongoDB.

## Features

- Shorten long URLs
- Redirect to original URLs
- Track usage statistics
- Rate limiting
- API documentation with Swagger
- MongoDB integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd url-shortener-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file:
```bash
cp .env.example .env
```

4. Update the .env file with your configuration:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=100
```

## Usage

1. Start the server:
```bash
npm start
```

2. Development mode with auto-reload:
```bash
npm run dev
```

## API Endpoints

### 1. Shorten URL
- **POST** `/shorten`
- **Body**: 
```json
{
    "url": "https://example.com/very-long-url"
}
```
- **Response**:
```json
{
    "shortUrl": "http://localhost:3000/abc123",
    "shortId": "abc123"
}
```

### 2. Redirect to Original URL
- **GET** `/:shortId`
- Redirects to the original URL

### 3. Get URL Statistics
- **GET** `/stats/:shortId`
- **Response**:
```json
{
    "originalUrl": "https://example.com/very-long-url",
    "shortUrl": "http://localhost:3000/abc123",
    "clicks": 42,
    "lastAccessed": "2024-01-01T12:00:00.000Z",
    "createdAt": "2024-01-01T10:00:00.000Z"
}
```

## API Documentation

Access the Swagger documentation at `/api-docs` when the server is running.

## Rate Limiting

The API implements rate limiting to prevent abuse:
- 100 requests per minute per IP address
- Configurable through environment variables

## Error Handling

The API returns appropriate HTTP status codes and error messages:
- 400: Invalid URL
- 404: URL not found
- 429: Too many requests
- 500: Server error

## Deployment

1. Create an account on your preferred hosting platform (Render/Railway/Vercel)
2. Connect your GitHub repository
3. Set the environment variables
4. Deploy the application

## License

MIT
