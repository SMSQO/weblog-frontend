export type URL  = string
export type int  = number
export type long = number

export type BloggerInfo = {
  id:         long,
  name:       string, 
  avatarUrl:  URL, 
  contact:    string, 
  email:      string, 
  graduate:   string
}

export type BlogInfo = {
  blogger:    BloggerInfo,
  visitCount: long,
  likeCount:  int,
  fans:       int,

  blogCount:  int, 
  blogsUrl:   URL
}

export type PostInfo = {
  id:       long,

  title:    string,
  content:  string,
  detail:   URL,

  author:   BloggerInfo,
  tags:     TagInfo[],
  avatar?:  URL,
  comments: URL,

  permission: {
    isPublic:           boolean,
    needReviewComment:  boolean
  }, 
  visits:         long,
  likes:          int,
  unreviewdCount: int
}

export type TagInfo = {
  id:           long,
  name:         string, 
  owner:        BloggerInfo, 
  description:  string, 
}

export type CommentInfo = {
  id:           long,
  author:       BloggerInfo,
  content:      string, 
  post:         URL,
  replyTo?:     CommentInfo,
  reviewPassed: boolean
}

export type AttachmentInfo = {
  id:       long,
  name:     string, 
  suffix:   string, 
  url:      URL,
  owner:    BloggerInfo,
  filesize: long
}


