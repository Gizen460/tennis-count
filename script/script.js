new Vue({
  el: '#counter',
  data() {
    return {
      player1Name: 'John',
      player2Name: 'Mike',
      player1Count: 0,
      player2Count: 0,
      player1GameCount: 0,
      player2GameCount: 0,
    };
  },
  methods: {
    getPoint1() {
      this.player1Count += 15;
    },
    getPoint2() {
      this.player2Count += 15;
    },
    game1() {
      this.player1GameCount++;
      this.resetGame();
    },
    game2() {
      this.player2GameCount++;
      this.resetGame();
    },
    resetGame() {
      this.player1Count = 0;
      this.player2Count = 0;
    },
    reset() {
      this.player1Count = 0;
      this.player2Count = 0;
      this.player1GameCount = 0;
      this.player2GameCount = 0;
    },
  },
  computed: {
    player1WonGame() {
      return this.player1Count >= 50;
    },
    player2WonGame() {
      return this.player2Count >= 50;
    }
  }
});