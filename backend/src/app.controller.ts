import { Controller, Get } from '@nestjs/common';
import { RobotSimulatorService } from './robot/robot-simulator.service';

@Controller()
export class AppController {
  constructor(private readonly robotSimulatorService: RobotSimulatorService) { }
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
    return this.robotSimulatorService.getCurrentTelemetry();
  }
}