// export const profileDataUrl =
//   "https://my-json-server.typicode.com/karthikJagadeesh/fake-chat-api/profile";
// export const friendDataUrl =
//   "https://my-json-server.typicode.com/karthikJagadeesh/fake-chat-api/friends/";

export const profileDataUrl = 'http://localhost:7070/profile';
export const friendDataUrl = 'http://localhost:7070/recentChats';
export const allFriendsDataUrl = 'http://localhost:7070/allFriends';

export async function fetchData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
