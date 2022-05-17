const MOCKUP_RECORDS = [
    {
        id: "jack",
        name: "Jack",
        bio: "Hello world, I'm Jack!",
        avatar: "https://avatars.githubusercontent.com/u/19801770?v=4"
    },
    {
        id: "tony",
        name: "Tony",
        bio: "Hello world, I'm Tony!",
        avatar: "https://avatars.githubusercontent.com/u/19801770?v=4"
    }, {
        id: "peter",
        name: "Peter",
        bio: "Hello world, I'm Peter!",
        avatar: "https://avatars.githubusercontent.com/u/19801770?v=4"
    }
]

function getUserInfo(userId) {
    let matchingUser = MOCKUP_RECORDS.find(u => u.id === userId)
    if (matchingUser) return matchingUser
    else return {
        id: userId,
        name: userId,
        bio: `Hello world, I'm ${userId[0].toUpperCase() + userId.slice(1)}!`,
        avatar: '/images/default-avatar.png'
    }
}

module.exports = {getUserInfo}