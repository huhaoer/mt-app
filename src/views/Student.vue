<template>
    <div class="student">
        <Add-student></Add-student>
        <Student-list></Student-list>
    </div>
</template>

<script>
    import AddStudent from '@/components/student/AddStudent.vue'
    import StudentList from '@/components/student/StudentList.vue'
export default {
    components : {
        AddStudent,
        StudentList
    }
}
</script>

<style scoped>

</style>

