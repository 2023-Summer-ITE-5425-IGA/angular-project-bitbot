/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './shared.module';
import * as i2 from '../../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory';
import * as i3 from '../../../node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory';
import * as i4 from '../../../node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory';
import * as i5 from '../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory';
import * as i6 from '../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory';
import * as i7 from '../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory';
import * as i8 from '../../../node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory';
import * as i9 from '@angular/common';
import * as i10 from '@angular/forms';
import * as i11 from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import * as i12 from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as i13 from '@ng-bootstrap/ng-bootstrap/alert/alert-config';
import * as i14 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config';
import * as i15 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config';
import * as i16 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config';
import * as i17 from '@ng-bootstrap/ng-bootstrap/accordion/accordion-config';
import * as i18 from '@ng-bootstrap/ng-bootstrap/carousel/carousel-config';
import * as i19 from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import * as i20 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n';
import * as i21 from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';
import * as i22 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config';
import * as i23 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config';
import * as i24 from '@ng-bootstrap/ng-bootstrap/pagination/pagination-config';
import * as i25 from '@ng-bootstrap/ng-bootstrap/popover/popover-config';
import * as i26 from '@ng-bootstrap/ng-bootstrap/rating/rating-config';
import * as i27 from '@ng-bootstrap/ng-bootstrap/tabset/tabset-config';
import * as i28 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config';
import * as i29 from 'angularfire2';
import * as i30 from 'angularfire2/auth';
import * as i31 from 'angularfire2/database';
import * as i32 from './services/user.service';
import * as i33 from './services/auth.service';
import * as i34 from './services/auth-guard.service';
import * as i35 from '@angular/router';
import * as i36 from './services/category.service';
import * as i37 from './services/product.service';
import * as i38 from './services/shopping-cart.service';
import * as i39 from './services/order.service';
import * as i40 from 'ng2-validation/dist/index';
import * as i41 from 'angular-4-data-table/src/index';
import * as i42 from '@ng-bootstrap/ng-bootstrap/alert/alert.module';
import * as i43 from '@ng-bootstrap/ng-bootstrap/buttons/buttons.module';
import * as i44 from '@ng-bootstrap/ng-bootstrap/collapse/collapse.module';
import * as i45 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module';
import * as i46 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module';
import * as i47 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module';
import * as i48 from '@ng-bootstrap/ng-bootstrap/accordion/accordion.module';
import * as i49 from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
import * as i50 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import * as i51 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import * as i52 from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import * as i53 from '@ng-bootstrap/ng-bootstrap/pagination/pagination.module';
import * as i54 from '@ng-bootstrap/ng-bootstrap/popover/popover.module';
import * as i55 from '@ng-bootstrap/ng-bootstrap/rating/rating.module';
import * as i56 from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';
import * as i57 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module';
import * as i58 from '@ng-bootstrap/ng-bootstrap/index';
export const SharedModuleNgFactory:i0.NgModuleFactory<i1.SharedModule> = i0.ɵcmf(i1.SharedModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i2.NgbAlertNgFactory,i3.NgbTooltipWindowNgFactory,i4.NgbTypeaheadWindowNgFactory,
              i5.NgbDatepickerNgFactory,i6.NgbModalBackdropNgFactory,i7.NgbModalWindowNgFactory,
              i8.NgbPopoverWindowNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
          i0.ɵmpd(4608,i9.NgLocalization,i9.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(4608,
              i10.ɵi,i10.ɵi,([] as any[])),i0.ɵmpd(4608,i11.NgbModalStack,i11.NgbModalStack,
              [i0.ApplicationRef,i0.Injector,i0.ComponentFactoryResolver]),i0.ɵmpd(4608,
              i12.NgbModal,i12.NgbModal,[i0.ComponentFactoryResolver,i0.Injector,i11.NgbModalStack]),
          i0.ɵmpd(4608,i13.NgbAlertConfig,i13.NgbAlertConfig,([] as any[])),i0.ɵmpd(4608,
              i14.NgbProgressbarConfig,i14.NgbProgressbarConfig,([] as any[])),i0.ɵmpd(4608,
              i15.NgbTooltipConfig,i15.NgbTooltipConfig,([] as any[])),i0.ɵmpd(4608,
              i16.NgbTypeaheadConfig,i16.NgbTypeaheadConfig,([] as any[])),i0.ɵmpd(4608,
              i17.NgbAccordionConfig,i17.NgbAccordionConfig,([] as any[])),i0.ɵmpd(4608,
              i18.NgbCarouselConfig,i18.NgbCarouselConfig,([] as any[])),i0.ɵmpd(4608,
              i19.NgbCalendar,i19.NgbCalendarGregorian,([] as any[])),i0.ɵmpd(4608,
              i20.NgbDatepickerI18n,i20.NgbDatepickerI18nDefault,([] as any[])),i0.ɵmpd(4608,
              i21.NgbDateParserFormatter,i21.NgbDateISOParserFormatter,([] as any[])),
          i0.ɵmpd(4608,i22.NgbDatepickerConfig,i22.NgbDatepickerConfig,([] as any[])),
          i0.ɵmpd(4608,i23.NgbDropdownConfig,i23.NgbDropdownConfig,([] as any[])),
          i0.ɵmpd(4608,i24.NgbPaginationConfig,i24.NgbPaginationConfig,([] as any[])),
          i0.ɵmpd(4608,i25.NgbPopoverConfig,i25.NgbPopoverConfig,([] as any[])),i0.ɵmpd(4608,
              i26.NgbRatingConfig,i26.NgbRatingConfig,([] as any[])),i0.ɵmpd(4608,
              i27.NgbTabsetConfig,i27.NgbTabsetConfig,([] as any[])),i0.ɵmpd(4608,
              i28.NgbTimepickerConfig,i28.NgbTimepickerConfig,([] as any[])),i0.ɵmpd(5120,
              i29.FirebaseApp,i29.ɵa,[i29.FirebaseAppConfigToken,i29.FirebaseAppName]),
          i0.ɵmpd(5120,i30.AngularFireAuth,i30._getAngularFireAuth,[i29.FirebaseApp]),
          i0.ɵmpd(5120,i31.AngularFireDatabase,i31._getAngularFireDatabase,[i29.FirebaseApp]),
          i0.ɵmpd(4608,i32.UserService,i32.UserService,[i31.AngularFireDatabase]),
          i0.ɵmpd(4608,i33.AuthService,i33.AuthService,[i32.UserService,i30.AngularFireAuth]),
          i0.ɵmpd(4608,i34.AuthGuardService,i34.AuthGuardService,[i33.AuthService,
              i35.Router]),i0.ɵmpd(4608,i36.CategoryService,i36.CategoryService,[i31.AngularFireDatabase]),
          i0.ɵmpd(4608,i37.ProductService,i37.ProductService,[i31.AngularFireDatabase]),
          i0.ɵmpd(4608,i38.ShoppingCartService,i38.ShoppingCartService,[i31.AngularFireDatabase]),
          i0.ɵmpd(4608,i39.OrderService,i39.OrderService,[i31.AngularFireDatabase,
              i38.ShoppingCartService]),i0.ɵmpd(512,i9.CommonModule,i9.CommonModule,
              ([] as any[])),i0.ɵmpd(512,i35.RouterModule,i35.RouterModule,[[2,i35.ɵa],
              [2,i35.Router]]),i0.ɵmpd(512,i10.ɵba,i10.ɵba,([] as any[])),i0.ɵmpd(512,
              i10.FormsModule,i10.FormsModule,([] as any[])),i0.ɵmpd(512,i40.CustomFormsModule,
              i40.CustomFormsModule,([] as any[])),i0.ɵmpd(512,i41.DataTableModule,
              i41.DataTableModule,([] as any[])),i0.ɵmpd(512,i42.NgbAlertModule,i42.NgbAlertModule,
              ([] as any[])),i0.ɵmpd(512,i43.NgbButtonsModule,i43.NgbButtonsModule,
              ([] as any[])),i0.ɵmpd(512,i44.NgbCollapseModule,i44.NgbCollapseModule,
              ([] as any[])),i0.ɵmpd(512,i45.NgbProgressbarModule,i45.NgbProgressbarModule,
              ([] as any[])),i0.ɵmpd(512,i46.NgbTooltipModule,i46.NgbTooltipModule,
              ([] as any[])),i0.ɵmpd(512,i47.NgbTypeaheadModule,i47.NgbTypeaheadModule,
              ([] as any[])),i0.ɵmpd(512,i48.NgbAccordionModule,i48.NgbAccordionModule,
              ([] as any[])),i0.ɵmpd(512,i49.NgbCarouselModule,i49.NgbCarouselModule,
              ([] as any[])),i0.ɵmpd(512,i50.NgbDatepickerModule,i50.NgbDatepickerModule,
              ([] as any[])),i0.ɵmpd(512,i51.NgbDropdownModule,i51.NgbDropdownModule,
              ([] as any[])),i0.ɵmpd(512,i52.NgbModalModule,i52.NgbModalModule,([] as any[])),
          i0.ɵmpd(512,i53.NgbPaginationModule,i53.NgbPaginationModule,([] as any[])),
          i0.ɵmpd(512,i54.NgbPopoverModule,i54.NgbPopoverModule,([] as any[])),i0.ɵmpd(512,
              i55.NgbRatingModule,i55.NgbRatingModule,([] as any[])),i0.ɵmpd(512,i56.NgbTabsetModule,
              i56.NgbTabsetModule,([] as any[])),i0.ɵmpd(512,i57.NgbTimepickerModule,
              i57.NgbTimepickerModule,([] as any[])),i0.ɵmpd(512,i58.NgbRootModule,
              i58.NgbRootModule,([] as any[])),i0.ɵmpd(512,i29.AngularFireModule,i29.AngularFireModule,
              ([] as any[])),i0.ɵmpd(512,i30.AngularFireAuthModule,i30.AngularFireAuthModule,
              ([] as any[])),i0.ɵmpd(512,i31.AngularFireDatabaseModule,i31.AngularFireDatabaseModule,
              ([] as any[])),i0.ɵmpd(512,i1.SharedModule,i1.SharedModule,([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjovb3JnYW5pYy1zaG9wLW1hc3Rlci9vcmdhbmljLXNob3Avc3JjL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9GOi9vcmdhbmljLXNob3AtbWFzdGVyL29yZ2FuaWMtc2hvcC9zcmMvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
