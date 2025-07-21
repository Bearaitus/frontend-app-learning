import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  loading: {
    id: 'courseOutline.loading',
    defaultMessage: 'Loading...',
    description: 'Text for screen readers used on the spinner while the sidebar is loading.',
  },
  toggleCourseOutlineTrigger: {
    id: 'courseOutline.toggle.button',
    defaultMessage: 'Toggle Course Outline',
    description: 'Button for the learner to toggle the sidebar',
  },
  courseOutlineTitle: {
    id: 'courseOutline.tray.title',
    defaultMessage: 'Course Outline',
    description: 'Title text displayed for the course outline tray',
  },
  completedUnit: {
    id: 'courseOutline.completedUnit',
    defaultMessage: 'Completed Module',
    description: 'Text used to describe the green checkmark before a unit title',
  },
  incompleteUnit: {
    id: 'courseOutline.incompleteUnit',
    defaultMessage: 'Incomplete Module',
    description: 'Text used to describe the gray checkmark before a unit title',
  },
});
export default messages;