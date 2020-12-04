<template>
<div class="not-list">
    <Notification v-for="(not,ind) in notifications" :key="ind" :details="not">
    </Notification>
</div>
</template>

<script>
import {mapState} from 'vuex';
import Notification from '@/components/Notification.vue';

export default {
    computed: {
        ...mapState(['notifications'])
    },
    components: {
        Notification,
    }
}
</script>

<style scoped>
.not-list
{
    position: fixed;
    top: 12px; right: 12px;
    z-index: 5;
}
</style>