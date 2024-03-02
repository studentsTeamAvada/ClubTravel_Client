// import { AdvancedSearch } from '../code/searchFile/advanced';
import { AllImportFile } from '../code/searchFile/allImportFile';
import { Header } from '../components/header';
import { Preloader } from '../components/preloader';

document.addEventListener('DOMContentLoaded', async () => {
  new AllImportFile();
  // new AdvancedSearch();
  new Header();
  new Preloader();


//   const tours= [
//     {
//       flight: false,
//       meals: 'Без питания',
//       star: 4,
//       departure: 1,
//       country: 'Болгария',
//       beach: 'Песчаный пляж',
//       isCountry: 4,
//       img: [
//         {
//           urlWebp:
//             'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%96%D1%8F%2F%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%2FHarmony%20Suites%20Grand%20Resort%2011%20Aparthotel%2F1.webp?alt=media&token=e7ec0ad5-ad8e-4f1e-99c3-acc6b854329a',
//           url: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%96%D1%8F%2F%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%2FHarmony%20Suites%20Grand%20Resort%2011%20Aparthotel%2F1.jpeg?alt=media&token=d03b6248-0564-48c5-a854-b74976e08cc5',
//         },
//         {
//           urlWebp:
//             'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%96%D1%8F%2F%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%2FHarmony%20Suites%20Grand%20Resort%2011%20Aparthotel%2F2.webp?alt=media&token=3bbaee28-56b3-4811-b985-2b5dc925f9f5',
//           url: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%96%D1%8F%2F%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%2FHarmony%20Suites%20Grand%20Resort%2011%20Aparthotel%2F2.jpeg?alt=media&token=5309a485-01d4-458f-949b-4eb353232c04',
//         },
//         {
//           url: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%96%D1%8F%2F%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%2FHarmony%20Suites%20Grand%20Resort%2011%20Aparthotel%2F3.jpeg?alt=media&token=1ec3db59-a26a-4869-a1a1-fbd971058847',
//           urlWebp:
//             'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%96%D1%8F%2F%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%2FHarmony%20Suites%20Grand%20Resort%2011%20Aparthotel%2F3.webp?alt=media&token=367f4378-5537-499c-a689-1c9e91fde3bc',
//         },
//         {
//           urlWebp:
//             'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%96%D1%8F%2F%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%2FHarmony%20Suites%20Grand%20Resort%2011%20Aparthotel%2F4.webp?alt=media&token=3b77cff1-720b-42b1-b10b-1cd37c334104',
//           url: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%96%D1%8F%2F%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%2FHarmony%20Suites%20Grand%20Resort%2011%20Aparthotel%2F4.jpeg?alt=media&token=a8dfb1ea-e9b0-4c1c-9f4f-693af9030ed1',
//         },
//         {
//           url: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%96%D1%8F%2F%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%2FHarmony%20Suites%20Grand%20Resort%2011%20Aparthotel%2F5.jpeg?alt=media&token=67de36b7-17c9-4cf9-be99-ae4fad97c764',
//           urlWebp:
//             'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%96%D1%8F%2F%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%2FHarmony%20Suites%20Grand%20Resort%2011%20Aparthotel%2F5.webp?alt=media&token=bf744b2b-2ad1-474f-a093-b8e517d4d54a',
//         },
//       ],
//       isSummerTour: true,
//       isStar: 3,
//       region: 'Солнечный берег',
//       allPlace: 120,
//       isRegion: 7,
//       hotelInfo: {
//         location: 'Гостиница находится в южной части курортного комплекса «Золотые пески» в нескольких минутах ходьбы от моря.',
//         description:
//           'Гости города Золотые пески, приехавшие в город по делам бизнеса или для отдыха, могут остановиться в гостинце Ambassador (Амбассадор). Отель прекрасно сочетает в себе как современный комфорт, так и высокий уровень обслуживания. Каждый номер оснащен всем необходимым для комфортного отдыха (кондиционер, телевизор, письменный стол, сейф и утренняя газета). Вы сможете воспользоваться услугами массажиста, баром, лифтом, спа, сауной, рестораном, отдохнуть у бассейна, посетить фитнес зал и прогуляться по саду. Ваш отдых в отеле Ambassador (Амбассадор) будет ярким и запоминающимся, вас не оставят равнодушными первоклассный сервис и великолепное обслуживание. Отель находится в 27 км от Международного аэропорта Варна (Varna International Airport), в 900 метрах от центра курорта Золотые пески и в 150 метрах от пляжа. Отель принимает отдыхающих круглый год и является прекрасным местом для отдыха, спорта и развлечений. В бальнеологическом центре «Амбассадор» предлагаются свыше 100 видов услуг: таласотерапия, ванные, массаж, электротерапия, грязелечение, водолечение, акупунктура, медицинская косметика, сауна, открытый и крытый бассейны, фитнес зал, солярий и много других.',
//         sport: ['бассейн крытый', 'бассейн открытый', 'массаж', 'салон красоты', 'сауна', 'фитнес центр', 'велосипеды', 'прокат', 'теннис настольный'],
//         restaurants: ['бары', 'кафе'],
//         beach: ['Расстояние до пляжа (60 м.)', 'Зонтики (платно)', 'Шезлонги (платно)'],
//         service: ['парковка', 'прокат автомобилей', 'обмен валют', 'сейф'],
//         forKids: ['детская площадка', 'детский бассейн'],
//         rooms: ['181 номеров', 'душ', 'туалет', 'умывальник', 'балкон', 'ТВ спутниковое', 'кондиционер', 'телефон', 'холодильник'],
//       },
//       date: '19.03.2024',
//       freePlace: 40,
//       isMeals: 1,
//       work: ['19 июня 2023 - 30 октября 2023', '18 марта 2024 - 30 июня 2024'],
//       duration: 3,
//       touristPackage: 2,
//       name: 'Harmony Suites Grand Resort 11 Aparthotel',
//       description: [
//         {
//           main: 'Курортный отель Harmony Suites Grand расположен на курорте Солнечный берег. К услугам гостей сезонный открытый бассейн, сад и номера с кондиционером, балконом и бесплатным Wi-Fi.',
//         },
//       ],
//       room: ['Starndart', 'Family', 'V.I.P'],
//       price: [1000],
//       departureIn: 'Вылет из Таллинна',
//       isDuration: 1,
//       id: '2xvc7W065aSKXG4o5mw7',
//     },
//     {
//       isDuration: 3,
//       name: 'Pearl Marina Hotel Apartments',
//       price: [1194],
//       isRegion: 3,
//       beach: 'Песчаный пляж',
//       isCountry: 2,
//       isWinterTour: true,
//       duration: 10,
//       room: ['Standart', 'Villa'],
//       hotelInfo: {
//         beach: ['Расстояние до пляжа (60 м.)', 'Зонтики (платно)', 'Шезлонги (платно)'],
//         sport: ['бассейн крытый', 'бассейн открытый', 'массаж', 'салон красоты', 'сауна', 'фитнес центр', 'велосипеды', 'прокат', 'теннис настольный'],
//         forKids: ['детская площадка', 'детский бассейн'],
//         rooms: ['181 номеров', 'душ', 'туалет', 'умывальник', 'балкон', 'ТВ спутниковое', 'кондиционер', 'телефон', 'холодильник'],
//         location: 'Гостиница находится в южной части курортного комплекса «Золотые пески» в нескольких минутах ходьбы от моря.',
//         description:
//           'Гости города Золотые пески, приехавшие в город по делам бизнеса или для отдыха, могут остановиться в гостинце Ambassador (Амбассадор). Отель прекрасно сочетает в себе как современный комфорт, так и высокий уровень обслуживания. Каждый номер оснащен всем необходимым для комфортного отдыха (кондиционер, телевизор, письменный стол, сейф и утренняя газета). Вы сможете воспользоваться услугами массажиста, баром, лифтом, спа, сауной, рестораном, отдохнуть у бассейна, посетить фитнес зал и прогуляться по саду. Ваш отдых в отеле Ambassador (Амбассадор) будет ярким и запоминающимся, вас не оставят равнодушными первоклассный сервис и великолепное обслуживание. Отель находится в 27 км от Международного аэропорта Варна (Varna International Airport), в 900 метрах от центра курорта Золотые пески и в 150 метрах от пляжа. Отель принимает отдыхающих круглый год и является прекрасным местом для отдыха, спорта и развлечений. В бальнеологическом центре «Амбассадор» предлагаются свыше 100 видов услуг: таласотерапия, ванные, массаж, электротерапия, грязелечение, водолечение, акупунктура, медицинская косметика, сауна, открытый и крытый бассейны, фитнес зал, солярий и много других.',
//         restaurants: ['бары', 'кафе'],
//         service: ['парковка', 'прокат автомобилей', 'обмен валют', 'сейф'],
//       },
//       flight: true,
//       isStar: 5,
//       meals: 'Без питания',
//       isMeals: 1,
//       star: 6,
//       description: [
//         {
//           main: 'Апарт-отель Pearl Marina расположен в районе Дубаи Марина, рядом с островом Парк Айланд. Отель находится в непосредственной близости от множества магазинов и торговых центров, недалеко от станции метро. В нескольких минутах ходьбы от отеля располагаются множество ресторанов.        ',
//         },
//       ],
//       country: 'ОАЭ',
//       departureIn: 'Вылет из Таллинна',
//       date: '19.03.2024',
//       departure: 1,
//       work: ['6 января 2024 - 30 апреля 2024', '19 сентября 2024 - 6 января 2025'],
//       region: 'Дубай',
//       freePlace: 3,
//       allPlace: 40,
//       img: [
//         {
//           url: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%9E%D0%90%D0%95%2F%D0%94%D1%83%D0%B1%D0%B0%D0%B8%CC%86%2FPearl%20Marina%20Hotel%20Apartments%2F1.jpeg?alt=media&token=f511712a-c25a-4032-bed8-e5ec0edd79a7',
//           urlWebp: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%9E%D0%90%D0%95%2F%D0%94%D1%83%D0%B1%D0%B0%D0%B8%CC%86%2FPearl%20Marina%20Hotel%20Apartments%2F1.webp?alt=media&token=489c7126-c6e0-46fa-9202-f85f0a2bd943',
//         },
//         {
//           url: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%9E%D0%90%D0%95%2F%D0%94%D1%83%D0%B1%D0%B0%D0%B8%CC%86%2FPearl%20Marina%20Hotel%20Apartments%2F2.jpeg?alt=media&token=b2b3f4a9-06c0-4d54-a4b3-0a50084ba10d',
//           urlWebp: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%9E%D0%90%D0%95%2F%D0%94%D1%83%D0%B1%D0%B0%D0%B8%CC%86%2FPearl%20Marina%20Hotel%20Apartments%2F2.webp?alt=media&token=8601228e-18d9-41a1-8ac9-ada068fc443c',
//         },
//         {
//           url: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%9E%D0%90%D0%95%2F%D0%94%D1%83%D0%B1%D0%B0%D0%B8%CC%86%2FPearl%20Marina%20Hotel%20Apartments%2F3.jpeg?alt=media&token=caf2a488-af84-4d89-b2a2-fa308b9a7875',
//           urlWebp: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%9E%D0%90%D0%95%2F%D0%94%D1%83%D0%B1%D0%B0%D0%B8%CC%86%2FPearl%20Marina%20Hotel%20Apartments%2F3.webp?alt=media&token=a570f7e5-d6e5-4315-88f5-14e2c8aae9d1',
//         },
//         {
//           url: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%9E%D0%90%D0%95%2F%D0%94%D1%83%D0%B1%D0%B0%D0%B8%CC%86%2FPearl%20Marina%20Hotel%20Apartments%2F4.jpeg?alt=media&token=11603629-7487-4d96-8082-f36ff64a11a0',
//           urlWebp: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%9E%D0%90%D0%95%2F%D0%94%D1%83%D0%B1%D0%B0%D0%B8%CC%86%2FPearl%20Marina%20Hotel%20Apartments%2F4.webp?alt=media&token=d9806781-7a45-450a-862b-10b49ce63b21',
//         },
//         {
//           url: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%9E%D0%90%D0%95%2F%D0%94%D1%83%D0%B1%D0%B0%D0%B8%CC%86%2FPearl%20Marina%20Hotel%20Apartments%2F5.jpeg?alt=media&token=5da28465-611b-498b-86a5-1091d6927b0a',
//           urlWebp: 'https://firebasestorage.googleapis.com/v0/b/clubtravel-6eff6.appspot.com/o/%D0%9E%D0%90%D0%95%2F%D0%94%D1%83%D0%B1%D0%B0%D0%B8%CC%86%2FPearl%20Marina%20Hotel%20Apartments%2F5.webp?alt=media&token=43b6fd69-9031-48ef-b7e8-b7e70f1a635e',
//         },
//       ],
//       touristPackage: 1,
//       id: '4y1pfTW9YpWS80zp4pJ0',
//     },
//   ];
  

//   function filterTours(isCountry: number, isDuration: number, ) {
//     return tours.filter(tour => 
//       tour.isCountry === isCountry &&
//       tour.isDuration === isDuration 
//       // tour.date === date
//     );
//   }
  
//   const filteredTours = filterTours(2, 3);
//   console.log(filteredTours);
});
