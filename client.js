import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, fromPromise, Observable } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CognitoClient from './utils/CognitoClient';

const apolloLocal = 'http://localhost:4000/graphql';
const apolloProd = 'https://api.toppingsapp.com/graphql';

const httpLink = new HttpLink({
  uri: __DEV__ ? apolloLocal : apolloProd,
});

const promiseToObservable = promise =>
  new Observable(subscriber => {
    promise.then(
      value => {
        if (subscriber.closed) return;
        subscriber.next(value);
        subscriber.complete();
      },
      err => subscriber.error(err)
    );
    return subscriber; // this line can removed, as per next comment
  });
  
const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =  await AsyncStorage.getItem('idToken');
  const accessToken =  await AsyncStorage.getItem('accessToken');
  console.log('token', token, ', accessTokne', accessToken);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
      accessAuthorization: accessToken ? `${accessToken}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          console.log('LMAO');
          const Cognito = new CognitoClient();
          const refreshToken = async () => {
            console.log("errorlink")
            await Cognito.refreshTokens();
            console.log("error link two")
            return await Cognito.setTokens();
          };
          return promiseToObservable(refreshToken()).flatMap(() => forward(operation));
      }
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getIncomingFriendRequests: {
            merge: false,
          },
          getOutgoingFriendRequest: {
            merge: false,
          },
          getFriendsFriends: {
            merge: false,
          },
          listUserOpenParties: {
            merge: false,
          },
          listUserOpenOrders: {
            merge: false,
          },
        },
      },
    },
  }),
  link: ApolloLink.from([errorLink, authLink, httpLink]),
});

export default client;
