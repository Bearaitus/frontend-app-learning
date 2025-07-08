import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  datesCardDescription: {
    id: 'progress.relatedLinks.datesCard.description',
    defaultMessage: 'График вашего курса с сроками сдачи заданий и предстоящими заданиями.',
    description: 'Описание содержимого вкладки с датами',
  },
  datesCardLink: {
    id: 'progress.relatedLinks.datesCard.link',
    defaultMessage: 'Даты',
    description: 'Текст ссылки, перенаправляющей на вкладку с датами',
  },
  outlineCardDescription: {
    id: 'progress.relatedLinks.outlineCard.description',
    defaultMessage: 'Обзор содержимого вашего курса.',
    description: 'Описание содержимого вкладки плана курса',
  },
  outlineCardLink: {
    id: 'progress.relatedLinks.outlineCard.link',
    defaultMessage: 'Оглавление курса',
    description: 'Текст ссылки, перенаправляющей на вкладку плана курса',
  },
  relatedLinks: {
    id: 'progress.relatedLinks',
    defaultMessage: 'Связанные ссылки',
    description: 'Заголовок раздела (связанные ссылки) во вкладке прогресса',
  },
});

export default messages;
