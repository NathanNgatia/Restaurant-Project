<template>
    <v-container>
        <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems" :key=item>
                    <v-card>
                        <v-card color="#b57c1d">
                            <v-card-item>
                                <v-card-title>{{item.name}}</v-card-title>

                                <v-card-subtitle>{{item.description}}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>
                            {{ item.price }}
                            </v-card-text>
                            <v-btn color="black" variant="tonal"  @click="addToOrder(item)">Order</v-btn>
                        </v-card>
                    </v-card>

                </v-col>
            </v-row>
            </v-container>
        </v-card>
    </v-container>
    <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="yellow">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>console.log('Menu Items:', menuItems)
console.log('Order Items:', orederItems)
console.log('Total Order Amount:', totalOrderAmount)

function calculateTotalAmount(price){
    console.log('Adding price to total order amount:', price)
    totalOrderAmount += price 
    console.log('New total order amount:', totalOrderAmount)
}

function addToOrder(item){
    console.log('Adding item to order:', item)
    orederItems.push(item)
    calculateTotalAmount(item.price)
    console.log('Updated order items:', orederItems)
}
</template>


<script setup>
const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "/louis-hansel-vi0kZuoe0-8-unsplash.jpg"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "/rachel-clark-MhI8HVjqJf8-unsplash.jpg"
    },
    {
        name: "Soda",
        price: 100,
        description: "cold sodas available",
        size: "Large",
        offers: "None",
        image: "/hamed-mohtashami-pouya-hZzlzzdMkDQ-unsplash.jpg"
    },
    {
        name: "Chapati",
        price: 50,
        description: "Best chapatis in town",
        size: "None",
        offers: "None",
        image: "/usman-yousaf-4GDW-Rt4BVQ-unsplash.jpg"
    },
    {
        name: "Tea",
        price: 80,
        description: "Best chai in town",
        size: "Large",
        offers: "None",
        image: "/rumman-amin-bJzJH85Kp7g-unsplash.jpg"
    },
    {
        name: "Wine",
        price: 5000,
        description: "Best wine in town",
        size: "None",
        offers: "None",
        image: "/terry-vlisidis-0dhIwRsPV74-unsplash.jpg"
    }
]

//manage the current state of the order
var orederItems=[]
var totalOrderAmount = 0

function calculateTotalAmount(price){
    totalOrderAmount += price 
}

function addToOrder(item){
    orderItems.push(item)
    calculateTotalAmount(item.price)
}
</script>