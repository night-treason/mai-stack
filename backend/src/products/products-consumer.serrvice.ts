import { Injectable } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class ProductsConsumerService {
 private kafka;

 constructor() {
   this.kafka = new Kafka({
     clientId: 'my-app',
     brokers: ['localhost:9092'],
   });
 }

 async consumeInventoryUpdatedMessages(): Promise<void> {
   const consumer = this.kafka.consumer({ groupId: 'my-group' });
   await consumer.connect();
   await consumer.subscribe({ topic: 'inventory-updated', fromBeginning: true });

   await consumer.run({
     eachMessage: async ({ topic, partition, message }) => {
       console.log({
         value: message.value.toString(),
       });
     },
   });
 }
}
