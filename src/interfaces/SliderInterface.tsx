import { Movie } from './MovieInterface';

export interface SliderInterface {
  title?: string;
  isLoading?: boolean;
  content: Movie[];
}
