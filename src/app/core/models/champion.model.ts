export class Champion {
  key!: number;
  name!: string;
  title!: string;
  lore!: string;
  blurb!: string;
  tags!: string[];
  images!: string[];

  constructor(key: number, name: string, title: string, lore: string, blurb: string, tags: string[], images: string[]) {
    this.key = key;
    this.name = name;
    this.title = title;
    this.lore = lore;
    this.blurb = blurb;
    this.tags = tags;
    this.images = images;
  }
}
