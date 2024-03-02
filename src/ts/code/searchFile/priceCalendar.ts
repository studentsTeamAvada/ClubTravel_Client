import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { RenderInfo } from './renderFiles';
import { app } from './../../modules/firebase';
import {collection, getDocs, getFirestore } from 'firebase/firestore';
export class Calendar {
  constructor() {}

  async initCalendar() {
    const db = getFirestore(app);
    const hotelsRef = collection(db, 'hotels');
    let allDates: { date: Date; money: number }[] = [];

    try {
      const querySnapshot = await getDocs(hotelsRef);
      querySnapshot.forEach((doc) => {
        const dateString: string = doc.data().date;
        const dateParts: string[] = dateString.split('.');
        const date: Date = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
        allDates.push({ date: date, money: doc.data().price[0] });
      });

      const headerSlides = document.querySelectorAll('.result__header-slide');
      const currentDate: Date = new Date();
      const currentMonth: number = currentDate.getMonth();
      const currentYear: number = currentDate.getFullYear();

      headerSlides.forEach(function (slide, index) {
        const calendar = document.createElement('div');
        calendar.id = 'calendar-' + index;
        slide.appendChild(calendar);

        const nextMonthDate: Date = new Date(currentYear, currentMonth + index - 1);
        const startDate: Date = new Date(nextMonthDate);
        startDate.setDate(startDate.getDate());

        function isToday(date: Date): boolean {
          const today = new Date();
          return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
        }

        new AirDatepicker('#' + calendar.id, {
          inline: true,
          startDate: startDate,

          onSelect({ date }) {
            const selectedDate = new Date(date as Date);
            const selectedDateString = selectedDate.toLocaleDateString();
            const selectedDateMoney = allDates.find((item) => item.date.getDate() === selectedDate.getDate() && item.date.getMonth() === selectedDate.getMonth() && item.date.getFullYear() === selectedDate.getFullYear());

            if (selectedDateMoney) {
              new RenderInfo().renderSecelcCalendarInfo(selectedDateString, selectedDateMoney.money);
            }
          },

          onRenderCell({ date }) {
            const isDay: number = date.getDate();
            const month: number = date.getMonth();
            let money: number | string = '';

            allDates.forEach((allDate) => {
              if (month === allDate.date.getMonth() && isDay === allDate.date.getDate()) {
                money = allDate.money;
              }
            });

            if (month === 1 && isToday(date)) {
              date.setMonth(1);
            }

            const shouldChangeContent = isDay && money !== '';
            const dateMoney: string = shouldChangeContent ? `${isDay} <span>${money}€</span>` : '';

            return {
              html: shouldChangeContent ? dateMoney : undefined,
              classes: shouldChangeContent ? '-money-' : undefined,
              attrs: {
                title: shouldChangeContent ? dateMoney : '',
              },
            };
          },
        });
      });
    } catch (error) {
      console.log('Error getting documents:', error);
    }
  }
}
