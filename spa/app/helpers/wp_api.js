//https://developer.wordpress.org/rest-api/

const NAME = "malvestida",
  DOMAIN = `https://${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/posts?_embed`,
  POST = `${API_WP}/posts`,
  CATEGORIES = `${API_WP}/categories`,
  SEARCH = `${API_WP}/search?_embed&search=`;

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  POSTS,
  POST,
  CATEGORIES,
  SEARCH,
};
