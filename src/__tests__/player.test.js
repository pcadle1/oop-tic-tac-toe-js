import Player from "../player.js"

describe("Player", () => {
  let player;

  beforeEach(() => {
    player = new Player("Wonder Woman", "X")
  })

  it("is initialized with a name", () => {
    expect(player).toBeInstanceOf(Player)
  })

  describe("#name", () => {
    it("is initialized with a name", () => {
      expect(player.name).toEqual("Wonder Woman")
    })
  })

  describe("#symbol", () => {
    it("is initialized with a symbol", () => {
      expect(player.symbol).toEqual("X")
    })
  })
})