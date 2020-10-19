export default interface IOrphanages {
  id: number;
  about: string;
  instructions: string;
  latitude: number;
  longitude: number;
  open_on_weekends: string;
  name: string;
  opening_hours: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}
