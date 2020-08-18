// API response to GET /gnomes/id
export interface Brastlewark {
  id: number;
  name: string;
}
export interface Gnome {
  id: number;
  name: string;
  thumbnail: string;
  age: number;
  weight: number;
  height: number;
  hair_color: string;
  professions: string[];
  friends?: Gnome[];
  village: Brastlewark;
}


