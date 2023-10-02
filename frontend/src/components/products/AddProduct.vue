<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ref } from "vue";
import axios from "axios";


const name = ref("");
const color = ref("")
const weight = ref("")
const width = ref("")
const height = ref("")
const depth = ref("")
const isOpen = ref(false)
const isSending = ref(false)

const postData = () => {
  const inputData = {
    name: name.value,
    color: color.value,
    weight: weight.value,
    width: width.value,
    height: height.value,
    depth: depth.value,
  };

  isSending.value = true

  axios
    .post("http://localhost:3000/products/add", inputData)
    .then((response) => {
      console.log(response.data);
      isOpen.value = false;
      isSending.value = false
    })
    .catch((error) => {
      console.error(error);
      isOpen.value = false;
      isSending.value = false
    });
};
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger asChild>
      <Button
        variant="outline"
        class="mt-6"
        >Add</Button
      >
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>New Product</DialogTitle>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Input v-model="name" id="name" class="col-span-3" placeholder="Name" />
          <Input v-model="color" id="color" class="col-span-3" placeholder="Color" />
          <Input v-model="weight" id="weight" class="col-span-3" placeholder="Weight" />
          <Input v-model="width" id="width" class="col-span-3" placeholder="Width" />
          <Input v-model="height" id="height" class="col-span-3" placeholder="Height" />
          <Input v-model="depth" id="depth" class="col-span-3" placeholder="Depth" />
        </div>
      </div>
      <DialogFooter>
        <Button
          variant="secondary"
          type="submit"
          @click="postData"
          v-model:disabled="isSending"
          >{{ isSending ? 'Loading...' : 'Submit' }}</Button
        >
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
