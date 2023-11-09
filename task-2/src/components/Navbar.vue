<template>
    <div class="header">
        <div class="navbar">
            <RouterLink to="/">Главная</RouterLink>
            <RouterLink to="/result">Результат</RouterLink>
        </div>
    </div>
</template>

<script>

</script>

<style>
.header{
    display: flex;
    width: 100%;
    position: fixed;
}

.navbar {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #333;
    overflow: hidden;
}

.navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}

</style>