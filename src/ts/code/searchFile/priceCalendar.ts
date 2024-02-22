
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';


 export class Calendar {
  constructor() {}

  initCalendar() {
    const headerSlides = document.querySelectorAll('.result__header-slide');

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    headerSlides.forEach(function (slide, index) {
      const calendar = document.createElement('div');
      calendar.id = 'calendar-' + index;
      slide.appendChild(calendar);

      const nextMonthDate = new Date(currentYear, currentMonth + index + 1, 1);

      new AirDatepicker('#' + calendar.id, {
        inline: true,
        startDate: nextMonthDate,
      });
    });
  }
}
