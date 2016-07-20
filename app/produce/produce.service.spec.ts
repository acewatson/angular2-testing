// import {
//   it, describe, expect, beforeEach, inject, async, tick, addProviders, fakeAsync
// } from '@angular/core/testing';
// import {Http, BaseRequestOptions, ConnectionBackend} from '@angular/http';
// import {MockBackend, MockConnection} from "@angular/http/testing";
//
// import {ProduceService} from "./produce.service";
// import {IProduce} from "./produce";
// import {provide} from "@angular/core";
//
//
// describe('ProductService: Tests', () => {
//
//   beforeEach(() => {
//     addProviders([ProduceService,MockBackend,BaseRequestOptions,
//       provide(Http, {
//         useFactory: function (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) {
//           return new Http(backend, defaultOptions);
//         },
//         deps: [MockBackend, BaseRequestOptions]
//       })
//     ]);
//   });
//
//     it('should return all customers',
//     fakeAsync(inject([ProduceService], ( productService: ProduceService) => {
//       let products: IProduce[] = [];
//       productService.getProduce()
//         .subscribe(
//           (response) => {
//             products = response;
//           }
//         );
// tick();
//       expect(products.length).toBeGreaterThan(0);
//     })));
//
//
// });
