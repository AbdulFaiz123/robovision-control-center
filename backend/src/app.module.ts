import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RobotSimulatorService } from './robot/robot-simulator.service';
import { RobotGateway } from './robot/robot.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RobotSimulatorService, RobotGateway],
})
export class AppModule { }
