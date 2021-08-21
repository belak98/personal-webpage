const cardDiv = document.querySelector(".git-card");

function getUserInfo(username) {
  // pulling userdata from the api
  axios
    .get(`https://api.github.com/users/${username}`)
      .then((res) => {
      // creating a variable to store the userdata recieved inside of
      let gitUserData = cardCreator(res.data);
      // appending the userdata inside of the container
      cardDiv.appendChild(gitUserData);
      // logging the data recieved to make sure that it is correct
      // console.log(gitUserData);
      // console.log(res.data);
      console.log('Done!');
    })
      .catch((err) => {
      // this will catch any errors that occur during the instantiation of the code
      console.log("Something went Wrong..");
    });
}

getUserInfo("belak98");

function cardCreator(obj) {
  //create elements
  const userCard = document.createElement("div");
  const userImg = document.createElement("div");
  const cardInfo = document.createElement("div");
  const usersName = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileUrl = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const userBio = document.createElement("p");

  profile.textContent = 'Profile: ';

  //append
  cardDiv.appendChild(userCard);
  userCard.appendChild(userImg);
  userCard.appendChild(cardInfo);
  cardInfo.appendChild(usersName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(userBio);
  profile.appendChild(profileUrl);

  //class
  userCard.classList.add("card");
  cardInfo.classList.add("card-info");
  usersName.classList.add("name");
  userName.classList.add("username");

  //content
  userImg.src = obj.avatar_url;
  usersName.textContent = obj.name;
  userName.textContent = obj.login;
  location.textContent = `Location: ${obj.location}`;
  profileUrl.href = obj.html_url;
  profileUrl.textContent = obj.html_url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  userBio.textContent = `Bio: ${obj.bio}`;

  return userCard;
}