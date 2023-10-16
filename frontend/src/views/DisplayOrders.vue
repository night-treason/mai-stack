<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { CartProduct, Product } from "@/interfaces/Product";
import OrdersTable from "@/components/orders/table/OrdersTable.vue";
import { Order } from "@/interfaces/Order";

const orders = ref<Order[]>([]);
const renderKey = ref(0);

const fetchOrders = async () => {
  try {
    const response = await axios.get("http://localhost:3000/orders");
    orders.value = [...response.data];
    renderKey.value++;
    console.log(orders.value);
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchOrders);
</script>

<template>
  <OrdersTable v-if="orders.length" :orders="orders" :key="renderKey"/>
  <div v-else>Заказов нет</div>
</template>
