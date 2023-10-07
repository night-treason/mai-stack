<template>
    <nav class="absolute top-12 left-0 right-0 cursor-pointer">
        <ul class="flex justify-center mx-auto">
            <router-link to="/products">
                <li class="p-4 hover:border-b-2 hover:border-green-600 text-black">
                    Продукты
                </li>
            </router-link>
            <router-link to="/orders">
                <li class="p-4 hover:border-b-2 hover:border-green-600 text-black">
                    Заказы
                </li>
            </router-link>
            <router-link to="/cart">
                <li class="p-4 hover:border-b-2 hover:border-green-600 text-black">
                    Корзина
                </li>
            </router-link>
        </ul>
    </nav>
</template>
  
  