import { Module } from '@nestjs/common';
import { HumanController } from './human.controller';
import { HumanService } from './human.service';
import { Human } from './human.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Human])],
  controllers: [HumanController],
  providers: [HumanService],
  exports: [TypeOrmModule]
})
export class HumanModule {}
