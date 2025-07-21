import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  datesCardDescription: {
    id: 'progress.relatedLinks.datesCard.description',
    defaultMessage: 'Your course schedule with assignment due dates and upcoming assignments.',
    description: 'Description of the dates card content',
  },
  datesCardLink: {
    id: 'progress.relatedLinks.datesCard.link',
    defaultMessage: 'Dates',
    description: 'Link text that redirects to the dates tab',
  },
  outlineCardDescription: {
    id: 'progress.relatedLinks.outlineCard.description',
    defaultMessage: 'Overview of your course content.',
    description: 'Description of the course outline tab content',
  },
  outlineCardLink: {
    id: 'progress.relatedLinks.outlineCard.link',
    defaultMessage: 'Course Outline',
    description: 'Link text that redirects to the course outline tab',
  },
  relatedLinks: {
    id: 'progress.relatedLinks',
    defaultMessage: 'Related Links',
    description: 'Title of the (related links) section in the progress tab',
  },
});
export default messages;