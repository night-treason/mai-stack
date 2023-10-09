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
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const cartProducts = ref<CartProduct[]>([]);

const fetchCartProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/cart");
    cartProducts.value = response.data;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const deleteHandler = async (id) => {
  try {
    await axios.delete("http://localhost:3000/cart/products/" + id);
    await fetchCartProducts();
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchCartProducts);
</script>

<template>
  <CartTable v-if="cartProducts.length" :cartProducts="cartProducts" :deleteHandler="deleteHandler" />
</template>
