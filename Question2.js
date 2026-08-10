
const users = [
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Ali" }
  ];

//  اكتب دالة تستقبل رقم المستخدم وتقوم بإرجاع بياناته.

function userInfo(users, userId) {
  const searchedUser = users.find(user => userId === user.id);
  if(!searchedUser) {
    return null;
  }
  return searchedUser;
}
