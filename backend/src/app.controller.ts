import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome() {
    return {
      message: 'RoboVision backend is running',
    };
  }

  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      service: 'robovision-backend',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('robots/status')
  getRobotStatus() {
    return {
      robotId: 'MAIRA-SIM-01',
      status: 'IDLE',
      battery: 87,
      temperature: 42,
      jointAngles: [10, 20, 30, 40, 50, 60],
    };
  }
}