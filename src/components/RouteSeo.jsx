import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteMetadata } from "../routeMetadata";

function setMetaContent(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getRouteMetadata(pathname);
    document.title = metadata.title;

    setMetaContent("name", "description", metadata.description);
    setMetaContent("name", "robots", metadata.robots);
    setMetaContent("property", "og:title", metadata.title);
    setMetaContent("property", "og:description", metadata.description);
    setMetaContent("property", "og:type", "website");
    setMetaContent("property", "og:url", metadata.canonical);
    setMetaContent("name", "twitter:card", "summary");
    setMetaContent("name", "twitter:title", metadata.title);
    setMetaContent("name", "twitter:description", metadata.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", metadata.canonical);
  }, [pathname]);

  return null;
}
