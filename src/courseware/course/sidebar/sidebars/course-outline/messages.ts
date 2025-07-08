import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  loading: {
    id: 'courseOutline.loading',
    defaultMessage: 'Загрузка...',
    description: 'Текст для программы чтения с экрана, используемый на спиннере во время загрузки боковой панели.',
  },
  toggleCourseOutlineTrigger: {
    id: 'courseOutline.toggle.button',
    defaultMessage: 'Переключить панель курса',
    description: 'Кнопка для учащегося, чтобы переключить боковую панель',
  },
  courseOutlineTitle: {
    id: 'courseOutline.tray.title',
    defaultMessage: 'План курса',
    description: 'Текст заголовка, отображаемый для панели плана курса',
  },
  completedUnit: {
    id: 'courseOutline.completedUnit',
    defaultMessage: 'Завершенный модуль',
    description: 'Текст, используемый для описания зеленой галочки перед названием единицы',
  },
  incompleteUnit: {
    id: 'courseOutline.incompleteUnit',
    defaultMessage: 'Незавершенный модуль',
    description: 'Текст, используемый для описания серой галочки перед названием единицы',
  },
});

export default messages;
