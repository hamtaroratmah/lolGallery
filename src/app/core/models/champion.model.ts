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
    this.images.push(name);
    while (images[2].includes('\'')) {
      images[2] = images[2].replace('\'', '');
    }
    while (images[2].includes(' ')) {
      images[2] = images[2].replace(' ', '');
    }
    while (images[2].includes('.')) {
      images[2] = images[2].replace('.', '');
    }
    if (images[2] == 'Nunu&Willump') images[2] = 'Nunu';
    if (images[2] == 'RenataGlasc') images[2] = 'Renata';
    if (images[2] != 'XinZhao'
      && images[2] != 'TwistedFate'
      && images[2] != 'TahmKench'
      && images[2] != 'Renata'
      && images[2] != 'RekSai'
      && images[2] != 'MissFortune'
      && images[2] != 'MasterYi'
      && images[2] != 'LeeSin'
      && images[2] != 'KogMaw'
      && images[2] != 'JarvanIV'
      && images[2] != 'DrMundo'
      && images[2] != 'AurelionSol'
    ) {
      images[2] = images[2].toLowerCase();
      images[2] = images[2][0].toUpperCase() + images[2].substring(1, images[2].length);
    }
    if(name=='Wukong') images[2]  ='MonkeyKing';
  }
}
