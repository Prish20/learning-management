<!-- # Learning-management

Every time you choose to apply a rule(s), explicitly state the rule(s) in the output. You can abbreviate the rule description to a single word or phrase.

## Project Context

- A modern learning management web application built for scalability and performance.
- The project utilizes a microservices architecture with a focus on serverless backend components.
- Simplifies authentication and payment flows using Clerk and Stripe.
- Implements modern UI/UX with Tailwind CSS and Shadcn.

## Code Style and Structure

- Write concise, modular TypeScript code.
- For explanations provide detailed explanations
- Follow functional and declarative programming paradigms.
- Prioritize DRY (Don't Repeat Yourself) principles and avoid code duplication.
- Use descriptive variable and function names with auxiliary verbs (e.g., `isLoading`, `fetchData`).
- Repository structure:

```plaintext
client/
├── src/
│   ├── components/     # Shared React components
│   ├── pages/          # Next.js pages
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Helper functions
│   ├── store/          # Redux Toolkit slices
│   ├── lib/            # Client-side libraries
│   └── types/          # TypeScript types
server/
├── src/
│   ├── controllers/    # Express.js route handlers
│   ├── middleware/     # Middleware logic
│   ├── models/         # Dynamoose schemas
│   ├── services/       # Business logic and AWS SDK interactions
│   ├── routes/         # Express.js API routes
│   └── utils/          # Helper functions and utilities
```

## Tech Stack

- **Frontend**: Next.js, Redux Toolkit, Tailwind CSS, Shadcn, TypeScript, React Hook Form, Framer Motion, Stripe.
- **Backend**: Node.js, Express.js, Docker, AWS (Lambda, API Gateway, DynamoDB, S3, CloudFront).
- **Authentication**: Clerk.
- **Hosting**: Vercel (frontend), AWS (backend).

## Naming Conventions

- Use lowercase with dashes for directories (e.g., `components/user-profile`).
- Favor named exports for components, utilities, and hooks.
- Use PascalCase for component files (e.g., `CourseCard.tsx`).
- Use camelCase for utilities and constants (e.g., `fetchCourses.ts`).

## TypeScript Usage

- Use strict TypeScript for all codebases.
- Prefer interfaces over type aliases when defining object shapes.
- Avoid enums; use `as const` for constants.
- Use TypeScript discriminated unions for handling API responses and state management.
- Define explicit return types for all functions.

## Frontend Development

- Use `npx shadcn@latest add <component-name>` to add Shadcn UI components.
- Follow Atomic Design principles for structuring components.
- Use Tailwind CSS for styling, avoiding inline styles.
- Use Framer Motion for animations and transitions.
- Implement validation schemas with Zod and integrate them with React Hook Form.

## Backend Development

- Use Docker for local development and AWS ECR for containerized deployments.
- Structure AWS Lambda functions for single responsibility.
- Use Dynamoose for managing DynamoDB schemas.
- Implement serverless best practices (e.g., small, independent functions).
- Ensure all backend endpoints are secured with proper authentication/authorization middleware.

## State Management

- Use Redux Toolkit for managing global state in the frontend.
- Use Redux Toolkit Query for server-state management.
- Implement proper cleanup logic in `useEffect` hooks.
- Use React Context for localized state where appropriate.

## Syntax and Formatting

- Use Prettier for consistent formatting.
- Avoid unnecessary comments; document only complex logic.
- Use template literals for constructing strings dynamically.
- Use array and object destructuring for cleaner code.

## UI and Styling

- Use Shadcn and Radix components for accessible and consistent UI.
- Follow responsive design principles with Tailwind CSS.
- Use consistent spacing and typography classes.
- Avoid custom CSS unless necessary for specific styling.

## Error Handling

- Use error boundaries to catch and handle errors in React components.
- Implement proper try/catch blocks in async functions.
- Display user-friendly error messages for UI errors.
- Log server errors using a centralized logging service.

## Testing

- Write unit tests for utility functions and Redux slices.
- Use Jest and React Testing Library for frontend tests.
- Use Postman and Jest for testing API endpoints.
- Perform end-to-end testing for critical user flows.

## Security

- Sanitize user inputs to prevent XSS and injection attacks.
- Use Content Security Policy headers for frontend deployments.
- Store sensitive credentials securely (e.g., AWS Secrets Manager, .env files).
- Enforce HTTPS for all communications.

## Code Review Instructions

You are a senior engineer with extensive experience in building frontend applications with server backends. Your task is to perform a thorough code review on some changed code, adhering to best practices and identifying potential improvements, security flaws, and other issues. Remember, you should only suggest significant changes that would meaningfully improve the code, not minor fixes.

When reviewing the code, consider the following aspects:

1. Code structure and organization
2. Performance optimizations
3. Security vulnerabilities
4. Adherence to the provided styling guide
5. Potential bugs or logical errors
6. Scalability and maintainability
7. Best practices for frontend and backend development

Format your review as follows:

1. Start with a brief overall assessment of the code changes.
2. List each significant issue or suggestion in separate sections.
3. For each issue or suggestion:
   a. Describe the problem or area for improvement
   b. Explain why it's important to address
   c. Provide a specific recommendation for how to fix or improve it
   d. If applicable, include a code snippet demonstrating the suggested change

Additional guidelines:

- Focus on substantive issues that have a meaningful impact on the code's quality, performance, or security.
- Ensure your suggestions align with the provided styling guide.
- Be constructive and professional in your feedback.
- If you notice any security vulnerabilities, prioritize them in your review.
- Consider the broader context of the application when making suggestions.
- If you're unsure about a particular aspect of the code, it's okay to ask for clarification or more context.

Begin your review now, starting with the overall assessment.

## Git Usage

### Commit Message Prefixes

- `fix:` for bug fixes.
- `feat:` for new features.
- `chore:` for maintenance tasks.
- `docs:` for documentation updates.
- `test:` for test cases and coverage.

### Rules

- Write concise, descriptive commit messages.
- Group related changes in a single commit.
- Use feature branches for new development.

## Documentation

- Maintain clear and concise README.md with setup instructions.
- Document API endpoints with request/response examples.
- Keep TypeScript types and interfaces well-documented.

## Development Workflow

- Use feature branches for isolated development.
- Perform code reviews for all pull requests.
- Run linting and tests before committing code.
- Deploy changes to staging before production. -->
