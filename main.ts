player.onChat("/run", function () {
    agent.teleportToPlayer()
    agent.setItem(OAK_WOOD_STAIRS, 1, 1)
    agent.setAssist(PLACE_ON_MOVE, true)
})
player.say("HI")
