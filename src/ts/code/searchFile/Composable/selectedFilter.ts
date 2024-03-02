// class SelectedFilter{
//   constructor(){}

//   selectingFilter(nameBlock: JQuery<HTMLElement>, selector: string, filterType: string, filterOptions: { [key: string]: string }) {
//     $(selector).on('click', (event) => {
//       const index = $(event.currentTarget).index() + 1;
//       const selectedOption = filterOptions[index];

//       $(selector).removeClass(selector.replace('.', '') + '_act');
//       $(event.currentTarget).addClass(selector.replace('.', '') + '_act');

//       new SelectedFilter().displayFilter(nameBlock, filterType, selectedOption);
//     });
//   }
// }