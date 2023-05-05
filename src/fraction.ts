export default class Fraction {
  constructor(private numerator: number, private denominator: number) {}

  add(other: Fraction) {
    return new Fraction(
      this.numerator * other.denominator + other.numerator * this.denominator,
      this.denominator * other.denominator
    ).simplify();
  }

  simplify() {
    const { denominator, numerator } = this;
    for (let i = Math.min(denominator, numerator); i >= 2; i--) {
      if (denominator % i == 0 && numerator % i == 0) {
        return new Fraction(numerator / i, denominator / i);
      }
    }
    return this;
  }
}
