const github = "jakeliny";
const youtube = "jakelinygracielly";
const facebook = "maykbrito";
const instagram = "jakelinytec";

const linksSocialMedia = {
  github: "fbsdsgn",
  youtube: "youtube.com",
  facebook: "fbsdsgn",
  instagram: "fbsdsgn",
  twitter: "fbsdsgn",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`;
  }
}
changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userPhoto.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}
getGitHubProfileInfos();
