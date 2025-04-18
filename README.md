# Node SSE Demo

This project demonstrates how to implement Server-Sent Events (SSE) with Node.js and Express. It shows both basic EventSource usage and POST requests with @microsoft/fetch-event-source.

## Features

- Real-time updates from server to client using SSE
- Support for GET requests using native EventSource API
- Support for POST requests using @microsoft/fetch-event-source library
- Simple demo interface with time updates

## Installation

```bash
# Clone the repository
git clone https://github.com/GXiang314/node-sse
cd node-sse

# Install dependencies
npm install
```

## Usage

1. Start the server:

    ```bash
    npm run dev
    ```

2. Visit <http://localhost:3000> to view the demo interface in your browser.

## API Endpoints

### GET /api/sse

Establishes an SSE connection and sends the current time every second.

### POST /api/sse

Accepts a JSON body with a `name` parameter and returns personalized time updates.

## Demo Interface

The demo interface includes:

- A section showing real-time time updates using GET requests
- A form to send POST requests with custom data
- Real-time responses displayed on the page

## Dependencies

- Express: Web server framework
- Compression: Response compression middleware
- CORS: Cross-Origin Resource Sharing middleware
- Nodemon: Development tool for auto-restarting server

## Technologies Used

- Node.js
- Express.js
- Server-Sent Events (SSE)
- @microsoft/fetch-event-source (for POST requests with SSE)

## License

MIT
