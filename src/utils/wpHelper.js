/**
 * Helper exports pointing to central wordpressMapper normalization functions
 */
import {
  getFeaturedImage as mapperGetFeaturedImage,
  getAuthor as mapperGetAuthor,
  getCategories as mapperGetCategories,
  getTags as mapperGetTags,
  mapPost as mapperMapPost
} from './wordpressMapper';

export const getFeaturedImage = (post) => {
  const imgObj = mapperGetFeaturedImage(post);
  return imgObj.large || imgObj.medium || imgObj.thumbnail;
};

export const getAuthorName = (post) => {
  const auth = mapperGetAuthor(post);
  return auth.name;
};

export const getAuthorAvatar = (post) => {
  const auth = mapperGetAuthor(post);
  return auth.avatar;
};

export const getPostCategories = mapperGetCategories;
export const getPostTags = mapperGetTags;
export const mapPost = mapperMapPost;
