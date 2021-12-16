import Space from "../space.js"
import Player from "../player.js"

describe("Space", () => {
  let space;

  beforeEach(() => {
    space = new Space()
  })

  it("is initialized with no player", () => {
    expect(space).toBeInstanceOf(Space)
    expect(space.player).toEqual(nil)
  })

  describe("#player", () => {
    it("returns the player at that space", () => {
      const newPlayer = new Player("Batman", "X")
      space.player = newPlayer

      expect(space.player).toEqual(newPlayer)
    })
  })

  describe("#symbol", () => {
    it("returns the player's symbol", () => {
      const newPlayer = new Player("Superman", "X")
      space.player = newPlayer

      expect(space.symbol).toEqual(newPlayer.symbol)
    })

    it("returns '-' if there is no player", () => {
      const newSpace = new Space()

      expect(newSpace.symbol).toEqual("-")
    })
  })
})