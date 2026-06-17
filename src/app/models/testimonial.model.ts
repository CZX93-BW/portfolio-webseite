export class Testimonial {
  constructor(
    public readonly id: number,
    public readonly quote: string,
    public readonly author: string,
    public readonly role: string,
  ) {}
}