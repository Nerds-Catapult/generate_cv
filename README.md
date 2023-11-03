Creating a well-structured README for your project is essential for helping others understand how your CV generator website works and how to set it up. Here's a template for your project's README:

# CV Generator Website

CV Generator is a web application that allows users to create and customize their resumes with ease. This project consists of a frontend built with React and a backend built with Go.

## Authors

- [Gibson Kemboi](https://github.com/Domains18)
- [Shadrack Meoli](https://github.com/shadmeoli)

This section lets readers of your README know who contributed to the project and provides links to the authors' GitHub profiles for more information about them.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create and customize professional resumes.
- User-friendly interface for adding personal and professional details.
- Export and download resumes in PDF format.
- ... (Add more features as your project develops)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed for the frontend (you can download them [here](https://nodejs.org/)).
- Go installed for the backend (you can download it [here](https://golang.org/dl/)).
- PostgreSQL database set up for storing user data (configure the database connection details in the backend).

## Getting Started

### Frontend

1. Navigate to the `client` directory:

```shell
cd client
```

2. Install dependencies:

```shell
npm install
```

3. Start the development server:

```shell
npm run dev
```

The frontend will be accessible at `http://localhost:3000`.

### Backend

1. Navigate to the `server` directory:

```shell
cd server
```

2. Install Go dependencies:

```shell
go mod tidy
```

3. Start the Go server:

```shell
go run cmd/main.go
```

The backend server will be accessible at `http://localhost:8080`.

## Project Structure

- `client`: Frontend directory containing the React application.
- `server`: Backend directory containing the Go API and server.
  - `api`: API logic and routes.
  - `internal`: Internal packages, including database and middleware.
  - `web`: Frontend assets (HTML, CSS, etc.).

## Technologies Used

- React for the frontend.
- Go for the backend.
- PostgreSQL for the database.
- Tailwind CSS for styling.
- Vite for the frontend build tool.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes.
- Test your changes thoroughly.
- Create a pull request with a clear description of the changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to fit your project's specific details and update it as your project evolves. A well-structured README helps potential contributors and users understand your project and how to get started with it.
