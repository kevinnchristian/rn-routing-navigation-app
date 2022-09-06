export interface IProduct {
  title: string;
  subtitle: string;
  color1: string;
  color2: string;
  picture: string;
}

export const products = [
  {
    title: 'Hamburgue A',
    subtitle: 'Hamburguer, Bacon, Salada',
    color1: '#F9AC8A',
    color2: '#FBC6AE',
    picture: require('../../assets/images/hamburguer1.png'),
  },
  {
    title: 'Hamburgue B',
    subtitle: 'Hamburguer, Bacon, Salada',
    color1: '#4DD2A5',
    color2: '#63D8B0',
    picture: require('../../assets/images/hamburguer2.png'),
  },
  {
    title: 'Hamburgue C',
    subtitle: 'Hamburguer, Bacon, Salada',
    color1: '#FEB829',
    color2: '#FDD446',
    picture: require('../../assets/images/hamburguer3.png'),
  },
  {
    title: 'Hamburgue D',
    subtitle: 'Hamburguer, Bacon, Salada',
    color1: '#F9AC8A',
    color2: '#FBC6AE',
    picture: require('../../assets/images/hamburguer4.png'),
  },
]