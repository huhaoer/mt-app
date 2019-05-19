<template>
    <div class="login">
        <button @click="handleClick">登陆</button>
    </div>
</template>

<script>
export default {
    methods : {
        handleClick() {
            const maxAge = 100 * 24 * 60 * 60 *1000//换算成毫秒数
            const date = new Date( +new Date() + maxAge); 
            document.cookie = `login=true;max-age=${date.toUTCString()}`
        }
    }
}
</script>
