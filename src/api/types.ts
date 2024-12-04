/* eslint-disable */
// @ts-ignore

export type BaseResponseBoolean_ = {
  code?: number;
  data?: boolean;
  message?: string;
};

export type BaseResponseInt_ = {
  code?: number;
  data?: number;
  message?: string;
};

export type BaseResponseListTagDTO_ = {
  code?: number;
  data?: TagDTO[];
  message?: string;
};

export type BaseResponseListUserVO_ = {
  code?: number;
  data?: UserVO[];
  message?: string;
};

export type BaseResponseLoginUserVO_ = {
  code?: number;
  data?: LoginUserVO;
  message?: string;
};

export type BaseResponseLong_ = {
  code?: number;
  data?: number;
  message?: string;
};

export type BaseResponseMapStringObject_ = {
  code?: number;
  data?: Record<string, unknown>;
  message?: string;
};

export type BaseResponsePagePost_ = {
  code?: number;
  data?: PagePost_;
  message?: string;
};

export type BaseResponsePagePostVO_ = {
  code?: number;
  data?: PagePostVO_;
  message?: string;
};

export type BaseResponsePageTag_ = {
  code?: number;
  data?: PageTag_;
  message?: string;
};

export type BaseResponsePageTagVO_ = {
  code?: number;
  data?: PageTagVO_;
  message?: string;
};

export type BaseResponsePageUser_ = {
  code?: number;
  data?: PageUser_;
  message?: string;
};

export type BaseResponsePageUserVO_ = {
  code?: number;
  data?: PageUserVO_;
  message?: string;
};

export type BaseResponsePostVO_ = {
  code?: number;
  data?: PostVO;
  message?: string;
};

export type BaseResponseSearchVOObject_ = {
  code?: number;
  data?: SearchVOObject_;
  message?: string;
};

export type BaseResponseString_ = {
  code?: number;
  data?: string;
  message?: string;
};

export type BaseResponseTagVO_ = {
  code?: number;
  data?: TagVO;
  message?: string;
};

export type BaseResponseUser_ = {
  code?: number;
  data?: User;
  message?: string;
};

export type BaseResponseUserVO_ = {
  code?: number;
  data?: UserVO;
  message?: string;
};

export type checkUsingGETParams = {
  /** echostr */
  echostr?: string;
  /** nonce */
  nonce?: string;
  /** signature */
  signature?: string;
  /** timestamp */
  timestamp?: string;
};

export type DeleteRequest = {
  id?: number;
};

export type getPostVOByIdUsingGETParams = {
  /** id */
  id?: number;
};

export type getTagVOByIdUsingGETParams = {
  /** id */
  id?: number;
};

export type getUserByIdUsingGETParams = {
  /** id */
  id?: number;
};

export type getUserVOByIdUsingGETParams = {
  /** id */
  id?: number;
};

export type LoginUserVO = {
  createTime?: string;
  editTime?: string;
  id?: number;
  tags?: string[];
  token?: string;
  updateTime?: string;
  userAvatar?: string;
  userEmail?: string;
  userGender?: number;
  userName?: string;
  userPhone?: string;
  userProfile?: string;
  userRole?: string;
};

export type OrderItem = {
  asc?: boolean;
  column?: string;
};

export type PagePost_ = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: Post[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};

export type PagePostVO_ = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: PostVO[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};

export type PageTag_ = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: Tag[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};

export type PageTagVO_ = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: TagVO[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};

export type PageUser_ = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: User[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};

export type PageUserVO_ = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: UserVO[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};

export type Post = {
  content?: string;
  cover?: string;
  createTime?: string;
  favourNum?: number;
  id?: number;
  isDelete?: number;
  tags?: string;
  thumbNum?: number;
  title?: string;
  updateTime?: string;
  userId?: number;
};

export type PostAddRequest = {
  content?: string;
  cover?: string;
  tags?: string[];
  title?: string;
};

export type PostEditRequest = {
  content?: string;
  cover?: string;
  id?: number;
  tags?: string[];
  title?: string;
};

export type PostFavourAddRequest = {
  postId?: number;
};

export type PostFavourQueryRequest = {
  current?: number;
  pageSize?: number;
  postQueryRequest?: PostQueryRequest;
  sortField?: string;
  sortOrder?: string;
  userId?: number;
};

export type PostQueryRequest = {
  content?: string;
  current?: number;
  favourUserId?: number;
  id?: number;
  notId?: number;
  orTags?: string[];
  pageSize?: number;
  searchText?: string;
  sortField?: string;
  sortOrder?: string;
  tags?: string[];
  title?: string;
  userId?: number;
};

export type PostThumbAddRequest = {
  postId?: number;
};

export type PostUpdateRequest = {
  content?: string;
  cover?: string;
  id?: number;
  tags?: string[];
  title?: string;
};

export type PostVO = {
  content?: string;
  cover?: string;
  createTime?: string;
  favourNum?: number;
  hasFavour?: boolean;
  hasThumb?: boolean;
  id?: number;
  tags?: string[];
  thumbNum?: number;
  title?: string;
  updateTime?: string;
  userId?: number;
  userVO?: UserVO;
};

export type SearchRequest = {
  current?: number;
  pageSize?: number;
  searchText?: string;
  sortField?: string;
  sortOrder?: string;
  type?: string;
};

export type SearchVOObject_ = {
  dataList?: Record<string, unknown>[];
};

export type Tag = {
  createTime?: string;
  id?: number;
  isDelete?: number;
  isParent?: number;
  parentId?: number;
  tagName?: string;
  updateTime?: string;
  userId?: number;
};

export type TagAddRequest = {
  isParent?: number;
  parentId?: number;
  tagName?: string;
};

export type TagChildren = {
  children?: TagChildren[];
  id?: number;
  tagName?: string;
};

export type TagDTO = {
  children?: TagChildren[];
  id?: number;
  tagName?: string;
};

export type TagEditRequest = {
  id?: number;
  tagName?: string;
};

export type TagQueryRequest = {
  current?: number;
  id?: number;
  isParent?: number;
  pageSize?: number;
  parentId?: number;
  sortField?: string;
  sortOrder?: string;
  tagName?: string;
  userId?: number;
};

export type TagUpdateRequest = {
  id?: number;
  isParent?: number;
  parentId?: number;
  tagName?: string;
};

export type TagVO = {
  createTime?: string;
  id?: number;
  isParent?: number;
  parentId?: number;
  tagName?: string;
  updateTime?: string;
  userId?: number;
  userVO?: UserVO;
};

export type uploadFileUsingPOSTParams = {
  biz?: string;
};

export type User = {
  createTime?: string;
  editTime?: string;
  id?: number;
  isDelete?: number;
  mpOpenId?: string;
  tags?: string;
  unionId?: string;
  updateTime?: string;
  userAccount?: string;
  userAvatar?: string;
  userEmail?: string;
  userGender?: number;
  userName?: string;
  userPassword?: string;
  userPhone?: string;
  userProfile?: string;
  userRole?: string;
};

export type UserAddRequest = {
  tags?: string[];
  userAccount?: string;
  userAvatar?: string;
  userEmail?: string;
  userGender?: number;
  userName?: string;
  userPhone?: string;
  userProfile?: string;
  userRole?: string;
};

export type UserEditRequest = {
  tags?: string[];
  userAvatar?: string;
  userEmail?: string;
  userGender?: number;
  userName?: string;
  userPassword?: string;
  userPhone?: string;
  userProfile?: string;
};

export type userLoginByWxOpenUsingGETParams = {
  /** code */
  code: string;
};

export type UserLoginRequest = {
  userAccount?: string;
  userPassword?: string;
};

export type UserMatchRequest = {
  current?: number;
  number?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: string;
};

export type UserQueryRequest = {
  current?: number;
  id?: number;
  mpOpenId?: string;
  notId?: number;
  orTags?: string[];
  pageSize?: number;
  searchText?: string;
  sortField?: string;
  sortOrder?: string;
  tags?: string[];
  unionId?: string;
  userEmail?: string;
  userGender?: number;
  userName?: string;
  userPhone?: string;
  userProfile?: string;
  userRole?: string;
};

export type UserRegisterRequest = {
  checkPassword?: string;
  userAccount?: string;
  userPassword?: string;
};

export type UserUpdateRequest = {
  id?: number;
  tags?: string[];
  userAvatar?: string;
  userEmail?: string;
  userGender?: number;
  userName?: string;
  userPassword?: string;
  userPhone?: string;
  userProfile?: string;
  userRole?: string;
};

export type UserVO = {
  createTime?: string;
  editTime?: string;
  id?: number;
  mpOpenId?: string;
  similarity?: number;
  tags?: string[];
  unionId?: string;
  updateTime?: string;
  userAvatar?: string;
  userEmail?: string;
  userGender?: number;
  userName?: string;
  userPhone?: string;
  userProfile?: string;
  userRole?: string;
};
