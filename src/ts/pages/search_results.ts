import { AdvancedSearch } from './../components/searchNew';
import { AllImportFile } from '../code/searchFile/allImportFile';
import { Header } from "../components/header";
// import { Preloader } from "../components/preloader";

document.addEventListener('DOMContentLoaded', async () => {
  new Header();
  new AllImportFile();
  new AdvancedSearch();

  // new Preloader()
});
