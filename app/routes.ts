import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("skills", "routes/skills.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
