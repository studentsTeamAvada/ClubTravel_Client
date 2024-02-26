import $ from 'jquery';
export class AdvancedSearch {
  filterRow: JQuery<HTMLElement>;
  destinationCurrent: JQuery<HTMLElement>;
  dateCurrent: JQuery<HTMLElement>;
  durationCurrent: JQuery<HTMLElement>;

  constructor() {
    this.filterRow = $('.category__filter-row');
    this.destinationCurrent = $('.info__destination-current');
    this.dateCurrent = $('.info__date-current');
    this.durationCurrent = $('.info__duration-current');
    this.init();
  }

  init() {
    this.accordion();
    this.activeFilter();
    this.addActiveClassForStar();
    this.addActiveClassForMeals();
    this.addActiveClassForTour();
    this.addActiveClassForDeparture();
    this.addTextForCurrents();
  }

  accordion() {
    $('.search__btn').on('click', function () {
      $('.search__btn').addClass('search__btn_act');
      $('.search__row-bottom').addClass('search__row-bottom_active');


      $('.search__btn-close').removeClass('search__btn-close_act');
      $('.search__line').removeClass('search__line_act');
    });

    $('.search__btn-close').on('click', function () {
      $('.search__row-bottom').removeClass('search__row-bottom_active');
      $('.search__btn-close').addClass('search__btn-close_act');
      $('.search__line').addClass('search__line_act');
      console.log(123);
    });
  }

  activeFilter() {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      switch (key) {
        case 'isStar':
          this.rating(value);
          break;
        case 'isMeals':
          this.meals(value);
          break;
        case 'isTour':
          this.tours(value);
          break;
        case 'isRegion':
          this.region(value);
          break;
        case 'flight':
          this.flight(value);
          break;
        case 'departure':
          this.departure(value);
          break;
      }
    });
  }

  rating(val: string) {
    const rating: { [key: string]: string } = {
      '2': '3 звезды',
      '3': '4 звезды',
      '4': '5 звезд',
      '5': 'Апартаменты',
    };

    if (rating[val]) {
      this.filterRow.append(
        `<div class="category__filter-rating">
          <h3 class="category__filter-title">Рейтинг</h3>
          <p class="category__filter-text">${rating[val]}</p>
        </div>`
      );
    }
  }

  meals(val: string) {
    const meals: { [key: string]: string } = {
      '1': 'Без питания',
      '2': 'Завтрак',
      '3': 'Завтрак и ужин',
      '4': 'Завтрак, обед, ужин',
      '5': 'Всё включено',
      '6': 'Ультра все включено',
    };

    if (meals[val]) {
      this.filterRow.append(
        `<div class="category__filter-meals">
          <h3 class="category__filter-title">Питание</h3>
          <p class="category__filter-text">${meals[val]}</p>
        </div>`
      );
    }
  }

  tours(val: string) {
    if (val === 'true') {
      this.filterRow.append(
        `<div class="category__filter-tour">
          <h3 class="category__filter-title">Состав тура</h3>
          <p class="category__filter-text">Туристический пакет</p>
        </div>`
      );
    }
  }

  flight(val: string) {
    if (val === 'true') {
      this.filterRow.append(
        `<div class="category__filter-tour">
          <h3 class="category__filter-title">Состав тура</h3>
          <p class="category__filter-text">Только перелет</p>
        </div>`
      );
    }
  }

  region(val: string) {
    const filterRow = $('.category__filter-row');
    const regions: { [key: string]: string } = {
      '1': 'Шарм-эль-Шейх',
      '2': 'Хургада',
      '3': 'Дубай',
      '4': 'Абу-Даби',
      '5': 'Бангкок',
      '6': 'Хуа Хин',
      '7': 'Солнечный берег',
      '8': 'Золотые пески',
      '9': 'Будва',
      '10': 'Свети Стефан',
      '11': 'Бали',
      '13': 'Батумі',
      '15': 'Родос',
      '17': 'Мармарис',
      '19': 'Пафос',
      '21': 'Сусс',
      '23': 'Тенерифе',
      '25': 'Буковуль',
      '27': 'Улудаг',
      '28': 'Бансько',
      '29': 'Інше',
    };

    if (regions[val]) {
      filterRow.append(`
          <div class="category__filter-region">
            <h3 class="category__filter-title">Регион</h3>
            <p class="category__filter-text">${regions[val]}</p>
          </div>
        `);
    }
  }

  departure(val: string) {
    const departure: { [key: string]: string } = {
      '1': 'Киев',
      '2': 'Львов',
    };

    if (departure[val]) {
      this.filterRow.append(
        `<div class="category__filter-flying">
          <h3 class="category__filter-title">Вылет из</h3>
          <p class="category__filter-text">${departure[val]}</p>
        </div>`
      );
    }
  }

  addActiveClassForStar() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedStar = urlParams.get('isStar');

    const star: { [key: string]: string } = {
      '2': 'three',
      '3': 'four',
      '4': 'five',
      '5': 'apart',
    };

    if (savedStar && star[savedStar]) {
      $(`.category__btns-stars[data-stars="${star[savedStar]}"]`).addClass(
        'category__btns-stars_act'
      );
    }
  }

  addActiveClassForMeals() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedMeals = urlParams.get('isMeals');

    const meals: { [key: string]: string } = {
      '1': 'ao',
      '2': 'bb',
      '3': 'hb',
      '4': 'fb',
      '5': 'ai',
      '6': 'uai',
    };

    if (savedMeals && meals[savedMeals]) {
      $(`.category__btns-meals[data-meals="${meals[savedMeals]}"]`).addClass(
        'category__btns-meals_act'
      );
    }
  }

  addActiveClassForTour() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedTour = urlParams.get('isTour');
    const savedFlight = urlParams.get('flight');

    if (savedTour === 'true') {
      $('.category__btns-tour[data-tour="tour"]').addClass(
        'category__btns-tour_act'
      );
    } else if (savedFlight === 'true') {
      $('.category__btns-tour[data-tour="fly"]').addClass(
        'category__btns-tour_act'
      );
    }
  }

  addActiveClassForDeparture() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedDeparture = urlParams.get('departure');

    const departure: { [key: string]: string } = {
      '1': 'kiev',
      '2': 'lviv',
    };

    if (savedDeparture && departure[savedDeparture]) {
      $(
        `.category__btns-city[data-city="${departure[savedDeparture]}"]`
      ).addClass('category__btns-city_act');
    }
  }

  addTextForCurrents() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedDestination = urlParams.get('isCountry');
    const savedDuration = urlParams.get('isDuration');
    const savedDate = urlParams.get('date');
    const savedAdults = urlParams.get('adults');
    const savedKids = urlParams.get('kids');
    const savedYears = urlParams.get('years');
    const yearsArr = savedYears ? savedYears.match(/\d+ \D+/g) : [];

    const country: { [key: string]: string } = {
      '0': 'Все направления',
      '1': 'Египет',
      '2': 'ОАЭ',
      '3': 'Таиланд',
      '4': 'Болгария',
      '5': 'Черногория',
      '6': 'Индонезия',
      '7': 'Грузия',
      '8': 'Греция',
      '9': 'Турция',
      '10': 'Кипр',
      '11': 'Тунис',
      '12': 'Испания',
      '13': 'Украина',
    };

    const duration: { [key: string]: string } = {
      '1': '3 ночи',
      '2': '7 ночей',
      '3': '10 ночей',
      '4': '14 ночей',
      '5': '21 ночь',
    };


    if (savedDuration && duration[savedDuration]) {
      this.durationCurrent.text(duration[savedDuration]);
    } else if (this.durationCurrent.text() === '') {
      this.durationCurrent.text('Длительность');
    }

 

    if (savedDestination && country[savedDestination]) {
      this.destinationCurrent.text(country[savedDestination]);
    } else if (this.destinationCurrent.text() === '') {
      this.destinationCurrent.text('Направление');
    }

    if (savedDate) {
      this.dateCurrent.text(savedDate);
      console.log(savedDate);
    } else if (this.dateCurrent.text() === '') {
      this.dateCurrent.text('Дата');
    }

    if (savedAdults || savedKids) {
      $('.info__guests-counter').text(savedAdults !== null ? savedAdults : '');
      $('.info__guests-subcounter').text(savedKids !== null ? savedKids : '');
      $('.info__guests-counters_adults').text(savedAdults !== null ? savedAdults : '');
      $('.info__guests-counters_kids').text(savedKids !== null ? savedKids : '');
    }
    else{
      $('.info__guests-counters_adults').text('0');
      $('.info__guests-counters_kids').text('0');
    }

      $(document).ready(function() {
        if (yearsArr) {
            $.each(yearsArr, function(index, item) {
                $('.info__guests-item-current').eq(index).text(item);
            });
        }
    });
  }
}

