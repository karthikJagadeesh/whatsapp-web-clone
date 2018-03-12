// export const profileDataUrl =
//   "https://my-json-server.typicode.com/karthikJagadeesh/fake-chat-api/profile";
// export const friendDataUrl =
//   "https://my-json-server.typicode.com/karthikJagadeesh/fake-chat-api/friends/";

export const profileDataUrl =
  'https://whatsapp-web-clone.herokuapp.com/profile';
export const friendDataUrl =
  'https://whatsapp-web-clone.herokuapp.com/recentChats';
export const allFriendsDataUrl =
  'https://whatsapp-web-clone.herokuapp.com/allFriends';

export async function fetchData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
