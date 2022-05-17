function getUserInfo(userId) {
    //=> Mockup data
    return {
        id: userId,
        name: "Jack",
        bio: "Hello world, I'm Jack!",
        avatar: "https://avatars.githubusercontent.com/u/19801770?v=4"
    }
}

module.exports = {getUserInfo}