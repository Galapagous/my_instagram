/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
      createdAt
      updatedAt
      userFollowersId
      userFollowingsId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
      createdAt
      updatedAt
      userFollowersId
      userFollowingsId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
      createdAt
      updatedAt
      userFollowersId
      userFollowingsId
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateUserSavedPosts = /* GraphQL */ `
  subscription OnCreateUserSavedPosts(
    $filter: ModelSubscriptionUserSavedPostsFilterInput
  ) {
    onCreateUserSavedPosts(filter: $filter) {
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
export const onUpdateUserSavedPosts = /* GraphQL */ `
  subscription OnUpdateUserSavedPosts(
    $filter: ModelSubscriptionUserSavedPostsFilterInput
  ) {
    onUpdateUserSavedPosts(filter: $filter) {
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
export const onDeleteUserSavedPosts = /* GraphQL */ `
  subscription OnDeleteUserSavedPosts(
    $filter: ModelSubscriptionUserSavedPostsFilterInput
  ) {
    onDeleteUserSavedPosts(filter: $filter) {
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
export const onCreateTaggedUsers = /* GraphQL */ `
  subscription OnCreateTaggedUsers(
    $filter: ModelSubscriptionTaggedUsersFilterInput
  ) {
    onCreateTaggedUsers(filter: $filter) {
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
export const onUpdateTaggedUsers = /* GraphQL */ `
  subscription OnUpdateTaggedUsers(
    $filter: ModelSubscriptionTaggedUsersFilterInput
  ) {
    onUpdateTaggedUsers(filter: $filter) {
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
export const onDeleteTaggedUsers = /* GraphQL */ `
  subscription OnDeleteTaggedUsers(
    $filter: ModelSubscriptionTaggedUsersFilterInput
  ) {
    onDeleteTaggedUsers(filter: $filter) {
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
