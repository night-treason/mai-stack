import { Injectable } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class ProductsProducerService {
 private kafka;

 constructor() {
   this.kafka = new Kafka({
     clientId: 'my-app',
     brokers: ['localhost:9092'],
   });
 }

 async sendProductCreatedMessage(product: any): Promise<void> {
   const producer = this.kafka.producer();
   await producer.connect();
   await producer.send({
     topic: 'product-created',
     messages: [{ value: JSON.stringify(product) }],
   });
   await producer.disconnect();
 }
}
