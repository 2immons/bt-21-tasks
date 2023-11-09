<template>
  <div class="container">
    <Navbar />
    <Popup :is-popup-visible="isPopupVisible" @close-popup="isPopupVisible = false" @form-submitted="handleFormSubmitted"/>
    <section class="content">
      <button @click="openPopup" class="start-button">Начать</button>
      <h2 class="title">Данные о пользователях:</h2>
      <ul>
        <li v-for="(formData, index) in formSubmissions" :key="index">
          Имя: {{ formData.name }}, Фамилия: {{ formData.surname }}, Email: {{ formData.email }}, Телефон: {{ formData.phone }}, Адрес: {{ formData.address }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Popup from '../components/Popup.vue'

export default {
  components: {
    Navbar,
    Popup
  },
  data() {
    return {
      isPopupVisible: false,
      formSubmissions: []
    };
  },
  methods: {
    openPopup() {
      this.isPopupVisible = true;
    },
    handleFormSubmitted(formData) {
      this.formSubmissions.push(formData);
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  width: 100%;
}

.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0;
}

.start-button, .submit-button{
  display: flex;
  font-weight: bold;
  justify-content: center;
  width: 100px;
  margin-bottom: 10px;
}

.title{
  display: flex;
  font-weight: bold;
  justify-content: center;
  font-size: 20px;
  width: 100%;
}

</style>