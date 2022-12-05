export interface CreditsResponse {
  id: number;
  cast: Cast[];
  crew: Cast[];
}

export type DepartmentType =
  | 'Acting'
  | 'Art'
  | 'Camera'
  | 'Costume & Make-Up'
  | 'Creator'
  | 'Crew'
  | 'Directing'
  | 'Editing'
  | 'Lighting'
  | 'Production'
  | 'Sound'
  | 'Visual Effects'
  | 'Writing';

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department?: DepartmentType;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: DepartmentType;
  job?: string;
  homepage: string;
  birthday: string;
  place_of_birth: string;
  biography: string;
}
