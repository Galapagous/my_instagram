/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      phone
      uniqueId
      gender
      avatar
      bio
      website
      followers {
        items {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        nextToken
      }
      followings {
        items {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        nextToken
      }
      posts {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      savedPost {
        items {
          id
          userId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      taggedPost {
        items {
          id
          userId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      isPrivate
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          postLikesId
        }
        nextToken
      }
      follow {
        items {
          id
          starId
          admirerId
          createdAt
          updatedAt
          userFollowId
        }
        nextToken
      }
      createdAt
      updatedAt
      userFollowersId
      userFollowingsId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        savedPost {
          nextToken
        }
        taggedPost {
          nextToken
        }
        isPrivate
        likes {
          nextToken
        }
        follow {
          nextToken
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      description
      owner {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        savedPost {
          nextToken
        }
        taggedPost {
          nextToken
        }
        isPrivate
        likes {
          nextToken
        }
        follow {
          nextToken
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      image
      tags {
        items {
          id
          userId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      savedBy {
        items {
          id
          userId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        owner {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        comments {
          nextToken
        }
        image
        tags {
          nextToken
        }
        savedBy {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      user {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        savedPost {
          nextToken
        }
        taggedPost {
          nextToken
        }
        isPrivate
        likes {
          nextToken
        }
        follow {
          nextToken
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
      }
      post {
        id
        title
        description
        owner {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        comments {
          nextToken
        }
        image
        tags {
          nextToken
        }
        savedBy {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      createdAt
      updatedAt
      userLikesId
      postLikesId
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        post {
          id
          title
          description
          image
          createdAt
          updatedAt
          userPostsId
        }
        createdAt
        updatedAt
        userLikesId
        postLikesId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        description
        owner {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        comments {
          nextToken
        }
        image
        tags {
          nextToken
        }
        savedBy {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      user {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        savedPost {
          nextToken
        }
        taggedPost {
          nextToken
        }
        isPrivate
        likes {
          nextToken
        }
        follow {
          nextToken
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
      }
      content
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          description
          image
          createdAt
          updatedAt
          userPostsId
        }
        user {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        content
        createdAt
        updatedAt
        userCommentsId
        postCommentsId
      }
      nextToken
    }
  }
`;
export const getFollow = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      id
      star {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        savedPost {
          nextToken
        }
        taggedPost {
          nextToken
        }
        isPrivate
        likes {
          nextToken
        }
        follow {
          nextToken
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
      }
      admirer {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        savedPost {
          nextToken
        }
        taggedPost {
          nextToken
        }
        isPrivate
        likes {
          nextToken
        }
        follow {
          nextToken
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
      }
      starId
      admirerId
      createdAt
      updatedAt
      userFollowId
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        star {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        admirer {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        starId
        admirerId
        createdAt
        updatedAt
        userFollowId
      }
      nextToken
    }
  }
`;
export const getUserSavedPosts = /* GraphQL */ `
  query GetUserSavedPosts($id: ID!) {
    getUserSavedPosts(id: $id) {
      id
      userId
      postId
      user {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        savedPost {
          nextToken
        }
        taggedPost {
          nextToken
        }
        isPrivate
        likes {
          nextToken
        }
        follow {
          nextToken
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
      }
      post {
        id
        title
        description
        owner {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        comments {
          nextToken
        }
        image
        tags {
          nextToken
        }
        savedBy {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserSavedPosts = /* GraphQL */ `
  query ListUserSavedPosts(
    $filter: ModelUserSavedPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSavedPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        postId
        user {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        post {
          id
          title
          description
          image
          createdAt
          updatedAt
          userPostsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTaggedUsers = /* GraphQL */ `
  query GetTaggedUsers($id: ID!) {
    getTaggedUsers(id: $id) {
      id
      userId
      postId
      user {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        savedPost {
          nextToken
        }
        taggedPost {
          nextToken
        }
        isPrivate
        likes {
          nextToken
        }
        follow {
          nextToken
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
      }
      post {
        id
        title
        description
        owner {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        comments {
          nextToken
        }
        image
        tags {
          nextToken
        }
        savedBy {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTaggedUsers = /* GraphQL */ `
  query ListTaggedUsers(
    $filter: ModelTaggedUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaggedUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        postId
        user {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        post {
          id
          title
          description
          image
          createdAt
          updatedAt
          userPostsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userSavedPostsByUserId = /* GraphQL */ `
  query UserSavedPostsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserSavedPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userSavedPostsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        postId
        user {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        post {
          id
          title
          description
          image
          createdAt
          updatedAt
          userPostsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userSavedPostsByPostId = /* GraphQL */ `
  query UserSavedPostsByPostId(
    $postId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserSavedPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userSavedPostsByPostId(
      postId: $postId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        postId
        user {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        post {
          id
          title
          description
          image
          createdAt
          updatedAt
          userPostsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const taggedUsersByUserId = /* GraphQL */ `
  query TaggedUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaggedUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taggedUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        postId
        user {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        post {
          id
          title
          description
          image
          createdAt
          updatedAt
          userPostsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const taggedUsersByPostId = /* GraphQL */ `
  query TaggedUsersByPostId(
    $postId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaggedUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taggedUsersByPostId(
      postId: $postId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        postId
        user {
          id
          name
          username
          phone
          uniqueId
          gender
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
        }
        post {
          id
          title
          description
          image
          createdAt
          updatedAt
          userPostsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
