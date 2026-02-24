import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiDotnet,
  SiTailwindcss,
  SiMui,
  SiMicrosoftsqlserver,
  SiFirebase,
  SiRedux,
  SiReactrouter,
  SiReactquery,
  SiChartdotjs,
  SiSpring,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiJsonwebtokens,
} from "react-icons/si";

export const navItems: { title: string; href: string }[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "My Skills",
    href: "#my-skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const projects = [
  {
    id: 1, // Make it first - most impressive
    title: "Muscledia - Distributed Fitness Platform",
    des: "Production-ready microservices platform with 6 services, 99.99% availability, and 87% AI optimization. Built using Spring Boot, Apache Kafka, and deployed on Oracle Cloud Infrastructure with zero infrastructure cost.",
    img: "/muscledia.png", // Add screenshot
    iconLists: [
      SiSpring,
      FaJava,
      SiApachekafka,
      SiDocker,
      FaDatabase, // MongoDB/MySQL
      SiJsonwebtokens,
    ],
    type: "backend",
    link: "https://github.com/muscledia/muscledia",
    metrics: [
      "99.99% Service Availability",
      "87% AI Performance Improvement",
      "52 REST API Endpoints",
      "$0/month Infrastructure Cost"
    ],
  },
  {
    id: 2, // Move to second position
    title: "E-Commerce Microservices Platform",
    des: "Enterprise-scale e-commerce platform with 8+ microservices, event-driven architecture using Apache Kafka, and Kubernetes orchestration. Supports 500+ concurrent users with sub-200ms response times and 99.9% uptime through comprehensive monitoring and fault tolerance.",
    iconLists: [
      SiSpring,
      FaJava,
      SiDocker,
      SiKubernetes,
      SiApachekafka,
      SiJsonwebtokens,
    ],
    type: "backend",
    link: "https://github.com/eric-muganga/ecommerce-microservices",
    metrics: [
      "8+ Microservices",
      "500+ Concurrent Users",
      "Sub-200ms Response Time",
      "99.9% Uptime"
    ],
  },
  {
    id: 3,
    title: "Landing Page for Oneramp.io",
    des: "This cryptocurrency ramping platform landing page is built using Next.js, Tailwind CSS, and TypeScript. It allows users to seamlessly convert fiat currency into cryptocurrency. Users can sign up, securely link their digital wallets, and begin purchasing crypto instantly. The platform offers real-time market data, user-friendly dashboards, and robust security measures, ensuring a smooth and safe experience for all users.",
    img: "/OneRamp.png",
    iconLists: [FaReact, BiLogoTypescript, RiNextjsLine, SiTailwindcss],
    type: "fullstack",
    link: "https://www.oneramp.io",
  },
  {
    id: 4,
    title: "Chat Application",
    des: "This is a real-time chat application built using React, Firebase, and Redux. It allows users to sign up, log in, send and receive messages, and manage their chats.",
    img: "/chat.png",
    iconLists: [
      FaReact,
      SiRedux,
      SiFirebase,
      SiReactrouter,
      SiRedux,
      SiTailwindcss,
      SiMui,
    ],
    type: "fullstack",
    link: "https://github.com/eric-muganga/SignalShift",
  },
  {
    id: 5,
    title: "AudioAura-Streams",
    des: "AudioAura-Streams is a full-stack web application designed for international radio streaming. Developed using Node.js and React, this platform offers seamless access to global radio broadcasts, enriching your listening experience with diverse audio content from around the world.",
    img: "/AudioAura-Streams.png",
    iconLists: [
      FaNodeJs,
      FaReact,
      SiMui,
      SiTailwindcss,
      SiReactrouter,
      SiReactquery,
    ],
    type: "fullstack",
    link: "https://audio-aura-streams.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "It is my pleasure to recommend Eric Muganga. Eric is an exceptionally talented software engineer with a knack for developing visually appealing and user-friendly web applications. His expertise in JavaScript, React, and Node.js, combined with a creative approach to problem-solving, sets him apart. Over the years, I've seen Eric tackle complex projects with dedication and a collaborative spirit. He's not just a skilled coder but also a great team player who always goes the extra mile. I wholeheartedly endorse Eric for any software development role.",
    name: "Benito Ishimwe",
    title: "Azure Cloud Solutions Engineer at LTIMindtree",
    img: "/benito.jpeg",
  },
  {
    quote:
      "I am delighted to recommend Eric Muganga, with whom I have collaborated on several projects. Eric is an exceptional software engineer, skilled in JavaScript, React, Node.js, and C#. He consistently creates visually appealing and user-friendly web applications. His problem-solving skills, dedication, and collaborative spirit are outstanding. Eric is a skilled coder and a great team player who always goes the extra mile. I highly recommend him for any software development role.",
    name: "Safari Germain",
    title: "Azure AI Engineer at ltimindtree",
    img: "/germain.jpeg",
  },
  {
    quote:
      "We had the pleasure of working with Eric Muganga on the design and development of our landing page for OneRamp Inc. Eric delivered an outstanding design in Figma that perfectly captured our vision. His attention to detail and creative expertise truly impressed us. Moreover, Eric's ability to bring the design to life through flawless development was exceptional. He completed the project within the agreed timeframe, exceeding our expectations in both quality and efficiency. We highly recommend Eric for any design and development projects.",
    name: "Elias Hezron",
    title: "CEO at OneRamp Inc.",
    img: "/OneRampLogoW.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern · Cashfro",
    period: "Feb - Oct 2025", // Updated dates
    desc: "Architected Java-based payment processing systems supporting 5,000+ concurrent users. Built PCI-compliant RESTful APIs processing thousands of daily financial transactions with 15% data integrity improvement. Implemented Apache Kafka event streaming for real-time transaction processing.",
    className: "md:col-span-2",
    technologies: [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "PostgreSQL",
      "Spring Security",
      "Docker",
      "REST APIs"
    ],
    metrics: [
      "5,000+ Concurrent Users",
      "15% Data Integrity Improvement",
      "PCI Compliance Achieved"
    ]
  },
  {
    id: 2,
    title: "Software Engineer Intern · Oneramp", // Updated title
    period: "May - Sep 2024",
    desc: "Engineered cryptocurrency platform backend services, increasing transaction throughput by 40% and supporting 10,000+ concurrent users. Optimized fiat-to-crypto conversion logic, reducing processing errors by 25%. Built React/TypeScript frontend integrated with Java Spring Boot APIs.",
    className: "md:col-span-2",
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "REST APIs"
    ],
    metrics: [
      "40% Throughput Increase",
      "25% Error Reduction",
      "10,000+ Concurrent Users"
    ]
  },
  {
    id: 3,
    title: "Frontend Engineer Intern · Nugsoft Technologies",
    period: "Jun - Sept 2022",
    desc: "Assisted in developing a web-based platform using React.js, focusing on enhancing interactivity and implementing responsive, visually appealing user interfaces with HTML5, CSS3, and JavaScript. Collaborated with design teams to translate mockups into dynamic web pages, ensuring an intuitive user experience. Utilized version control systems like Git for collaborative coding and efficient codebase management.",
    className: "md:col-span-2",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "WordPress",
      "React.js",
      "Git",
      "GitHub",
    ],
  },
];

export const blogPosts = [
  {
    id: 1, // Make it most recent
    title: "Optimizing AI Services: From 312s to 41s Response Time",
    excerpt: "Deep dive into optimizing AI service performance by 87% through model selection, payload compression, and temperature tuning in a production Spring Boot application.",
    content: `
    # The Challenge: Slow AI Service Performance
    
    During the development of Muscledia, our AI-powered workout analysis service was taking an unacceptable 312 seconds to respond. For a fitness app where users expect instant feedback, this was a critical bottleneck that needed immediate attention.
    
    ## The Optimization Journey
    
    ### Initial State (Sprint 9)
    - **Model**: llama3.2:3b
    - **Payload**: Full workout history (4,000 characters)  
    - **Temperature**: 0.7
    - **Average Response**: 312 seconds
    - **Sample Size**: 10 API calls
    
    ### Final State (Sprint 11)  
    - **Model**: llama3.2:1b
    - **Payload**: Compressed summaries (800 characters)
    - **Temperature**: 0.3
    - **Average Response**: 41.2 seconds
    - **Sample Size**: 30 API calls
    
    ## Three-Pronged Optimization Strategy
    
    ### 1. Model Downgrade (61% improvement)
    The 3b model was overkill for workout analysis. The 1b model maintained accuracy while being significantly faster.
    
    ### 2. Payload Compression (47% improvement) 
    Reduced network overhead and model processing time by compressing workout data from 4,000 to 800 characters.
    
    ### 3. Temperature Tuning (37% improvement)
    Lower temperature (0.7 → 0.3) provided more consistent, faster responses for our fitness context.
    
    ## Implementation Details
    
    \`\`\`java
    @Service
    public class AIOptimizationService {
        
        @Value("\${ai.model.version}")
        private String modelVersion; // llama3.2:1b
        
        @Value("\${ai.temperature}")
        private Double temperature; // 0.3
        
        public String analyzeWorkout(WorkoutData workout) {
            // Compress payload before sending to AI service
            String compressedData = compressWorkoutData(workout);
            
            return aiClient.analyze(compressedData, modelVersion, temperature);
        }
        
        private String compressWorkoutData(WorkoutData workout) {
            return workout.toCompressedSummary(); // 800 chars max
        }
    }
    \`\`\`
    
    ## Results: 87% Performance Improvement
    
    The compound effect of these optimizations delivered:
    - **Response Time**: 312s → 41s (87% improvement)
    - **User Experience**: Near real-time feedback
    - **System Throughput**: 450 requests/second capability
    - **Resource Efficiency**: Lower compute costs
    
    ## Key Takeaways
    
    1. **Right-size your models**: Bigger isn't always better
    2. **Optimize data payloads**: Every byte counts in AI processing  
    3. **Tune hyperparameters**: Small changes can yield big improvements
    4. **Measure systematically**: Use controlled testing methodologies
    5. **Think holistically**: Multiple small optimizations compound
    
    This optimization work reinforced the importance of performance-first thinking in AI applications, especially in user-facing scenarios where response time directly impacts experience.
  `,
    author: "Eric Muganga",
    publishedAt: "2025-01-15", // Recent date
    readTime: "6 min read",
    tags: ["AI Optimization", "Spring Boot", "Performance", "Microservices", "Java"],
    image: "/ai-optimization.png",
  },
  {
    id: 2,
    title: "Microservices Data Consistency: Lessons from the Muscledia Project",
    excerpt:
      "Exploring how to maintain data consistency across microservices using event-driven architecture and Apache Kafka in a real-world fitness platform.",
    content: `
      Ever wondered how to keep data consistent when it's scattered across multiple microservices? It's a classic challenge, and one I've been tackling head-on with the Muscledia Project!

      **Context/Problem:**
      I'm currently deep into developing the backend for Muscledia, a comprehensive fitness and gamification platform. We're leveraging a microservices architecture (think muscle-user-service, workout-service, gamification-service, etc.) built primarily with Java and Spring Boot. This approach gives us amazing scalability and resilience, but it also introduces interesting distributed system problems.

      One specific challenge recently surfaced: how do we ensure that when a user registers (handled by muscle-user-service), they automatically get their initial gamification profile created in the gamification-service? This isn't just a simple API call; a direct synchronous call from one service to another isn't ideal for loose coupling and resilience.

      **The "Aha!" Moment/Solution:**
      Our solution for this (and many other cross-service interactions) leans heavily on asynchronous communication via Apache Kafka.

      Here's how we're making it happen:

      **1. Event Publishing**
      When a new user successfully registers, the muscle-user-service publishes a UserRegisteredEvent to a dedicated Kafka topic.

      **2. Event Consumption**
      The gamification-service is a consumer of this event. It listens for UserRegisteredEvent messages.

      **3. Profile Creation**
      Upon receiving the event, the gamification-service processes it and creates the necessary initial gamification records for the new user (e.g., setting up their initial level, points, and streak counters).

      This approach ensures eventual consistency. Even if the gamification-service is temporarily down, the Kafka message persists, and the profile will be created once it recovers. It also keeps our services truly independent.

      **Architecture Overview:**
      - **muscle-user-service**: Handles user registration and authentication
      - **workout-service**: Manages workout data and routines  
      - **gamification-service**: Handles points, levels, achievements, and streaks
      - **Apache Kafka**: Event streaming platform for service communication
      - **Spring Boot**: Microservice framework with excellent Kafka integration

      **Implementation Details:**

      **Event Definition:**
      \`\`\`java
      public class UserRegisteredEvent {
          private String userId;
          private String email;
          private String username;
          private LocalDateTime registeredAt;
          // getters and setters
      }
      \`\`\`

      **Event Publisher (muscle-user-service):**
      \`\`\`java
      @Service
      public class UserEventPublisher {
          
          @Autowired
          private KafkaTemplate<String, UserRegisteredEvent> kafkaTemplate;
          
          public void publishUserRegistered(User user) {
              UserRegisteredEvent event = new UserRegisteredEvent();
              event.setUserId(user.getId());
              event.setEmail(user.getEmail());
              event.setUsername(user.getUsername());
              event.setRegisteredAt(LocalDateTime.now());
              
              kafkaTemplate.send("user-registered-topic", event);
          }
      }
      \`\`\`

      **Event Consumer (gamification-service):**
      \`\`\`java
      @Component
      public class UserEventConsumer {
          
          @Autowired
          private GamificationService gamificationService;
          
          @KafkaListener(topics = "user-registered-topic")
          public void handleUserRegistered(UserRegisteredEvent event) {
              // Create initial gamification profile
              gamificationService.createInitialProfile(
                  event.getUserId(),
                  event.getUsername()
              );
          }
      }
      \`\`\`

      **Lessons Learned/Takeaways:**
      This experience reinforced a few key principles for me:

      **Event-driven architecture is powerful:** For maintaining loose coupling and building resilient microservices, asynchronous events are a game-changer.

      **Idempotency is crucial:** We're always thinking about making our event consumers idempotent – meaning processing the same UserRegisteredEvent twice won't create duplicate gamification profiles. This is vital when dealing with message retries.

      **Shared contracts are non-negotiable:** Defining shared DTOs for Kafka events in a dedicated module is essential to avoid versioning nightmares and ensure seamless communication between services.

      **Monitoring and observability:** With distributed events, proper logging and monitoring become essential. We use Spring Cloud Sleuth for distributed tracing across our Kafka events.

      **Error handling strategies:** Dead letter queues and retry mechanisms are crucial for handling failed event processing gracefully.

      **Benefits We've Achieved:**

      - **Loose Coupling**: Services can evolve independently without breaking contracts
      - **Resilience**: System continues working even if individual services are temporarily down
      - **Scalability**: Easy to scale individual services based on their specific load patterns
      - **Eventual Consistency**: Data consistency is maintained across the distributed system
      - **Auditability**: Complete event log provides excellent audit trail

      It's a complex dance to orchestrate, but seeing how these independent services come together to form a cohesive platform like Muscledia is incredibly rewarding!

      **Future Enhancements:**
      - Implementing event sourcing for complete state reconstruction
      - Adding schema registry for better event versioning
      - Exploring CQRS patterns for read/write optimization

      Have you tackled data consistency in a microservices setup? What patterns or tools did you find most effective?
    `,
    author: "Eric Muganga",
    publishedAt: "2025-07-15",
    readTime: "8 min read",
    tags: [
      "Microservices",
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "Event-Driven Architecture",
      "Distributed Systems",
    ],
    image: "/microservices.jpg",
  },
  {
    id: 3,
    title: "Building Scalable Microservices with Spring Boot",
    excerpt:
      "Learn how to design and implement a robust microservices architecture using Spring Boot, Docker, and Kubernetes for modern enterprise applications.",
    content: `
      In today's fast-paced software development landscape, microservices architecture has become the gold standard for building scalable, maintainable applications. In this comprehensive guide, I'll walk you through my experience building a full-scale e-commerce platform using Spring Boot microservices and industry-standard design patterns.

      ## Why Microservices?

      Microservices offer several advantages over monolithic architectures:
      - **Scalability**: Scale individual services based on demand
      - **Technology Diversity**: Use the best tool for each job
      - **Fault Isolation**: Issues in one service don't bring down the entire system
      - **Team Independence**: Different teams can work on different services
      - **Deployment Flexibility**: Deploy and update services independently

      ## Platform Features

      Our e-commerce platform includes:
      - **User Authentication**: Secure JWT and OAuth2 implementation
      - **Product Catalog**: Advanced search and filtering capabilities
      - **Shopping Cart**: Persistent cart for logged-in users
      - **Order Management**: Complete order lifecycle tracking
      - **Payment Integration**: Stripe/PayPal integration
      - **Inventory Management**: Real-time stock tracking
      - **Recommendation Engine**: AI-powered product suggestions
      - **Analytics Dashboard**: Comprehensive business insights

      ## Microservices Architecture

      The platform consists of 11 specialized microservices:

             **Core Services**
       1. **User Service** - Registration, authentication, profile management
       2. **Product Service** - Catalog management, categories, inventory
       3. **Cart Service** - Shopping cart functionality
       4. **Order Service** - Order creation, tracking, history
       5. **Payment Service** - Third-party payment gateway integration
       6. **Notification Service** - Email, SMS, push notifications
       7. **Inventory Service** - Stock management and seller notifications

       **Infrastructure Services**
      8. **API Gateway** - Single entry point, routing, rate limiting
      9. **Service Discovery (Eureka)** - Dynamic service registration
      10. **Recommendation Service** - ML-based product recommendations
      11. **Config Server** - Centralized configuration management

      ## Industry Design Patterns Implemented

             **1. Layered Architecture**
      Each service follows a clean 3-layer pattern:
      - **Controller Layer**: HTTP request/response handling
      - **Service Layer**: Business logic implementation
      - **Repository Layer**: Data access abstraction

             **2. API Gateway Pattern**
      Centralized entry point providing:
      - Request routing and composition
      - Authentication and authorization
      - Rate limiting and throttling
      - Request/response transformation

             **3. Service Discovery Pattern**
      Netflix Eureka enables:
      - Dynamic service registration
      - Load balancing
      - Health checking
      - Fault tolerance

             **4. Circuit Breaker Pattern**
      Resilience4j implementation provides:
      - Failure detection and recovery
      - Fallback mechanisms
      - Cascading failure prevention

             **5. Saga Pattern**
      Distributed transaction management for:
      - Order processing workflows
      - Payment confirmation
      - Inventory updates
      - Rollback capabilities

             **6. CQRS Pattern**
      Command Query Responsibility Segregation for:
      - Optimized read/write operations
      - Better scalability
      - Performance optimization

      ## Technology Stack

             **Backend Technologies**
      - **Spring Boot 3.x**: Microservice foundation
      - **Spring Cloud**: Service mesh capabilities
      - **Spring Security**: Authentication/authorization
      - **Spring Data JPA**: Database abstractions

             **Infrastructure & DevOps**
      - **Docker**: Containerization
      - **Kubernetes**: Orchestration and scaling
      - **Apache Kafka**: Event streaming
      - **Redis**: Caching and session storage
      - **Elasticsearch**: Advanced search capabilities

             **Databases**
      - **MySQL**: Relational data (Users, Orders)
      - **MongoDB**: NoSQL data (Product catalog, recommendations)

             **Monitoring & Documentation**
      - **Prometheus**: Metrics collection
      - **Grafana**: Monitoring dashboards
      - **Swagger**: API documentation
      - **Jaeger**: Distributed tracing

      ## Implementation Highlights

             **Service Communication**
      **Synchronous**: REST APIs for real-time operations
      **Asynchronous**: Kafka for event-driven workflows

             **Data Management**
      **Database per Service**: Each microservice owns its data
      **Event Sourcing**: Audit trail and state reconstruction
      **Eventual Consistency**: Balance between performance and consistency

             **Security Implementation**
      - JWT tokens for stateless authentication
      - OAuth2 for third-party integrations
      - API Gateway security policies
      - Service-to-service authentication

             **Deployment Strategy**
      - **Blue-Green Deployments**: Zero downtime updates
      - **Rolling Updates**: Gradual service rollouts
      - **Canary Releases**: Risk-free feature testing

      ## Performance & Scalability

             **Achieved Metrics**
      - **99.9% Uptime**: Through redundancy and health checks
      - **Sub-100ms Response Time**: Optimized service communication
      - **10,000+ Concurrent Users**: Horizontal scaling capabilities
      - **Auto-scaling**: Kubernetes-based demand response

             **Caching Strategy**
      - **Redis**: Session and frequently accessed data
      - **Application-level**: Service-specific caching
      - **CDN**: Static content delivery

      ## Lessons Learned

      Building this microservices platform taught me:

             **Technical Insights**
      - **Service Boundaries**: Domain-driven design principles
      - **Data Consistency**: Embracing eventual consistency
      - **Monitoring**: Comprehensive observability is crucial
      - **Testing**: Integration testing complexity increases exponentially

             **Operational Wisdom**
      - **Documentation**: Self-documenting APIs are essential
      - **Team Structure**: Conway's Law in action
      - **Incremental Migration**: Start with a modular monolith
      - **DevOps Culture**: Automation is non-negotiable

      ## Future Enhancements

      Planned improvements include:
      - **GraphQL Gateway**: More efficient data fetching
      - **Service Mesh**: Istio for advanced traffic management
      - **ML Pipeline**: Enhanced recommendation algorithms
      - **Multi-region Deployment**: Global availability

      The journey from monolith to microservices was challenging but rewarding, resulting in a system that can handle enterprise-scale traffic while maintaining development velocity and operational excellence.

      **GitHub Repository**: [View Complete Implementation](https://github.com/eric-muganga/springboot-microservices-ecommerce-api)
    `,
    author: "Eric Muganga",
    publishedAt: "2024-10-16",
    readTime: "8 min read",
    tags: ["Spring Boot", "Microservices", "Docker", "Kubernetes", "Java"],
    image: "/microservices.jpg",
  },
  {
    id: 4,
    title: "React Performance Optimization: A Complete Guide",
    excerpt:
      "Discover advanced techniques to optimize React applications, including memoization, code splitting, and performance monitoring strategies.",
    content: `
      React applications can become slow as they grow in complexity. In this guide, I'll share proven techniques to keep your React apps fast and responsive, drawing from my experience optimizing real-world applications.

      ## Understanding React Performance

      Before diving into optimizations, it's crucial to understand how React works:
      - Virtual DOM reconciliation
      - Component re-rendering triggers
      - JavaScript bundle size impact

      ## Key Optimization Techniques

            **1. Memoization with React.memo and useMemo**

      Use React.memo and useMemo to optimize component performance:

      \`\`\`jsx
      const ExpensiveComponent = React.memo(({ data, multiplier }) => {
        const expensiveValue = useMemo(() => {
          return data.reduce((acc, item) => acc + (item.value * multiplier), 0);
        }, [data, multiplier]);
        
        return <div>Calculated Value: {expensiveValue}</div>;
      });
      \`\`\`

             **2. Code Splitting with Lazy Loading**

      Implement code splitting to improve initial load times:

      \`\`\`jsx
      const LazyComponent = lazy(() => import('./HeavyComponent'));
      
      function App() {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        );
      }
      \`\`\`

             **3. Virtualization for Large Lists**

      For lists with thousands of items, use virtualization:

      \`\`\`jsx
      import { FixedSizeList as List } from 'react-window';
      
      const VirtualizedList = ({ items }) => (
        <List
          height={600}
          itemCount={items.length}
          itemSize={50}
        >
          {({ index, style }) => (
            <div style={style}>{items[index].name}</div>
          )}
        </List>
      );
      \`\`\`

      ## Measuring Performance

      Use these tools to identify bottlenecks:
      - React DevTools Profiler
      - Chrome DevTools Performance tab
      - Web Vitals metrics

      ## Real-World Results

      In my job tracker application, these optimizations resulted in:
      - 60% reduction in initial load time
      - 40% improvement in Time to Interactive
      - Smoother animations and interactions

      Remember: premature optimization is the root of all evil. Always measure first, then optimize based on actual performance data.
    `,
    author: "Eric Muganga",
    publishedAt: "2024-02-28",
    readTime: "10 min read",
    tags: ["React", "Performance", "JavaScript", "Frontend", "Optimization"],
    image: "/chat.png",
  },
];
