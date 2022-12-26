import { Injectable } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Publisher, PublisherGender, PublisherResposibility } from './dto/interface';

@Injectable()
export class PublishersService {
    create(createPublisherDto: CreatePublisherDto) {
        return 'This action adds a new publisher';
    }
    
    findAll() {
        const publishers: Publisher[] = [
            {
                firstName: 'John',
                lastName: 'Doe',
                gender: PublisherGender.MALE,
                allowedAssignments: [],
                lastAssigmentsDates: [],
                resposibilities: [ PublisherResposibility.ELDER ],
            },
            {
                firstName: 'James',
                lastName: 'Smith',
                gender: PublisherGender.MALE,
                allowedAssignments: [],
                lastAssigmentsDates: [],
                resposibilities: [ PublisherResposibility.ELDER ],
            },
            {
                firstName: 'Frank',
                lastName: 'White',
                gender: PublisherGender.MALE,
                allowedAssignments: [],
                lastAssigmentsDates: [],
                resposibilities: [ PublisherResposibility.ELDER ],
            }
        ];

        return publishers;
    }
    
    findOne(id: number) {
        return `This action returns a #${id} publisher`;
    }
    
    update(id: number, updatePublisherDto: UpdatePublisherDto) {
        return `This action updates a #${id} publisher`;
    }
    
    remove(id: number) {
        return `This action removes a #${id} publisher`;
    }
}
