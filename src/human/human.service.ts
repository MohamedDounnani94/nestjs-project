import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Human } from './human.entity'
import IHuman from './human.interface'

@Injectable()
export class HumanService {
  constructor(
    @InjectRepository(Human)
    private humansRepository: Repository<Human>,
  ) {}

  async create(human: IHuman): Promise<string> {
    const existingHuman = await this.humansRepository.findOne({taxCode: human.taxCode})
    if(existingHuman) return `Another human already exists with this taxCode: ${human.taxCode}`
    const resource = await this.humansRepository.save(human)
    return `${resource.name + ' ' + resource.lastname} successfully created`
  }
  async findAll(): Promise <Human[]> {
    return this.humansRepository.find()
  }

  findOneById(id: number): Promise <Human> {
    return this.humansRepository.findOne(id)
  }

  async remove(id: string): Promise<void> {
    await this.humansRepository.delete(id)
  }
}