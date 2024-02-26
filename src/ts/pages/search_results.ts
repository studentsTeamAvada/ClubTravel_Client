import { AdvancedSearch } from './../components/searchNew';
import { AllImportFile } from '../code/searchFile/allImportFile';
import { Header } from '../components/header';


document.addEventListener('DOMContentLoaded', async () => {
  new AllImportFile();
  new AdvancedSearch();
  new Header();
});
