<template>
    <div>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto" max-width="344" v-bind="props">
                <v-img :src="image.src" :alt="image.alt" height="200" cover class="bg-grey-lighten-2">
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="primary"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>

                <v-card-text>
                    <h2 class="text-h6 text-primary">
                        Magento Forests
                    </h2>
                    Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                </v-card-text>



                <v-overlay :model-value="!!isHovering" class="align-center justify-center" scrim="#036358" contained>
                    <v-btn variant="flat">See more info</v-btn>
                    <v-scale-transition></v-scale-transition>
                </v-overlay>
            </v-card>
        </v-hover>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            required: true
        }
    }

}
</script>

<style></style>