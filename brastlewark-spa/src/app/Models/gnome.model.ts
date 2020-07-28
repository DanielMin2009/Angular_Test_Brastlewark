// API response to GET /gnomes/id
export class Gnome {
  // town: string;
  id: number;
  name: string;
  thumbnail: string;
  age: number;
  weight: number;
  height: number;
  hair_color: string;
  professions: string[];
  friends?: Gnome[];
}
