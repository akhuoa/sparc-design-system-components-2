import '../assets/styles.scss';

import ElementPlus from 'element-plus'

import SparcLogo from './SparcLogo.vue';
import LargeModal from './LargeModal.vue'
import SparcTooltip from './SparcTooltip.vue'
import SparcRadio from './SparcRadio.vue';
import DropdownMultiselect from './DropdownMultiselect/DropdownMultiselect.vue'
import Pagination from './Pagination.vue'
import PaginationMenu from './PaginationMenu.vue'
import BreadCrumbTrail from './BreadcrumbTrail.vue'
import IconCard from '.IconCard.vue'

export default {
  install(app) {
    app.use(ElementPlus)
    app.component('SparcLogo', SparcLogo);
    app.component('LargeModal', LargeModal);
    app.component('SparcTooltip', SparcTooltip);
    app.component('SparcRadio', SparcRadio);
    app.component('DropdownMultiselect', DropdownMultiselect);
    app.component('Pagination', Pagination);
    app.component('PaginationMenu', PaginationMenu);
    app.component('BreadCrumbTrail', BreadCrumbTrail);
    app.component('IconCard', IconCard)
  },
};
