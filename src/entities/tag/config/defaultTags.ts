import {Tag} from '../model/tag';
import {TagCategory} from '../model/tagCategory';

const defaultTagNames = [
  'Автомобили',
  'Алфавит',
  'Аниме',
  'Астрономия',
  'Биология',
  'География',
  'Искусство',
  'История',
  'Комиксы',
  'Математика',
  'Мемы',
  'Мультфильмы',
  'Ребусы',
  'Сериалы',
  'ТВ',
  'Фантастика',
  'Физика',
  'Химия',
  'Юмор',
];

const gameTags = ['Консоли', 'Настольные игры', 'Саундтреки', 'Антагонисты', 'Игры'];
const cinemaTags = ['Актёры', 'Премии', 'Режиссеры', 'Кино'];
const bookTags = ['Комиксы', 'Книги'];
const musicTags = ['Джаз', 'Каверы', 'Металл', 'Поп', 'Рок', 'Русская музыка', 'Рэп', 'Электроника', 'Музыка'];

const defaultCategory = new TagCategory({name: 'Основные', tags: defaultTagNames.map((name) => new Tag({name}))});

const gameCategory = new TagCategory({name: 'Игры', tags: gameTags.map((name) => new Tag({name}))});

const cinemaCategory = new TagCategory({name: 'Кино', tags: cinemaTags.map((name) => new Tag({name}))});

const bookCategory = new TagCategory({name: 'Книги', tags: bookTags.map((name) => new Tag({name}))});

const musicCategory = new TagCategory({name: 'Музыка', tags: musicTags.map((name) => new Tag({name}))});

export const defaultCategoriesWithTags = [defaultCategory, gameCategory, cinemaCategory, bookCategory, musicCategory];
