import React from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import RoutingHome from "./RoutingHome"; // Ensure you import your components
import RoutingAbout from "./RoutingAbout"; // Ensure you import your components
import RoutingServices from "./RoutingServices"; // Ensure you import your components
import RoutingPracticeUsers from "./RoutingPracticeUsers";

function RoutingPractice() {
  return (
    <BrowserRouter>

      <Routes>
        {/* Wrapping with a parent route will render the parent route component and the child route component as well. This is useful when we want to render a common layout for all the child routes. */}
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<RoutingHome />} />

          <Route path="/about" element={<RoutingAbout />} >

          {/* This is the child route of about page  */}
          <Route path="/about/:name" element={<RoutingPracticeUsers />} />
          
          </Route>

          <Route path="/services" element={<RoutingServices />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

      </Routes>
      
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <>
      <Nav />

      <div className="bg-red-100 h-[80vh] mt-10">
        {/* Whatever is rendering among the routes will be rendered here */}
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

function Nav() {
  {
    /* Nav Code */
  }
  return (
    <nav className="mt-10 flex justify-center bg-gray-400">
      <ul className="flex gap-12">
        <li>
          {/* We can also use link tag but it will not provide us the event object */}
          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "red" : "black",
                fontWeight: e.isActive ? "bold" : "normal",
              };
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(e) => {
              return [
                e.isActive ? "text-red-500" : "",
                e.isActive ? "font-bold" : "",
              ].join(" ");
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services">
            {(e) => {
              return (
                <span
                  className={[
                    e.isActive ? "text-red-500" : "",
                    e.isActive ? "font-bold" : "",
                  ].join(" ")}
                >
                  Services
                </span>
              );
            }}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="mt-10 text-center bg-blue-400">
      <p>&copy; 2024</p>
    </footer>
  );
}

function ErrorPage() {
  return (
    <div className="bg-blue-200 flex flex-col items-center">
      <h1 className="text-4xl">404</h1>
      <p>Page Not Found</p>
    </div>
  );
}

export default RoutingPractice;
