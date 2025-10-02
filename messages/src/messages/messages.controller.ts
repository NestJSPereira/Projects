import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.services';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor() {
        // DON´T DO THIS ON REAL APPS
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body:createMessageDto) {
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return this.messagesService.findOne(id);
    }
}
