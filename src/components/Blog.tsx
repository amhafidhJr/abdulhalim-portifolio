import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Pagination,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import { BlogPost } from "../interfaces/BlogPost";
import { Link } from "react-router-dom";

const posts = [
  {
    id: "92ee5b33-105c-48a0-b77b-58ae3e02a7c5",
    title: "Introduction to JavaScript",
    description:
      "<p>\n        JavaScript (often abbreviated as JS) is a versatile, high-level programming language that plays a crucial role in modern web development. Initially developed by Netscape as a client-side scripting language, JavaScript has grown beyond its original purpose to become one of the most widely used languages in the world. It enables developers to create dynamic and interactive web content, enhancing the user experience by making web pages more engaging and responsive.\n    </p>\n    \n    <p>\n        One of JavaScript's core strengths is its ability to interact with HTML and CSS, the other foundational technologies of the web. By manipulating the Document Object Model (DOM), JavaScript can alter the content and style of a webpage in real-time. This allows for the creation of complex features such as form validation, dynamic content updates, and interactive elements like sliders and modals, all without requiring a page reload.\n    </p>\n    \n    <p>\n        JavaScript's versatility extends beyond the browser. With the advent of Node.js, JavaScript can now be used on the server side as well. This means that developers can use a single language for both client-side and server-side programming, streamlining development processes and making it easier to build full-stack applications. Node.js provides a runtime environment that allows JavaScript to execute server-side scripts, handle HTTP requests, and interact with databases.\n    </p>\n    \n    <p>\n        The language is known for its rich ecosystem of libraries and frameworks that simplify and accelerate development. Popular libraries like jQuery, and frameworks like Angular, React, and Vue.js, provide pre-built components and tools that help developers build sophisticated web applications more efficiently. These tools have become integral to modern development workflows, offering solutions for a wide range of common challenges.\n    </p>\n    \n    <p>\n        JavaScript also supports asynchronous programming, which is essential for handling operations like data fetching and file reading without blocking the execution of other code. Features such as Promises and the async/await syntax provide powerful mechanisms for managing asynchronous operations, allowing developers to write cleaner, more readable code that handles complex asynchronous tasks effectively.\n    </p>\n    \n    <p>\n        Despite its many strengths, JavaScript has its share of challenges. The language's dynamic nature can sometimes lead to unexpected behavior and bugs. However, modern development practices, such as using TypeScript (a superset of JavaScript that adds static types) and employing robust testing frameworks, help mitigate these issues. As JavaScript continues to evolve with new standards and features, it remains an indispensable tool for web developers, driving innovation and shaping the future of web technology.\n    </p>",
    readMinutes: "10",
    status: "active",
    date: "11/09/2024",
    paragraphs: [
      {
        text: "\n        JavaScript (often abbreviated as JS) is a versatile, high-level programming language that plays a crucial role in modern web development. Initially developed by Netscape as a client-side scripting language, JavaScript has grown beyond its original purpose to become one of the most widely used languages in the world. It enables developers to create dynamic and interactive web content, enhancing the user experience by making web pages more engaging and responsive.\n    ",
      },
      {
        text: "\n        One of JavaScript's core strengths is its ability to interact with HTML and CSS, the other foundational technologies of the web. By manipulating the Document Object Model (DOM), JavaScript can alter the content and style of a webpage in real-time. This allows for the creation of complex features such as form validation, dynamic content updates, and interactive elements like sliders and modals, all without requiring a page reload.\n    ",
      },
      {
        text: "\n        JavaScript's versatility extends beyond the browser. With the advent of Node.js, JavaScript can now be used on the server side as well. This means that developers can use a single language for both client-side and server-side programming, streamlining development processes and making it easier to build full-stack applications. Node.js provides a runtime environment that allows JavaScript to execute server-side scripts, handle HTTP requests, and interact with databases.\n    ",
      },
      {
        text: "\n        The language is known for its rich ecosystem of libraries and frameworks that simplify and accelerate development. Popular libraries like jQuery, and frameworks like Angular, React, and Vue.js, provide pre-built components and tools that help developers build sophisticated web applications more efficiently. These tools have become integral to modern development workflows, offering solutions for a wide range of common challenges.\n    ",
      },
      {
        text: "\n        JavaScript also supports asynchronous programming, which is essential for handling operations like data fetching and file reading without blocking the execution of other code. Features such as Promises and the async/await syntax provide powerful mechanisms for managing asynchronous operations, allowing developers to write cleaner, more readable code that handles complex asynchronous tasks effectively.\n    ",
      },
      {
        text: "\n        Despite its many strengths, JavaScript has its share of challenges. The language's dynamic nature can sometimes lead to unexpected behavior and bugs. However, modern development practices, such as using TypeScript (a superset of JavaScript that adds static types) and employing robust testing frameworks, help mitigate these issues. As JavaScript continues to evolve with new standards and features, it remains an indispensable tool for web developers, driving innovation and shaping the future of web technology.\n    ",
      },
    ],
  },
  {
    id: "7b630ad1-e608-4af9-9f5f-4392a11e0d03",
    title: "Introduction to Java",
    description:
      "<p>\n        Java is a high-level, object-oriented programming language developed by Sun Microsystems in the mid-1990s. Known for its portability, Java adheres to the principle of \"write once, run anywhere,\" meaning that code written in Java can be executed on any platform that has a compatible Java Virtual Machine (JVM). This feature has made Java a popular choice for building cross-platform applications.\n    </p>\n    \n    <p>\n        One of Java's most notable features is its robust object-oriented paradigm, which promotes code reuse and modularity. Java encourages the use of classes and objects, allowing developers to create organized and maintainable code. Concepts such as inheritance, encapsulation, and polymorphism are fundamental to Java and help in building complex applications efficiently.\n    </p>\n    \n    <p>\n        Java's extensive standard library provides a wide range of functionalities, from basic data structures and algorithms to advanced networking and graphical user interface (GUI) components. The Java Standard Edition (SE) includes libraries for essential tasks such as file I/O, networking, and concurrency, while the Java Enterprise Edition (EE) extends these capabilities to enterprise-level applications with features for web services, messaging, and more.\n    </p>\n    \n    <p>\n        The language's strong emphasis on portability and performance is supported by the JVM, which compiles Java bytecode into machine code specific to the host system. This abstraction allows Java programs to run on any device or operating system that supports the JVM, making Java a versatile option for a variety of applications, including web applications, mobile apps, and large-scale enterprise systems.\n    </p>\n    \n    <p>\n        Java also benefits from a rich ecosystem of frameworks and tools that enhance development productivity. Popular frameworks like Spring, Hibernate, and Apache Struts offer solutions for building scalable and maintainable applications. Additionally, Java's integrated development environments (IDEs) such as IntelliJ IDEA, Eclipse, and NetBeans provide powerful tools for coding, debugging, and managing Java projects.\n    </p>\n    \n    <p>\n        Despite its many advantages, Java has faced criticism for its verbosity and performance overhead compared to other languages. However, ongoing updates and enhancements to the Java platform have addressed many of these concerns. The introduction of features like lambda expressions and the new module system in recent Java versions have contributed to improving the language’s expressiveness and efficiency. Java remains a key player in the world of software development, known for its stability, scalability, and extensive community support.\n    </p>",
    readMinutes: "10",
    status: "active",
    date: "11/09/2024",
    paragraphs: [
      {
        text: '\n        Java is a high-level, object-oriented programming language developed by Sun Microsystems in the mid-1990s. Known for its portability, Java adheres to the principle of "write once, run anywhere," meaning that code written in Java can be executed on any platform that has a compatible Java Virtual Machine (JVM). This feature has made Java a popular choice for building cross-platform applications.\n    ',
      },
      {
        text: "\n        One of Java's most notable features is its robust object-oriented paradigm, which promotes code reuse and modularity. Java encourages the use of classes and objects, allowing developers to create organized and maintainable code. Concepts such as inheritance, encapsulation, and polymorphism are fundamental to Java and help in building complex applications efficiently.\n    ",
      },
      {
        text: "\n        Java's extensive standard library provides a wide range of functionalities, from basic data structures and algorithms to advanced networking and graphical user interface (GUI) components. The Java Standard Edition (SE) includes libraries for essential tasks such as file I/O, networking, and concurrency, while the Java Enterprise Edition (EE) extends these capabilities to enterprise-level applications with features for web services, messaging, and more.\n    ",
      },
      {
        text: "\n        The language's strong emphasis on portability and performance is supported by the JVM, which compiles Java bytecode into machine code specific to the host system. This abstraction allows Java programs to run on any device or operating system that supports the JVM, making Java a versatile option for a variety of applications, including web applications, mobile apps, and large-scale enterprise systems.\n    ",
      },
      {
        text: "\n        Java also benefits from a rich ecosystem of frameworks and tools that enhance development productivity. Popular frameworks like Spring, Hibernate, and Apache Struts offer solutions for building scalable and maintainable applications. Additionally, Java's integrated development environments (IDEs) such as IntelliJ IDEA, Eclipse, and NetBeans provide powerful tools for coding, debugging, and managing Java projects.\n    ",
      },
      {
        text: "\n        Despite its many advantages, Java has faced criticism for its verbosity and performance overhead compared to other languages. However, ongoing updates and enhancements to the Java platform have addressed many of these concerns. The introduction of features like lambda expressions and the new module system in recent Java versions have contributed to improving the language’s expressiveness and efficiency. Java remains a key player in the world of software development, known for its stability, scalability, and extensive community support.\n    ",
      },
    ],
  },
  {
    id: "f7eaf393-ddac-4324-84bf-f14bd55fbfbf",
    title: "Introduction to PHP",
    description:
      "  <p>\n        PHP, which stands for Hypertext Preprocessor, is a widely-used open-source server-side scripting language primarily designed for web development. Created by Rasmus Lerdorf in 1993, PHP has evolved into a powerful tool for building dynamic and interactive websites. It is embedded within HTML and allows developers to create web pages that can interact with databases and handle form submissions, making it a cornerstone of many web applications.\n    </p>\n    \n    <p>\n        One of PHP's key strengths is its ability to generate dynamic content based on user interactions. This means that PHP can modify the content of a webpage in response to user inputs, such as form submissions or query parameters. For instance, PHP can be used to retrieve data from a database and display it on a webpage, or to process form data submitted by users and perform actions based on that data.\n    </p>\n    \n    <p>\n        PHP is well-integrated with various databases, with MySQL being one of the most commonly used. The combination of PHP and MySQL, often referred to as the LAMP stack (Linux, Apache, MySQL, PHP), is a popular choice for developing robust web applications. PHP's extensive database support allows developers to perform complex queries, manage data, and interact with multiple database systems with ease.\n    </p>\n    \n    <p>\n        The language features a large standard library and numerous built-in functions, which help streamline development tasks. This includes functions for handling file uploads, sending emails, managing sessions, and interacting with various protocols. Additionally, PHP's extensive ecosystem includes frameworks like Laravel, Symfony, and CodeIgniter, which provide structured and efficient ways to build scalable web applications.\n    </p>\n    \n    <p>\n        PHP's flexibility is evident in its compatibility with various operating systems and web servers. It can run on Windows, Linux, and macOS, and is supported by popular web servers like Apache and Nginx. This cross-platform compatibility makes PHP a versatile choice for developers working in diverse environments and deploying applications across different platforms.\n    </p>\n    \n    <p>\n        Despite its many advantages, PHP is not without its criticisms. Issues related to security and performance have been noted, particularly in older versions. However, continuous improvements and updates to the language, along with best practices and security measures, have addressed many of these concerns. As PHP continues to evolve, it remains a fundamental technology in web development, powering a significant portion of the internet’s web infrastructure.\n    </p>",
    readMinutes: "5",
    status: "active",
    date: "11/09/2024",
    paragraphs: [
      {
        text: "\n        PHP, which stands for Hypertext Preprocessor, is a widely-used open-source server-side scripting language primarily designed for web development. Created by Rasmus Lerdorf in 1993, PHP has evolved into a powerful tool for building dynamic and interactive websites. It is embedded within HTML and allows developers to create web pages that can interact with databases and handle form submissions, making it a cornerstone of many web applications.\n    ",
      },
      {
        text: "\n        One of PHP's key strengths is its ability to generate dynamic content based on user interactions. This means that PHP can modify the content of a webpage in response to user inputs, such as form submissions or query parameters. For instance, PHP can be used to retrieve data from a database and display it on a webpage, or to process form data submitted by users and perform actions based on that data.\n    ",
      },
      {
        text: "\n        PHP is well-integrated with various databases, with MySQL being one of the most commonly used. The combination of PHP and MySQL, often referred to as the LAMP stack (Linux, Apache, MySQL, PHP), is a popular choice for developing robust web applications. PHP's extensive database support allows developers to perform complex queries, manage data, and interact with multiple database systems with ease.\n    ",
      },
      {
        text: "\n        The language features a large standard library and numerous built-in functions, which help streamline development tasks. This includes functions for handling file uploads, sending emails, managing sessions, and interacting with various protocols. Additionally, PHP's extensive ecosystem includes frameworks like Laravel, Symfony, and CodeIgniter, which provide structured and efficient ways to build scalable web applications.\n    ",
      },
      {
        text: "\n        PHP's flexibility is evident in its compatibility with various operating systems and web servers. It can run on Windows, Linux, and macOS, and is supported by popular web servers like Apache and Nginx. This cross-platform compatibility makes PHP a versatile choice for developers working in diverse environments and deploying applications across different platforms.\n    ",
      },
      {
        text: "\n        Despite its many advantages, PHP is not without its criticisms. Issues related to security and performance have been noted, particularly in older versions. However, continuous improvements and updates to the language, along with best practices and security measures, have addressed many of these concerns. As PHP continues to evolve, it remains a fundamental technology in web development, powering a significant portion of the internet’s web infrastructure.\n    ",
      },
    ],
  },
];

// Function to truncate description
const truncateDescription = (description, wordLimit = 20) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};

const getFirstParagraph = (htmlString: string | null) => {
  if (!htmlString) return;
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const firstParagraph = doc.querySelector("p");
  return firstParagraph ? firstParagraph.textContent || "" : "";
};

export const Blog = () => {
  const [blogData, setBlogData] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // Number of posts per page

  // Calculate posts to display for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="container">
      <Box
        sx={{
          border: "1px none #776B5D",
          borderRadius: "1px",
          margin: "auto",
          padding: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="row">
          {currentPosts.length === 0 ? (
            <div className="alert alert-danger" role="alert">
              No Post Yet!
            </div>
          ) : (
            currentPosts.map((blog) => (
              <div
                className="col-md-4"
                style={{ paddingTop: "35px" }}
                key={blog.id}
              >
                <Card
                  sx={{
                    height: "100%", // Ensures card takes full height of its container
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #EEEEEE",
                  }}
                >
                  <CardActionArea
                    sx={{ flex: "1 0 auto", backgroundColor: "#F5F6FA" }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        className="text-dark"
                        component="div"
                      >
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {truncateDescription(
                          getFirstParagraph(blog.description)
                        )}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.disabled", mt: 1 }}
                      >
                        {blog.date}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    sx={{
                      flexShrink: 0,
                    }}
                  >
                    <Link
                      to={`/posts/${blog.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          border: "1px solid #CDC2AE",
                          color: "black",
                          textTransform: "capitalize",
                        }}
                      >
                        Read More
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </div>
            ))
          )}
        </div>
        <div
          className="row"
          style={{
            marginTop: "100px",
          }}
        >
          <div className="col-md-12 col-lg-12 col-sm-12 text-center d-flex justify-content-center align-items-center">
            <Pagination
              count={Math.ceil(blogData.length / postsPerPage)}
              variant="outlined"
              shape="rounded"
              color="secondary"
              page={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </Box>
    </div>
  );
};
