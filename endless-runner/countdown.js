class CountdownScreen {
  constructor(game, countdownDuration) {
    this.game = game;
    this.countdownTimer = countdownDuration;
    this.countdownInterval = null;
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      this.countdownTimer--;
      if (this.countdownTimer <= 0) {
        clearInterval(this.countdownInterval);
        this.game.start();
      }
    }, 1000);
  }

  draw(context) {
    context.fillStyle = "black";
    context.fillRect(0, 0, this.game.width, this.game.height);
    context.font = "48px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText(this.countdownTimer.toString(), this.game.width / 2, this.game.height / 2);
  }
}
