<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ref, onMounted } from "vue";
import axios from "axios";
import { CartProduct, Product } from "@/interfaces/Product";
import CartTable from "@/components/cart/table/CartTable.vue";
import FormOrder from "@/components/cart/FormOrder.vue"

const cartProducts = ref<CartProduct[]>([]);
const renderKey = ref(0);

const fetchCartProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/cart");
    cartProducts.value = [...response.data];
    renderKey.value++;
    console.log(cartProducts.value);
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchCartProducts);
</script>

<template>
  <CartTable v-if="cartProducts.length" :cartProducts="cartProducts" @product-deleted="fetchCartProducts" @amount-changed="fetchCartProducts" :key="renderKey"/>
  <FormOrder v-if="cartProducts.length" @order-formed="fetchCartProducts"></FormOrder>
  <div v-else>Пустая корзина</div>
</template>
