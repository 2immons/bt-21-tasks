<template>
  <div class="popup-wrapper">
    <div v-show="isPopupVisible" @click="closePopup" class="overlay"></div>
    <div v-show="isPopupVisible" class="popup">
      <div class="popup-content">
        <h2 class="title">Регистрация</h2>
        <div class="input-container">
          <input type="text" placeholder="Имя" v-model="name">
          <input type="text" placeholder="Фамилия" v-model="surname">
        </div>
        <div class="input-container">
          <input type="text" placeholder="Email" v-model="email">
          <input type="text" placeholder="Телефон" v-model="phone">
        </div>
        <input type="text" placeholder="Адрес" v-model="address">
        <div class="submit-section">
          <button class="submit-button" id="submitBtn" @click="submitForm">Отправить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isPopupVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      phone: '',
      address: ''
    };
  },
  methods: {
    closePopup() {
      this.$emit('close-popup');
      this.name = '',
      this.surname = '',
      this.email = '',
      this.phone = '',
      this.address = ''
    },
    submitForm() {
      const formData = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        address: this.address
      };
      this.$emit('form-submitted', formData);
      this.closePopup();
    }
  }
}
</script>

<style scoped>
.submit-button{
  display: flex;
  font-weight: bold;
  justify-content: center;
  width: 100px;
  margin-bottom: 10px;
}

.submit-section{
  display: flex;
  justify-content: center;
  width: 100%;
}

.overlay {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
  
.popup {
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  max-width: calc(100% - 10px);
  width: 500px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  overflow-y: auto;
}
  
.popup-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title{
  display: flex;
  font-weight: bold;
  justify-content: center;
  font-size: 20px;
  width: 100%;
}

.input-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.input-container input {
  flex: 1;
}

@media (max-width: 500px) {
  .input-container {
    flex-direction: column;
  }
}
</style>