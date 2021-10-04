class Wave {
  private waveLength: number[];
  private color: string;

  constructor(waveLength: number[], color: string) {
    this.waveLength = waveLength;
    this.color = color;
  }

  public draw = (
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    frequency: number
  ): void => {
    context.beginPath();
    context.moveTo(-10, height);
    if (this.waveLength.length < 3) {
      return;
    }

    for (let i = 0; i < width; i++) {
      let wave1 = Math.sin(i * this.waveLength[0] - frequency);
      let wave2 = Math.sin(i * this.waveLength[1] - frequency);
      let wave3 = Math.sin(i * this.waveLength[2] - frequency);

      context.lineTo(i * 5.5, height - 400 + wave1 * wave2 * wave3 * 100);
    }
    context.lineTo(width, height);
    context.fillStyle = "transparent";

    context.lineWidth = 5;
    context.stroke();
    context.strokeStyle = "white";
    // context.fill();
    context.closePath();
  };
}

export default Wave;
