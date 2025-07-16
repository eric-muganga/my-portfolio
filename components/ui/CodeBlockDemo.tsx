"use client";

import CodeBlock from "./CodeBlock";
import InlineCode from "./InlineCode";

export default function CodeBlockDemo() {
  const reactExample = `import React, { useState, useCallback } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = useCallback(() => {
    if (input.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: input,
        completed: false
      }]);
      setInput('');
    }
  }, [input]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Add a todo..."
        />
        <button onClick={addTodo} className="px-4 py-2 bg-blue-500 text-white rounded">
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="p-2 border rounded">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;`;

  const javaExample = `@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        
        Pageable pageable = PageRequest.of(page, size);
        Page<User> users = userService.findAll(pageable);
        
        return ResponseEntity.ok()
            .header("X-Total-Count", String.valueOf(users.getTotalElements()))
            .body(users.getContent());
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody CreateUserRequest request) {
        User user = userService.createUser(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.findById(id)
            .map(user -> ResponseEntity.ok(user))
            .orElse(ResponseEntity.notFound().build());
    }
}`;

  const typeScriptExample = `interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}

class ApiClient {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  setAuthToken(token: string): void {
    this.headers['Authorization'] = \`Bearer \${token}\`;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(\`\${this.baseUrl}\${endpoint}\`, {
        method: 'GET',
        headers: this.headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return {
        data,
        status: 'success',
      };
    } catch (error) {
      return {
        data: null as T,
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async post<T, U>(endpoint: string, body: U): Promise<ApiResponse<T>> {
    // Implementation similar to get method
    // ... rest of the implementation
  }
}`;

  return (
    <div className="space-y-8 p-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">
          Code Block Components Demo
        </h2>
        <p className="text-gray-300 mb-6">
          Here are examples of our syntax-highlighted code blocks with{" "}
          <InlineCode>copy-to-clipboard</InlineCode> functionality and{" "}
          <InlineCode>line numbers</InlineCode>.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-3">
          React Component Example
        </h3>
        <CodeBlock language="jsx" filename="TodoApp.jsx">
          {reactExample}
        </CodeBlock>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-3">
          Spring Boot Controller
        </h3>
        <CodeBlock language="java" filename="UserController.java">
          {javaExample}
        </CodeBlock>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-3">
          TypeScript API Client
        </h3>
        <CodeBlock language="typescript" filename="ApiClient.ts">
          {typeScriptExample}
        </CodeBlock>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-3">
          Inline Code Examples
        </h3>
        <p className="text-gray-300">
          You can use <InlineCode>useState</InlineCode> for state management,{" "}
          <InlineCode>useEffect</InlineCode> for side effects, and{" "}
          <InlineCode>useCallback</InlineCode> for memoizing functions in React.
        </p>
      </div>
    </div>
  );
}
