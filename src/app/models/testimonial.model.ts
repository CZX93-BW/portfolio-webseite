/**
 * Testimonial entry displayed in the testimonials carousel.
 */
export class Testimonial {
  /**
   * Creates a readonly testimonial model.
   *
   * @param id - Stable testimonial identifier used for tracking and carousel state.
   * @param quote - Testimonial text shown in the carousel.
   * @param author - Name or abbreviated name of the testimonial author.
   * @param role - Author role or relationship to the project.
   */
  constructor(
    public readonly id: number,
    public readonly quote: string,
    public readonly author: string,
    public readonly role: string,
  ) {}
}
