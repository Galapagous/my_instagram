/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUserSavedPosts = /* GraphQL */ `
  mutation CreateUserSavedPosts(
    $input: CreateUserSavedPostsInput!
    $condition: ModelUserSavedPostsConditionInput
  ) {
    createUserSavedPosts(input: $input, condition: $condition) {
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
export const updateUserSavedPosts = /* GraphQL */ `
  mutation UpdateUserSavedPosts(
    $input: UpdateUserSavedPostsInput!
    $condition: ModelUserSavedPostsConditionInput
  ) {
    updateUserSavedPosts(input: $input, condition: $condition) {
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
export const deleteUserSavedPosts = /* GraphQL */ `
  mutation DeleteUserSavedPosts(
    $input: DeleteUserSavedPostsInput!
    $condition: ModelUserSavedPostsConditionInput
  ) {
    deleteUserSavedPosts(input: $input, condition: $condition) {
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
export const createTaggedUsers = /* GraphQL */ `
  mutation CreateTaggedUsers(
    $input: CreateTaggedUsersInput!
    $condition: ModelTaggedUsersConditionInput
  ) {
    createTaggedUsers(input: $input, condition: $condition) {
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
export const updateTaggedUsers = /* GraphQL */ `
  mutation UpdateTaggedUsers(
    $input: UpdateTaggedUsersInput!
    $condition: ModelTaggedUsersConditionInput
  ) {
    updateTaggedUsers(input: $input, condition: $condition) {
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
export const deleteTaggedUsers = /* GraphQL */ `
  mutation DeleteTaggedUsers(
    $input: DeleteTaggedUsersInput!
    $condition: ModelTaggedUsersConditionInput
  ) {
    deleteTaggedUsers(input: $input, condition: $condition) {
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
