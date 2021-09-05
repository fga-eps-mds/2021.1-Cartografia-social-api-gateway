import { Test, TestingModule } from '@nestjs/testing';
import { MapasController } from '../../src/mapas/mapas.controller';

describe('MapasController', () => {
  let controller: MapasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'MAPA_SERVICE',
          useValue: {
            send: jest.fn(),
          },
        },
      ],
      controllers: [MapasController],
    }).compile();

    controller = module.get<MapasController>(MapasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});