# DocuMind

A full-stack web application for querying and analyzing PDF documents using AI-powered chat interface.

## Overview

DocuMind is a modern web application that allows users to upload PDF files and interact with them through a natural language chat interface. The backend processes queries against uploaded documents and returns intelligent, Markdown-formatted responses.

## Project Structure

```
DocuMind/
├── FE/                          # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat.tsx        # Main chat interface
│   │   │   └── Button.tsx      # Reusable button component
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── ...
├── BE/                          # Backend (Node.js/Express)
│   ├── api/
│   │   └── v1/
│   │       └── chat           # Chat endpoint
│   ├── server.js
│   └── ...
└── README.md
```

## Features

- **PDF Upload** - Upload and store PDF documents
- **PDF SUmmary** - Get summary of the document
- **AI Chat Interface** - Query PDFs using natural language
- **Markdown Support** - Responses rendered with Markdown formatting
- **Real-time Loading** - Visual feedback while processing queries
- **Clean UI** - Modern, user-friendly interface with Tailwind CSS

## Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Axios** - HTTP client
- **React Markdown** - Markdown rendering
- **Tailwind CSS** - Styling

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Port** - 3000

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Frontend Setup

```bash
cd FE
npm install
npm start
# or
npm run dev
```

### Backend Setup

```bash
cd BE
npm install
npm start
```

Ensure the backend is running on `http://localhost:3000` before starting the frontend.

## Usage

1. **Start Backend** - Run backend server on port 3000
2. **Start Frontend** - Run React development server
3. **Upload PDFs** - Upload documents through the interface
4. **Query** - Type questions about your PDFs in the chat input
5. **View Responses** - Responses appear in Markdown format below the input

### Chat Interface Commands

- Type your query in the input field
- Press `Enter` or click the send button (➤)
- Loading indicator (⏳) shows when processing
- Responses display as formatted Markdown

## API Endpoints

### Chat Query
```
GET /api/v1/chat
Parameters:
  - text (string): The user query
Response:
  {
    "message": "Markdown formatted response"
  }
```

## Configuration

### Frontend
- API URL: `http://localhost:3000` (update in `Chat.tsx` if needed)
- Tailwind CSS classes for responsive design

### Backend
- Port: 3000 (modify in backend configuration if needed)
- CORS enabled for frontend origin

## Development

### Frontend Development
```bash
cd FE
npm run dev        # Development mode with hot reload
npm run build      # Production build
npm test           # Run tests
```

### Backend Development
```bash
cd BE
npm run dev        # Development mode with nodemon
npm start          # Production mode
```

## Features in Detail

### Chat Component (`FE/src/components/Chat.tsx`)
- Real-time input validation
- Automatic input clearing after submission
- Loading state management
- Markdown rendering for formatted responses
- Error handling with user-friendly messages
- Keyboard support (Enter to send)

### Button Component (`FE/src/components/Button.tsx`)
- Reusable button with dynamic text
- Disabled state during loading
- Custom styling with Tailwind CSS

## Error Handling

- **Empty Query** - "Please Enter the query!"
- **API Errors** - "Error Fetching Details"
- **Network Issues** - Logged to console with user notification

## Future Enhancements

- [ ] PDF upload functionality
- [ ] Document management (list, delete, update)
- [ ] User authentication
- [ ] Query history
- [ ] Multiple document support
- [ ] Export responses
- [ ] Dark mode theme

## Troubleshooting

### Frontend can't connect to backend
- Ensure backend is running on `http://localhost:3000`
- Check CORS configuration in backend
- Verify API endpoint in `Chat.tsx`

### Backend errors
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check port 3000 is not in use

### Markdown not rendering
- Ensure `react-markdown` is installed
- Check response format from backend

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is licensed under the **MIT License** - see the LICENSE file for details.

### MIT License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

For the full license text, create a `LICENSE` file in the root directory with the MIT license.

## Support

For issues or questions, please open an issue or contact the development team.

---

**Last Updated:** April 12, 2026