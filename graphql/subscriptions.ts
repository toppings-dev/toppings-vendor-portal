/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUniversity = /* GraphQL */ `
  subscription OnCreateUniversity {
    onCreateUniversity {
      name
      address
      zip_code
      city
      state
      students {
        items {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUniversity = /* GraphQL */ `
  subscription OnUpdateUniversity {
    onUpdateUniversity {
      name
      address
      zip_code
      city
      state
      students {
        items {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUniversity = /* GraphQL */ `
  subscription OnDeleteUniversity {
    onDeleteUniversity {
      name
      address
      zip_code
      city
      state
      students {
        items {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      email
      university_name
      university {
        name
        address
        zip_code
        city
        state
        students {
          items {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      phone_number
      name
      rewards {
        items {
          id
          userEmail
          owner {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          menuId
          points
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      friends {
        items {
          id
          userEmail
          friendEmail
          user {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          friend {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingFriendRequest {
        items {
          id
          senderEmail
          receiverEmail
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingFriendRequest {
        items {
          id
          senderEmail
          receiverEmail
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      groups {
        items {
          id
          userEmail
          user {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingGroupRequest {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingGroupRequest {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      deviceToken
      platform
      isUser
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      email
      university_name
      university {
        name
        address
        zip_code
        city
        state
        students {
          items {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      phone_number
      name
      rewards {
        items {
          id
          userEmail
          owner {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          menuId
          points
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      friends {
        items {
          id
          userEmail
          friendEmail
          user {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          friend {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingFriendRequest {
        items {
          id
          senderEmail
          receiverEmail
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingFriendRequest {
        items {
          id
          senderEmail
          receiverEmail
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      groups {
        items {
          id
          userEmail
          user {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingGroupRequest {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingGroupRequest {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      deviceToken
      platform
      isUser
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      email
      university_name
      university {
        name
        address
        zip_code
        city
        state
        students {
          items {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      phone_number
      name
      rewards {
        items {
          id
          userEmail
          owner {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          menuId
          points
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      friends {
        items {
          id
          userEmail
          friendEmail
          user {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          friend {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingFriendRequest {
        items {
          id
          senderEmail
          receiverEmail
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingFriendRequest {
        items {
          id
          senderEmail
          receiverEmail
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      groups {
        items {
          id
          userEmail
          user {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      incomingGroupRequest {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingGroupRequest {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      deviceToken
      platform
      isUser
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
      id
      name
      members {
        items {
          id
          userEmail
          user {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingRequests {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
      id
      name
      members {
        items {
          id
          userEmail
          user {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingRequests {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
      id
      name
      members {
        items {
          id
          userEmail
          user {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      outgoingRequests {
        items {
          id
          senderEmail
          receiverEmail
          groupId
          group {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          sender {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          receiver {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          accepted
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroupMembership = /* GraphQL */ `
  subscription OnCreateGroupMembership {
    onCreateGroupMembership {
      id
      userEmail
      user {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      groupId
      group {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingRequests {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroupMembership = /* GraphQL */ `
  subscription OnUpdateGroupMembership {
    onUpdateGroupMembership {
      id
      userEmail
      user {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      groupId
      group {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingRequests {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroupMembership = /* GraphQL */ `
  subscription OnDeleteGroupMembership {
    onDeleteGroupMembership {
      id
      userEmail
      user {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      groupId
      group {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingRequests {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFriendship = /* GraphQL */ `
  subscription OnCreateFriendship {
    onCreateFriendship {
      id
      userEmail
      friendEmail
      user {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      friend {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFriendship = /* GraphQL */ `
  subscription OnUpdateFriendship {
    onUpdateFriendship {
      id
      userEmail
      friendEmail
      user {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      friend {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFriendship = /* GraphQL */ `
  subscription OnDeleteFriendship {
    onDeleteFriendship {
      id
      userEmail
      friendEmail
      user {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      friend {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFriendRequest = /* GraphQL */ `
  subscription OnCreateFriendRequest {
    onCreateFriendRequest {
      id
      senderEmail
      receiverEmail
      sender {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFriendRequest = /* GraphQL */ `
  subscription OnUpdateFriendRequest {
    onUpdateFriendRequest {
      id
      senderEmail
      receiverEmail
      sender {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFriendRequest = /* GraphQL */ `
  subscription OnDeleteFriendRequest {
    onDeleteFriendRequest {
      id
      senderEmail
      receiverEmail
      sender {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroupRequest = /* GraphQL */ `
  subscription OnCreateGroupRequest {
    onCreateGroupRequest {
      id
      senderEmail
      receiverEmail
      groupId
      group {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingRequests {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      sender {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroupRequest = /* GraphQL */ `
  subscription OnUpdateGroupRequest {
    onUpdateGroupRequest {
      id
      senderEmail
      receiverEmail
      groupId
      group {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingRequests {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      sender {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroupRequest = /* GraphQL */ `
  subscription OnDeleteGroupRequest {
    onDeleteGroupRequest {
      id
      senderEmail
      receiverEmail
      groupId
      group {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingRequests {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      sender {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      receiver {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
      id
      name
      menuCategories {
        items {
          id
          name
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      menuItems {
        items {
          id
          name
          description
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      foodOptions {
        items {
          name
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItem {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedItemsOptions {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          optionCat {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      options {
        items {
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          name
          price
          foodoption {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedItemOptionsOptions {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      address
      zip_code
      city
      state
      lat
      long
      phone_number
      email
      restaurantOwnerName
      sundayHours
      mondayHours
      tuesdayHours
      wednesdayHours
      thursdayHours
      fridayHours
      saturdayHours
      images {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          type
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      isOpen
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
      id
      name
      menuCategories {
        items {
          id
          name
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      menuItems {
        items {
          id
          name
          description
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      foodOptions {
        items {
          name
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItem {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedItemsOptions {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          optionCat {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      options {
        items {
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          name
          price
          foodoption {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedItemOptionsOptions {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      address
      zip_code
      city
      state
      lat
      long
      phone_number
      email
      restaurantOwnerName
      sundayHours
      mondayHours
      tuesdayHours
      wednesdayHours
      thursdayHours
      fridayHours
      saturdayHours
      images {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          type
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      isOpen
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
      id
      name
      menuCategories {
        items {
          id
          name
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      menuItems {
        items {
          id
          name
          description
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      foodOptions {
        items {
          name
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItem {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedItemsOptions {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          optionCat {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      options {
        items {
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          name
          price
          foodoption {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedItemOptionsOptions {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      address
      zip_code
      city
      state
      lat
      long
      phone_number
      email
      restaurantOwnerName
      sundayHours
      mondayHours
      tuesdayHours
      wednesdayHours
      thursdayHours
      fridayHours
      saturdayHours
      images {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          type
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      isOpen
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMenuCategory = /* GraphQL */ `
  subscription OnCreateMenuCategory {
    onCreateMenuCategory {
      id
      name
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuItems {
        items {
          id
          name
          description
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMenuCategory = /* GraphQL */ `
  subscription OnUpdateMenuCategory {
    onUpdateMenuCategory {
      id
      name
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuItems {
        items {
          id
          name
          description
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMenuCategory = /* GraphQL */ `
  subscription OnDeleteMenuCategory {
    onDeleteMenuCategory {
      id
      name
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuItems {
        items {
          id
          name
          description
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem {
    onCreateMenuItem {
      id
      name
      description
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuCategoryName
      menuCategory {
        items {
          id
          name
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      price
      options {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          optionCat {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem {
    onUpdateMenuItem {
      id
      name
      description
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuCategoryName
      menuCategory {
        items {
          id
          name
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      price
      options {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          optionCat {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem {
    onDeleteMenuItem {
      id
      name
      description
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuCategoryName
      menuCategory {
        items {
          id
          name
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      price
      options {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          optionCat {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFoodOption = /* GraphQL */ `
  subscription OnCreateFoodOption {
    onCreateFoodOption {
      name
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuItem {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          optionCat {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      options {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFoodOption = /* GraphQL */ `
  subscription OnUpdateFoodOption {
    onUpdateFoodOption {
      name
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuItem {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          optionCat {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      options {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFoodOption = /* GraphQL */ `
  subscription OnDeleteFoodOption {
    onDeleteFoodOption {
      name
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      menuItem {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          foodOptionName
          menuItemName
          menuItem {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          optionCat {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          numchoices
          createdAt
          updatedAt
        }
        nextToken
      }
      options {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateItemOptionCatJoin = /* GraphQL */ `
  subscription OnCreateItemOptionCatJoin {
    onCreateItemOptionCatJoin {
      id
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      foodOptionName
      menuItemName
      menuItem {
        items {
          id
          name
          description
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      optionCat {
        name
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        menuItem {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      numchoices
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateItemOptionCatJoin = /* GraphQL */ `
  subscription OnUpdateItemOptionCatJoin {
    onUpdateItemOptionCatJoin {
      id
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      foodOptionName
      menuItemName
      menuItem {
        items {
          id
          name
          description
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      optionCat {
        name
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        menuItem {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      numchoices
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteItemOptionCatJoin = /* GraphQL */ `
  subscription OnDeleteItemOptionCatJoin {
    onDeleteItemOptionCatJoin {
      id
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      foodOptionName
      menuItemName
      menuItem {
        items {
          id
          name
          description
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      optionCat {
        name
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        menuItem {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      numchoices
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOption = /* GraphQL */ `
  subscription OnCreateOption {
    onCreateOption {
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      name
      price
      foodoption {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOption = /* GraphQL */ `
  subscription OnUpdateOption {
    onUpdateOption {
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      name
      price
      foodoption {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOption = /* GraphQL */ `
  subscription OnDeleteOption {
    onDeleteOption {
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      name
      price
      foodoption {
        items {
          id
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          optionName
          foodOptionName
          foodOption {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          option {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateItemOptionOptionJoin = /* GraphQL */ `
  subscription OnCreateItemOptionOptionJoin {
    onCreateItemOptionOptionJoin {
      id
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      optionName
      foodOptionName
      foodOption {
        name
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        menuItem {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      option {
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        name
        price
        foodoption {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateItemOptionOptionJoin = /* GraphQL */ `
  subscription OnUpdateItemOptionOptionJoin {
    onUpdateItemOptionOptionJoin {
      id
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      optionName
      foodOptionName
      foodOption {
        name
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        menuItem {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      option {
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        name
        price
        foodoption {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteItemOptionOptionJoin = /* GraphQL */ `
  subscription OnDeleteItemOptionOptionJoin {
    onDeleteItemOptionOptionJoin {
      id
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      optionName
      foodOptionName
      foodOption {
        name
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        menuItem {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      option {
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        name
        price
        foodoption {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePickup = /* GraphQL */ `
  subscription OnCreatePickup {
    onCreatePickup {
      id
      delivererId
      deliverer {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          food_ready_time
          estimated_delivery_time
          actual_delivery_time
          delivery_address
          delivery_lat
          delivery_long
          customerId
          customer {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          comment
          orderItems {
            items {
              id
              orderId
              menuId
              itemName
              price_per_item
              price_before_reward
              price_after_reward
              quantity
              comment
              foodOptionsArray
              createdAt
              updatedAt
            }
            nextToken
          }
          order_price_before_discount
          order_price_after_discount
          discount
          tax
          fees
          tip
          grandTotal
          pickupId
          pickup {
            id
            delivererId
            deliverer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
            lat
            long
            expdate
            friends {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groups {
              id
              name
              createdAt
              updatedAt
            }
            transportation_type
            apiResponse
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            closed
            windowEndTime
            windowClosed
            createdAt
            updatedAt
          }
          status
          closed
          isPaid
          createdAt
          updatedAt
        }
        nextToken
      }
      lat
      long
      expdate
      friends {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      groups {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingRequests {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      transportation_type
      apiResponse
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      closed
      windowEndTime
      windowClosed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePickup = /* GraphQL */ `
  subscription OnUpdatePickup {
    onUpdatePickup {
      id
      delivererId
      deliverer {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          food_ready_time
          estimated_delivery_time
          actual_delivery_time
          delivery_address
          delivery_lat
          delivery_long
          customerId
          customer {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          comment
          orderItems {
            items {
              id
              orderId
              menuId
              itemName
              price_per_item
              price_before_reward
              price_after_reward
              quantity
              comment
              foodOptionsArray
              createdAt
              updatedAt
            }
            nextToken
          }
          order_price_before_discount
          order_price_after_discount
          discount
          tax
          fees
          tip
          grandTotal
          pickupId
          pickup {
            id
            delivererId
            deliverer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
            lat
            long
            expdate
            friends {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groups {
              id
              name
              createdAt
              updatedAt
            }
            transportation_type
            apiResponse
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            closed
            windowEndTime
            windowClosed
            createdAt
            updatedAt
          }
          status
          closed
          isPaid
          createdAt
          updatedAt
        }
        nextToken
      }
      lat
      long
      expdate
      friends {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      groups {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingRequests {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      transportation_type
      apiResponse
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      closed
      windowEndTime
      windowClosed
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePickup = /* GraphQL */ `
  subscription OnDeletePickup {
    onDeletePickup {
      id
      delivererId
      deliverer {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          food_ready_time
          estimated_delivery_time
          actual_delivery_time
          delivery_address
          delivery_lat
          delivery_long
          customerId
          customer {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          comment
          orderItems {
            items {
              id
              orderId
              menuId
              itemName
              price_per_item
              price_before_reward
              price_after_reward
              quantity
              comment
              foodOptionsArray
              createdAt
              updatedAt
            }
            nextToken
          }
          order_price_before_discount
          order_price_after_discount
          discount
          tax
          fees
          tip
          grandTotal
          pickupId
          pickup {
            id
            delivererId
            deliverer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
            lat
            long
            expdate
            friends {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groups {
              id
              name
              createdAt
              updatedAt
            }
            transportation_type
            apiResponse
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            closed
            windowEndTime
            windowClosed
            createdAt
            updatedAt
          }
          status
          closed
          isPaid
          createdAt
          updatedAt
        }
        nextToken
      }
      lat
      long
      expdate
      friends {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      groups {
        id
        name
        members {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingRequests {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      transportation_type
      apiResponse
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      closed
      windowEndTime
      windowClosed
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      food_ready_time
      estimated_delivery_time
      actual_delivery_time
      delivery_address
      delivery_lat
      delivery_long
      customerId
      customer {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      comment
      orderItems {
        items {
          id
          orderId
          menuId
          itemName
          order {
            id
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            food_ready_time
            estimated_delivery_time
            actual_delivery_time
            delivery_address
            delivery_lat
            delivery_long
            customerId
            customer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            comment
            orderItems {
              nextToken
            }
            order_price_before_discount
            order_price_after_discount
            discount
            tax
            fees
            tip
            grandTotal
            pickupId
            pickup {
              id
              delivererId
              lat
              long
              expdate
              transportation_type
              apiResponse
              menuId
              closed
              windowEndTime
              windowClosed
              createdAt
              updatedAt
            }
            status
            closed
            isPaid
            createdAt
            updatedAt
          }
          menuItem {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          price_per_item
          price_before_reward
          price_after_reward
          quantity
          reward {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          comment
          foodOptionsArray
          createdAt
          updatedAt
        }
        nextToken
      }
      order_price_before_discount
      order_price_after_discount
      discount
      tax
      fees
      tip
      grandTotal
      pickupId
      pickup {
        id
        delivererId
        deliverer {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            food_ready_time
            estimated_delivery_time
            actual_delivery_time
            delivery_address
            delivery_lat
            delivery_long
            customerId
            customer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            comment
            orderItems {
              nextToken
            }
            order_price_before_discount
            order_price_after_discount
            discount
            tax
            fees
            tip
            grandTotal
            pickupId
            pickup {
              id
              delivererId
              lat
              long
              expdate
              transportation_type
              apiResponse
              menuId
              closed
              windowEndTime
              windowClosed
              createdAt
              updatedAt
            }
            status
            closed
            isPaid
            createdAt
            updatedAt
          }
          nextToken
        }
        lat
        long
        expdate
        friends {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        groups {
          id
          name
          members {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingRequests {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        transportation_type
        apiResponse
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        closed
        windowEndTime
        windowClosed
        createdAt
        updatedAt
      }
      status
      closed
      isPaid
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      food_ready_time
      estimated_delivery_time
      actual_delivery_time
      delivery_address
      delivery_lat
      delivery_long
      customerId
      customer {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      comment
      orderItems {
        items {
          id
          orderId
          menuId
          itemName
          order {
            id
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            food_ready_time
            estimated_delivery_time
            actual_delivery_time
            delivery_address
            delivery_lat
            delivery_long
            customerId
            customer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            comment
            orderItems {
              nextToken
            }
            order_price_before_discount
            order_price_after_discount
            discount
            tax
            fees
            tip
            grandTotal
            pickupId
            pickup {
              id
              delivererId
              lat
              long
              expdate
              transportation_type
              apiResponse
              menuId
              closed
              windowEndTime
              windowClosed
              createdAt
              updatedAt
            }
            status
            closed
            isPaid
            createdAt
            updatedAt
          }
          menuItem {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          price_per_item
          price_before_reward
          price_after_reward
          quantity
          reward {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          comment
          foodOptionsArray
          createdAt
          updatedAt
        }
        nextToken
      }
      order_price_before_discount
      order_price_after_discount
      discount
      tax
      fees
      tip
      grandTotal
      pickupId
      pickup {
        id
        delivererId
        deliverer {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            food_ready_time
            estimated_delivery_time
            actual_delivery_time
            delivery_address
            delivery_lat
            delivery_long
            customerId
            customer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            comment
            orderItems {
              nextToken
            }
            order_price_before_discount
            order_price_after_discount
            discount
            tax
            fees
            tip
            grandTotal
            pickupId
            pickup {
              id
              delivererId
              lat
              long
              expdate
              transportation_type
              apiResponse
              menuId
              closed
              windowEndTime
              windowClosed
              createdAt
              updatedAt
            }
            status
            closed
            isPaid
            createdAt
            updatedAt
          }
          nextToken
        }
        lat
        long
        expdate
        friends {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        groups {
          id
          name
          members {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingRequests {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        transportation_type
        apiResponse
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        closed
        windowEndTime
        windowClosed
        createdAt
        updatedAt
      }
      status
      closed
      isPaid
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      food_ready_time
      estimated_delivery_time
      actual_delivery_time
      delivery_address
      delivery_lat
      delivery_long
      customerId
      customer {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      comment
      orderItems {
        items {
          id
          orderId
          menuId
          itemName
          order {
            id
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            food_ready_time
            estimated_delivery_time
            actual_delivery_time
            delivery_address
            delivery_lat
            delivery_long
            customerId
            customer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            comment
            orderItems {
              nextToken
            }
            order_price_before_discount
            order_price_after_discount
            discount
            tax
            fees
            tip
            grandTotal
            pickupId
            pickup {
              id
              delivererId
              lat
              long
              expdate
              transportation_type
              apiResponse
              menuId
              closed
              windowEndTime
              windowClosed
              createdAt
              updatedAt
            }
            status
            closed
            isPaid
            createdAt
            updatedAt
          }
          menuItem {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          price_per_item
          price_before_reward
          price_after_reward
          quantity
          reward {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          comment
          foodOptionsArray
          createdAt
          updatedAt
        }
        nextToken
      }
      order_price_before_discount
      order_price_after_discount
      discount
      tax
      fees
      tip
      grandTotal
      pickupId
      pickup {
        id
        delivererId
        deliverer {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            food_ready_time
            estimated_delivery_time
            actual_delivery_time
            delivery_address
            delivery_lat
            delivery_long
            customerId
            customer {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            comment
            orderItems {
              nextToken
            }
            order_price_before_discount
            order_price_after_discount
            discount
            tax
            fees
            tip
            grandTotal
            pickupId
            pickup {
              id
              delivererId
              lat
              long
              expdate
              transportation_type
              apiResponse
              menuId
              closed
              windowEndTime
              windowClosed
              createdAt
              updatedAt
            }
            status
            closed
            isPaid
            createdAt
            updatedAt
          }
          nextToken
        }
        lat
        long
        expdate
        friends {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        groups {
          id
          name
          members {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingRequests {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        transportation_type
        apiResponse
        menuId
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        closed
        windowEndTime
        windowClosed
        createdAt
        updatedAt
      }
      status
      closed
      isPaid
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReward = /* GraphQL */ `
  subscription OnCreateReward {
    onCreateReward {
      id
      userEmail
      owner {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      menuId
      points
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReward = /* GraphQL */ `
  subscription OnUpdateReward {
    onUpdateReward {
      id
      userEmail
      owner {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      menuId
      points
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReward = /* GraphQL */ `
  subscription OnDeleteReward {
    onDeleteReward {
      id
      userEmail
      owner {
        email
        university_name
        university {
          name
          address
          zip_code
          city
          state
          students {
            items {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phone_number
        name
        rewards {
          items {
            id
            userEmail
            owner {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            menuId
            points
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        friends {
          items {
            id
            userEmail
            friendEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            friend {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingFriendRequest {
          items {
            id
            senderEmail
            receiverEmail
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userEmail
            user {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        incomingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        outgoingGroupRequest {
          items {
            id
            senderEmail
            receiverEmail
            groupId
            group {
              id
              name
              createdAt
              updatedAt
            }
            sender {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            receiver {
              email
              university_name
              phone_number
              name
              deviceToken
              platform
              isUser
              createdAt
              updatedAt
            }
            accepted
            createdAt
            updatedAt
          }
          nextToken
        }
        deviceToken
        platform
        isUser
        createdAt
        updatedAt
      }
      menuId
      points
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVendorReward = /* GraphQL */ `
  subscription OnCreateVendorReward {
    onCreateVendorReward {
      id
      date_active_from
      date_active_to
      discountPercentage
      discountAmount
      itemName
      menuId
      points
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVendorReward = /* GraphQL */ `
  subscription OnUpdateVendorReward {
    onUpdateVendorReward {
      id
      date_active_from
      date_active_to
      discountPercentage
      discountAmount
      itemName
      menuId
      points
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVendorReward = /* GraphQL */ `
  subscription OnDeleteVendorReward {
    onDeleteVendorReward {
      id
      date_active_from
      date_active_to
      discountPercentage
      discountAmount
      itemName
      menuId
      points
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem {
    onCreateOrderItem {
      id
      orderId
      menuId
      itemName
      order {
        id
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        food_ready_time
        estimated_delivery_time
        actual_delivery_time
        delivery_address
        delivery_lat
        delivery_long
        customerId
        customer {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        comment
        orderItems {
          items {
            id
            orderId
            menuId
            itemName
            order {
              id
              food_ready_time
              estimated_delivery_time
              actual_delivery_time
              delivery_address
              delivery_lat
              delivery_long
              customerId
              comment
              order_price_before_discount
              order_price_after_discount
              discount
              tax
              fees
              tip
              grandTotal
              pickupId
              status
              closed
              isPaid
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            price_per_item
            price_before_reward
            price_after_reward
            quantity
            reward {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            comment
            foodOptionsArray
            createdAt
            updatedAt
          }
          nextToken
        }
        order_price_before_discount
        order_price_after_discount
        discount
        tax
        fees
        tip
        grandTotal
        pickupId
        pickup {
          id
          delivererId
          deliverer {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              food_ready_time
              estimated_delivery_time
              actual_delivery_time
              delivery_address
              delivery_lat
              delivery_long
              customerId
              comment
              order_price_before_discount
              order_price_after_discount
              discount
              tax
              fees
              tip
              grandTotal
              pickupId
              status
              closed
              isPaid
              createdAt
              updatedAt
            }
            nextToken
          }
          lat
          long
          expdate
          friends {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groups {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          transportation_type
          apiResponse
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          closed
          windowEndTime
          windowClosed
          createdAt
          updatedAt
        }
        status
        closed
        isPaid
        createdAt
        updatedAt
      }
      menuItem {
        items {
          id
          name
          description
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      price_per_item
      price_before_reward
      price_after_reward
      quantity
      reward {
        id
        userEmail
        owner {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        menuId
        points
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      comment
      foodOptionsArray
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem {
    onUpdateOrderItem {
      id
      orderId
      menuId
      itemName
      order {
        id
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        food_ready_time
        estimated_delivery_time
        actual_delivery_time
        delivery_address
        delivery_lat
        delivery_long
        customerId
        customer {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        comment
        orderItems {
          items {
            id
            orderId
            menuId
            itemName
            order {
              id
              food_ready_time
              estimated_delivery_time
              actual_delivery_time
              delivery_address
              delivery_lat
              delivery_long
              customerId
              comment
              order_price_before_discount
              order_price_after_discount
              discount
              tax
              fees
              tip
              grandTotal
              pickupId
              status
              closed
              isPaid
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            price_per_item
            price_before_reward
            price_after_reward
            quantity
            reward {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            comment
            foodOptionsArray
            createdAt
            updatedAt
          }
          nextToken
        }
        order_price_before_discount
        order_price_after_discount
        discount
        tax
        fees
        tip
        grandTotal
        pickupId
        pickup {
          id
          delivererId
          deliverer {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              food_ready_time
              estimated_delivery_time
              actual_delivery_time
              delivery_address
              delivery_lat
              delivery_long
              customerId
              comment
              order_price_before_discount
              order_price_after_discount
              discount
              tax
              fees
              tip
              grandTotal
              pickupId
              status
              closed
              isPaid
              createdAt
              updatedAt
            }
            nextToken
          }
          lat
          long
          expdate
          friends {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groups {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          transportation_type
          apiResponse
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          closed
          windowEndTime
          windowClosed
          createdAt
          updatedAt
        }
        status
        closed
        isPaid
        createdAt
        updatedAt
      }
      menuItem {
        items {
          id
          name
          description
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      price_per_item
      price_before_reward
      price_after_reward
      quantity
      reward {
        id
        userEmail
        owner {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        menuId
        points
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      comment
      foodOptionsArray
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem {
    onDeleteOrderItem {
      id
      orderId
      menuId
      itemName
      order {
        id
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        food_ready_time
        estimated_delivery_time
        actual_delivery_time
        delivery_address
        delivery_lat
        delivery_long
        customerId
        customer {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        comment
        orderItems {
          items {
            id
            orderId
            menuId
            itemName
            order {
              id
              food_ready_time
              estimated_delivery_time
              actual_delivery_time
              delivery_address
              delivery_lat
              delivery_long
              customerId
              comment
              order_price_before_discount
              order_price_after_discount
              discount
              tax
              fees
              tip
              grandTotal
              pickupId
              status
              closed
              isPaid
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            price_per_item
            price_before_reward
            price_after_reward
            quantity
            reward {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            comment
            foodOptionsArray
            createdAt
            updatedAt
          }
          nextToken
        }
        order_price_before_discount
        order_price_after_discount
        discount
        tax
        fees
        tip
        grandTotal
        pickupId
        pickup {
          id
          delivererId
          deliverer {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              food_ready_time
              estimated_delivery_time
              actual_delivery_time
              delivery_address
              delivery_lat
              delivery_long
              customerId
              comment
              order_price_before_discount
              order_price_after_discount
              discount
              tax
              fees
              tip
              grandTotal
              pickupId
              status
              closed
              isPaid
              createdAt
              updatedAt
            }
            nextToken
          }
          lat
          long
          expdate
          friends {
            email
            university_name
            university {
              name
              address
              zip_code
              city
              state
              createdAt
              updatedAt
            }
            phone_number
            name
            rewards {
              nextToken
            }
            friends {
              nextToken
            }
            incomingFriendRequest {
              nextToken
            }
            outgoingFriendRequest {
              nextToken
            }
            groups {
              nextToken
            }
            incomingGroupRequest {
              nextToken
            }
            outgoingGroupRequest {
              nextToken
            }
            deviceToken
            platform
            isUser
            createdAt
            updatedAt
          }
          groups {
            id
            name
            members {
              nextToken
            }
            outgoingRequests {
              nextToken
            }
            createdAt
            updatedAt
          }
          transportation_type
          apiResponse
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          closed
          windowEndTime
          windowClosed
          createdAt
          updatedAt
        }
        status
        closed
        isPaid
        createdAt
        updatedAt
      }
      menuItem {
        items {
          id
          name
          description
          menuId
          restaurant {
            id
            name
            menuCategories {
              nextToken
            }
            menuItems {
              nextToken
            }
            foodOptions {
              nextToken
            }
            joinedItemsOptions {
              nextToken
            }
            options {
              nextToken
            }
            joinedItemOptionsOptions {
              nextToken
            }
            description
            address
            zip_code
            city
            state
            lat
            long
            phone_number
            email
            restaurantOwnerName
            sundayHours
            mondayHours
            tuesdayHours
            wednesdayHours
            thursdayHours
            fridayHours
            saturdayHours
            images {
              nextToken
            }
            isOpen
            createdAt
            updatedAt
          }
          menuCategoryName
          menuCategory {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          price
          options {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      price_per_item
      price_before_reward
      price_after_reward
      quantity
      reward {
        id
        userEmail
        owner {
          email
          university_name
          university {
            name
            address
            zip_code
            city
            state
            students {
              nextToken
            }
            createdAt
            updatedAt
          }
          phone_number
          name
          rewards {
            items {
              id
              userEmail
              menuId
              points
              createdAt
              updatedAt
            }
            nextToken
          }
          friends {
            items {
              id
              userEmail
              friendEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingFriendRequest {
            items {
              id
              senderEmail
              receiverEmail
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          groups {
            items {
              id
              userEmail
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
          incomingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          outgoingGroupRequest {
            items {
              id
              senderEmail
              receiverEmail
              groupId
              accepted
              createdAt
              updatedAt
            }
            nextToken
          }
          deviceToken
          platform
          isUser
          createdAt
          updatedAt
        }
        menuId
        points
        restaurant {
          id
          name
          menuCategories {
            items {
              id
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          menuItems {
            items {
              id
              name
              description
              menuId
              menuCategoryName
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          foodOptions {
            items {
              name
              menuId
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemsOptions {
            items {
              id
              menuId
              foodOptionName
              menuItemName
              numchoices
              createdAt
              updatedAt
            }
            nextToken
          }
          options {
            items {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          joinedItemOptionsOptions {
            items {
              id
              menuId
              optionName
              foodOptionName
              createdAt
              updatedAt
            }
            nextToken
          }
          description
          address
          zip_code
          city
          state
          lat
          long
          phone_number
          email
          restaurantOwnerName
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
          images {
            items {
              id
              menuId
              type
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          isOpen
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      comment
      foodOptionsArray
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRestaurantImage = /* GraphQL */ `
  subscription OnCreateRestaurantImage {
    onCreateRestaurantImage {
      id
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      type
      url
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRestaurantImage = /* GraphQL */ `
  subscription OnUpdateRestaurantImage {
    onUpdateRestaurantImage {
      id
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      type
      url
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRestaurantImage = /* GraphQL */ `
  subscription OnDeleteRestaurantImage {
    onDeleteRestaurantImage {
      id
      menuId
      restaurant {
        id
        name
        menuCategories {
          items {
            id
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        menuItems {
          items {
            id
            name
            description
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuCategoryName
            menuCategory {
              nextToken
            }
            price
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        foodOptions {
          items {
            name
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            menuItem {
              nextToken
            }
            options {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            foodOptionName
            menuItemName
            menuItem {
              nextToken
            }
            optionCat {
              name
              menuId
              createdAt
              updatedAt
            }
            numchoices
            createdAt
            updatedAt
          }
          nextToken
        }
        options {
          items {
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            name
            price
            foodoption {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        joinedItemOptionsOptions {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            optionName
            foodOptionName
            foodOption {
              name
              menuId
              createdAt
              updatedAt
            }
            option {
              menuId
              name
              price
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        description
        address
        zip_code
        city
        state
        lat
        long
        phone_number
        email
        restaurantOwnerName
        sundayHours
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        images {
          items {
            id
            menuId
            restaurant {
              id
              name
              description
              address
              zip_code
              city
              state
              lat
              long
              phone_number
              email
              restaurantOwnerName
              sundayHours
              mondayHours
              tuesdayHours
              wednesdayHours
              thursdayHours
              fridayHours
              saturdayHours
              isOpen
              createdAt
              updatedAt
            }
            type
            url
            createdAt
            updatedAt
          }
          nextToken
        }
        isOpen
        createdAt
        updatedAt
      }
      type
      url
      createdAt
      updatedAt
    }
  }
`;
