<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ref } from "vue";
import axios from "axios";

const emit = defineEmits(["order-formed"]);

const createOrder = async () => {
    try {
        await axios.post("http://localhost:3000/orders");
        emit("order-formed");
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
	<Button
		@click="createOrder"
		class="bg-green-400 hover:bg-green-600 active:bg-green-900 mt-5"
		>Создать заказ</Button
	>
</template>
