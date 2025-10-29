
export interface BaseSlide {
  title: string;
}

export interface TitleSlide extends BaseSlide {
  type: 'title';
  subtitle: string;
}

export interface PointsSlide extends BaseSlide {
  type: 'points';
  points: { title?: string; text: string }[];
}

export interface DiagramSlide extends BaseSlide {
    type: 'diagram';
    explanation: string;
    items: { title: string; text: string }[];
}

export interface FinalSlide extends BaseSlide {
    type: 'final';
    steps: { title: string, text: string }[];
    conclusion: string;
}

export type SlideContent = TitleSlide | PointsSlide | DiagramSlide | FinalSlide;
