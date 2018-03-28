import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { CarService } from './car.service';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';

describe('CarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        CarService
      ]
    });
  });

  it('should be created', inject([CarService], (service: CarService) => {
    expect(service).toBeTruthy();
  }));

  describe('getCars()', () => {

    it('should return an Observable<Array<Car>>',
        inject([CarService, XHRBackend], (CarService, mockBackend) => {

        const mockResponse =
          [
            { id: 0, name: 'Car 0' },
            { id: 1, name: 'Car 1' },
            { id: 2, name: 'Car 2' },
            { id: 3, name: 'Car 3' },
          ];

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        CarService.getCars().subscribe((Cars) => {
          expect(Cars.length).toBe(4);
          expect(Cars[0].name).toEqual('Car 0');
          expect(Cars[1].name).toEqual('Car 1');
          expect(Cars[2].name).toEqual('Car 2');
          expect(Cars[3].name).toEqual('Car 3');
        });

    }));
  });

});
