import {Tag, TagCategory} from '../model';

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

const defaultCategory = new TagCategory(
  'Основная',
  defaultTagNames.map((name) => new Tag(name))
);

export const defaultCategoriesWithTags = [defaultCategory];
